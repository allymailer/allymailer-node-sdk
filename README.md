# AllyMailer Node.js SDK

[![Node.js](https://img.shields.io/npm/v/@allymailer/allymailer-node-sdk)](https://www.npmjs.com/package/@allymailer/allymailer-node-sdk) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Офіційна бібліотека Node.js для API транзакційних листів [AllyMailer](https://allymailer.com.ua).

[Довідник API](https://docs.allymailer.com.ua/ua/web-api-ref) · Документація для LLM: [llms.txt](https://docs.allymailer.com.ua/llms.txt)

> **Express або NestJS?** Встановіть [`@allymailer/express`](https://github.com/allymailer/allymailer-express) або [`@allymailer/nestjs`](https://github.com/allymailer/allymailer-nestjs): у ньому цей SDK, налаштування, поштовий транспорт і маршрут для вебхуків.

## Встановлення

```bash
npm install @allymailer/allymailer-node-sdk
```

Вимоги: Node.js 18+. Сторонніх залежностей немає.

Для Node.js 14 — лінія 1.x (гілка `1.x`), API той самий.

Отримайте API-ключ у [панелі керування](https://cp.allymailer.com) і зберігайте його у змінній оточення, а не в коді:

```bash
export ALLYMAILER_API_KEY="your-api-key"
```

## Надсилання листа

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { MessageObjectRecipientsItem as Recipient } from "@allymailer/allymailer-node-sdk/api/email";

const client = new AllyMailerClient(process.env.ALLYMAILER_API_KEY);

const { jobId } = await client.email.send({
  message: {
    recipients: [Recipient.fromAddress("Олексій <alex@example.com>")],
    from_email: "shop@example.com",
    from_name: "Магазин",
    subject: "Ваше замовлення",
    body: { html: "<p>Вітаємо, {{to_name}}! Ваше замовлення надіслано.</p>" },
  },
});
console.log(jobId);
```

Адреса відправника має бути на домені, підтвердженому у вашому обліковому записі. Домену ще немає? Надішліть лист із [sandbox-домену](#без-свого-домену-тестовий-sandbox-домен) у три кроки.

## Зміст

- [Рецепти](#рецепти): персоналізація · вкладення · копія і прихована копія · відкладене надсилання · безпечний повтор · помилки · вебхуки
- [Без свого домену: тестовий sandbox-домен](#без-свого-домену-тестовий-sandbox-домен)
- [Запуск у продакшен](#запуск-у-продакшен)
- [Довідник](#довідник)
- [Допомога](#допомога)

## Рецепти

Кожен рецепт продовжує приклад вище: клієнт та імпорти вже є.

### Персоналізація для кожного одержувача

До 500 одержувачів в одному виклику, кожен отримує окрему копію зі своїми підстановками. Метадані одержувача повертаються в його подіях вебхука.

```javascript
await client.email.send({
  message: {
    recipients: [
      Recipient.fromAddress("Олексій <alex@example.com>", { order: "1001" })
        .withMetadata({ user_id: "42" }),
      Recipient.fromAddress("Марія <maria@example.com>", { order: "1002" })
        .withMetadata({ user_id: "43" }),
    ],
    from_email: "shop@example.com",
    subject: "Замовлення №{{order}}",
    body: { html: "<p>{{to_name}}, замовлення №{{order}} надіслано.</p>" },
  },
});
```

### Вкладення

```javascript
import { readFile } from "node:fs/promises";

const content = (await readFile("invoice.pdf")).toString("base64");

await client.email.send({
  message: {
    recipients: [Recipient.fromAddress("alex@example.com")],
    from_email: "shop@example.com",
    subject: "Рахунок",
    body: { html: "<p>Рахунок у вкладенні.</p>" },
    attachments: [{ type: "application/pdf", name: "invoice.pdf", content }],
  },
});
```

### Копія і прихована копія

Усі адреси передаються в `recipients` (кожна отримує копію), видимі — ще й у заголовках. `audit@example.com` немає в жодному заголовку: це прихована копія. Правила й обмеження: [копія і прихована копія](https://docs.allymailer.com.ua/ua/cc-and-bcc).

```javascript
await client.email.send({
  message: {
    recipients: ["alex@example.com", "boss@example.com", "audit@example.com"].map((a) => Recipient.fromAddress(a)),
    from_email: "shop@example.com",
    subject: "Звіт за тиждень",
    body: { html: "<p>Звіт у вкладенні.</p>" },
    headers: { To: "alex@example.com", CC: "boss@example.com" },
  },
});
```

### Відкладене надсилання

`send_at` — в UTC, не далі ніж на 24 години вперед.

```javascript
// UTC, "YYYY-MM-DD hh:mm:ss"
const inOneHour = new Date(Date.now() + 3600_000).toISOString().slice(0, 19).replace("T", " ");

await client.email.send({
  message: {
    recipients: [Recipient.fromAddress("alex@example.com")],
    from_email: "shop@example.com",
    subject: "Нагадування",
    body: { plaintext: "До зустрічі завтра!" },
    options: { send_at: inOneHour },
  },
});
```

### Безпечний повтор

Повтор із тим самим `idempotence_key` протягом хвилини не надішлеться вдруге: з ним повторюйте мережеві помилки, таймаути, 429 і 5xx.

```javascript
await client.email.send({
  message: {
    recipients: [Recipient.fromAddress("alex@example.com")],
    from_email: "shop@example.com",
    subject: "Скидання пароля",
    body: { html: "<p>Посилання для скидання пароля.</p>" },
    idempotence_key: "password-reset-8f3a",
  },
});
```

### Обробка помилок

Одержувачі, яких API відкинув (відписані, неіснуючі, у стоп-листі), — не помилка: вони у `failed_emails` відповіді, решта лист отримає.

```javascript
import { ApiError } from "@allymailer/allymailer-node-sdk";

try {
  await client.email.send(request);
} catch (e) {
  if (!(e instanceof ApiError)) throw e;
  // HTTP-статус (0: мережева помилка або таймаут), код помилки API, повідомлення
  console.error(e.httpStatus, e.errorCode, e.message);
}
```

### Статуси доставки

Зареєструйте свою HTTPS-адресу один раз (`webhook/set`). Потім перевіряйте підпис кожного сповіщення (`auth`: MD5 сирого тіла, у якому значення `auth` замінено на API-ключ; на неправильний — 401) і обробляйте події.

```javascript
import { createHash } from "node:crypto";
import { WebhookApi } from "@allymailer/allymailer-node-sdk/api/webhook";

// rawBody: тіло POST-запиту як надійшло; повертає HTTP-статус відповіді
function handleWebhook(rawBody) {
  const callback = WebhookApi.parseCallback(rawBody);
  // auth: MD5 сирого тіла, у якому значення auth замінено на ваш API-ключ
  const signed = rawBody.replace(callback.auth, process.env.ALLYMAILER_API_KEY);
  if (createHash("md5").update(signed).digest("hex") !== callback.auth) return 401;

  for (const user of callback.eventsByUser ?? []) {
    for (const event of user.events ?? []) {
      // event.eventData: email, status (delivered, opened, hard_bounced, spam, ...), jobId, metadata
    }
  }
  return 200;
}
```

> **Відповідайте 200 протягом 3 секунд**, а події обробляйте у фоні (через чергу): інакше AllyMailer повторює запит кожні 10 хвилин протягом доби (зростає `retry_count`), а обробник, на якому за добу не пройшов жоден запит хоча б для 10 подій, вимикається. Обробник має витримувати **щонайменше 5 паралельних запитів до 100 подій у кожному**; повтор надсилає ті самі події ще раз — прибирайте дублікати.

## Без свого домену: тестовий sandbox-домен

Поки ваш домен не підтверджено, листи можна надсилати із **sandbox-домену** — тестового домену, який є в кожного облікового запису: він уже підтверджений, DKIM і SPF налаштовані. Листи з нього доставляються лише на підтверджені вами адреси (посилання для підтвердження приходить листом і діє 48 годин), до 100 на день. Через 31 день після створення sandbox-домен видаляється, але його можна отримати знову: наступний виклик `domain/get-sandbox-domain` створить новий (з іншою назвою, тому беріть її з відповіді, а не прописуйте в коді).

```javascript
// 1. Ваш sandbox-домен: створюється під час першого виклику, далі повертається той самий
const { domain } = await client.domain.getSandboxDomain();

// 2. Підтвердіть свою скриньку: AllyMailer надішле посилання, перейдіть за ним протягом 48 годин
await client.confirmedEmail.create({ email: "you@example.com" });

// 3. Надішліть із будь-якої адреси sandbox-домену на підтверджену адресу
await client.email.send({
  message: {
    recipients: [Recipient.fromAddress("you@example.com")],
    from_email: `noreply@${domain}`,
    subject: "Привіт від AllyMailer",
    body: { html: "<p>Працює!</p>" },
  },
});
```

<details>
<summary>Обмеження sandbox</summary>

- Надсилання лише на підтверджені адреси: до 10 на обліковий запис.
- До 100 листів на день.
- Sandbox-домен спливає через 31 день; знову викличте `domain/get-sandbox-domain`, щоб отримати новий.
- Працює лише з API-ключем облікового запису, не з ключем проєкту.
- Не показується в `domain/list`; інші методи `domain/*` до нього не застосовуються.

Sandbox — для розробки та тестування. Не використовуйте sandbox-домен як відправника на проді.

</details>

<details>
<summary>Те саме через curl</summary>

```bash
BASE=https://cp.allymailer.com/ua/transactional/api/v1

curl -s -X POST $BASE/domain/get-sandbox-domain.json \
  -H "Content-Type: application/json" -H "X-API-KEY: $ALLYMAILER_API_KEY" -d '{}'

curl -s -X POST $BASE/confirmed-email/create.json \
  -H "Content-Type: application/json" -H "X-API-KEY: $ALLYMAILER_API_KEY" \
  -d '{"email": "you@example.com"}'

curl -s -X POST $BASE/email/send.json \
  -H "Content-Type: application/json" -H "X-API-KEY: $ALLYMAILER_API_KEY" \
  -d '{
        "message": {
          "recipients": [
            {
              "email": "you@example.com"
            }
          ],
          "from_email": "noreply@<sandbox-domain>",
          "subject": "Привіт від AllyMailer",
          "body": {
            "html": "<p>Працює!</p>"
          }
        }
      }'
```

</details>

## Запуск у продакшен

**1. Підтвердіть домен надсилання.** `domain/get-dns-records` повертає запис підтвердження, DKIM-ключ і адресу для DMARC; додайте записи у свого DNS-провайдера, потім `domain/validate-verification-record` і `domain/validate-dkim`.

| Тип | Хост | Значення | Звідки взяти |
|---|---|---|---|
| TXT | `@` | `allymailer-validate-hash=…` | поле `verification-record` відповіді, як є |
| TXT | `<селектор>._domainkey` (селектор — на сторінці домену в панелі керування, наприклад `us`) | `v=DKIM1; k=rsa; p=<dkim>` | поле `dkim` відповіді після `v=DKIM1; k=rsa; p=` |
| TXT | `@` | `v=spf1 include:spf.allymailer.com ~all` | у відповіді немає; якщо SPF-запис уже є, додайте include до нього |
| CNAME | `_dmarc` | `<домен>.dmarc.…` | поле `dmarc` відповіді (DMARC-політику публікує AllyMailer); якщо в домену вже є свій TXT-запис DMARC, залиште його |

**2. Надійне надсилання.**

| | |
|---|---|
| Повтори | `429` і `5xx` з backoff і тим самим `idempotence_key`; інші помилки виправляйте, а не повторюйте |
| Ліміти | 500 одержувачів і 10 МБ на запит разом із вкладеннями: у base64 файл стає приблизно на третину більшим |
| Тіло | завжди `html` або `plaintext` (або із шаблону) |
| Статус доставки | вебхук, а не опитування |
| Черга | надсилайте з фонового завдання, а не всередині веб-запиту |
| Налаштування | `from_email` з конфігурації: перехід із sandbox на продакшен без змін у коді |
| Типові налаштування | не прибирайте блок відписки та трекінг; змінити їх можна через підтримку AllyMailer |

## Довідник

### Розділи

| Розділ | Методи | Опис |
|---|---|---|
| [Email](docs/Email.md) | `send`, `subscribe` | Ця група методів пов'язана з надсиланням email. |
| [EmailValidation](docs/EmailValidation.md) | `single` | Методи перевірки email-адрес. Перевірка адреси електронної пошти надає докладну інформацію про працездатність email. Це дозволить виключити з надсилання неіснуючі email, знизити показник скарг, очистити список підписників і врешті-решт покращити вашу репутацію як відправника. Наприклад, ви можете інтегрувати процес перевірки у форму реєстрації вашого сайту і вже на етапі введення адреси повідомляти користувачам, що адреса, яку вони ввели у форму, недійсна. |
| [ConfirmedEmail](docs/ConfirmedEmail.md) | `create`, `list`, `delete` | Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з API-ключем основного облікового запису. |
| [Template](docs/Template.md) | `set`, `get`, `list`, `delete` | Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте [тут](https://docs.allymailer.com.ua/ua/template-engines). |
| [Webhook](docs/Webhook.md) | `set`, `get`, `list`, `delete` | AllyMailer дозволяє вам отримувати сповіщення про зміну статусу доставки листа або спам-блокування. Ви надаєте URL, і в разі виникнення події, що вас цікавить, ми сповіщаємо вас, передаючи на цей URL JSON-дані про подію. |
| [Suppression](docs/Suppression.md) | `set`, `get`, `list`, `delete` | Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка, недоступність, скарги. |
| [Domain](docs/Domain.md) | `getDnsRecords`, `validateVerificationRecord`, `validateDkim`, `list`, `getSandboxDomain`, `delete` | Методи для налаштування доменів надсилання та перевірки їх статусів. Корисні, якщо вам недостатньо додавання доменів через вебінтерфейс AllyMailer і, наприклад, хочеться автоматизувати додавання доменів для ваших власних клієнтів. |
| [EventDump](docs/EventDump.md) | `create`, `get`, `list`, `delete` | Методи для отримання списку подій, що сталися, за певний період. Дані зберігаються до 45 днів, залежно від вашого тарифу. Це означає, що можна запросити події, починаючи з 00:00:00 45-го дня тому і до поточного моменту часу. Для індивідуальних тарифів з великими обсягами за замовчуванням події доступні лише за останні 7 днів. |
| [Tag](docs/Tag.md) | `list`, `delete` | Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання міток. |
| [Project](docs/Project.md) | `create`, `update`, `list`, `delete` | Проєкти дозволяють об'єднати кілька незалежних доменів із webhook, шаблонами та списками відписки. Це дуже корисно, якщо у вас є власні клієнти і ви керуєте їхніми даними з одного облікового запису AllyMailer. Кожен проєкт отримує власний ключ API, а виклики методів API з цим ключем обробляють лише дані цього проєкту. Таким чином, ви можете призначити окремий проєкт для кожного користувача і бути впевненими, що вони не конфліктуватимуть: наприклад, відписка від одного проєкту не вплине на інший. |
| [System](docs/System.md) | `ping`, `info` | Системні методи. |
| [Obsolete](docs/Obsolete.md) | `unsubscribedSet`, `unsubscribedCheck`, `unsubscribedList` | Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням повторної підписки за допомогою методу email/subscribe. |

### Обробка помилок

Кожен метод кидає `ApiError`, якщо API повернув помилку; у ньому є [код помилки API](https://docs.allymailer.com.ua/ua/web-api-ref#api-errors) і HTTP-статус.

### Власний HTTP-клієнт і заголовки

`headers` додає заголовки до кожного запиту; `fetch` замінює функцію, через яку йдуть запити (за замовчуванням `globalThis.fetch`): undici, node-fetch або обгортка з повторами, логуванням чи проксі. Мережеві помилки, таймаути й помилки читання відповіді кидають `ApiError` (вихідна помилка — у `cause`).

```javascript
import { AllyMailerClient, ApiError } from "@allymailer/allymailer-node-sdk";

// retries of network errors and HTTP 5xx, a log line per request
async function fetchWithRetries(url, init) {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, init);
      if (response.status < 500 || attempt === 3) {
        console.log(`POST ${url} -> ${response.status}`);
        return response;
      }
    } catch (error) {
      if (attempt === 3) throw error;
    }
  }
}

const client = new AllyMailerClient("YOUR_API_KEY", {
  headers: { "X-Request-Id": "42" },
  fetch: fetchWithRetries,
});
try {
  console.log(await client.confirmedEmail.list());
} catch (error) {
  if (!(error instanceof ApiError)) throw error;
  console.log(error.httpStatus, error.errorCode, error.message, error.cause);
}
```

### Моделі

Моделі запитів приймають об'єкт своїх полів; вкладену модель можна передати моделлю або простим об'єктом у форматі API (ключі API: `global_language`, а не `globalLanguage`), він перетворюється `fromJSON()` її класу. Запит теж може бути простим об'єктом у форматі API. Моделі з довільними ключами (`HeadersObject`) зберігають ключі, крім своїх полів, у словнику `extra`: він надсилається разом із полями (іменоване поле важливіше за однойменний ключ `extra`), а ключі відповіді, яких немає серед полів, потрапляють до нього.

```javascript
import { EmailSendRequest } from "@allymailer/allymailer-node-sdk/api/email";
import { HeadersObject } from "@allymailer/allymailer-node-sdk/common";

const headers = new HeadersObject({
  extra: {
    "X-MyHeader": "some data",
    "CC": "copy@example.com",
    "List-Unsubscribe": "<mailto:unsubscribe@example.com?subject=unsubscribe>",
  },
});

const request = new EmailSendRequest({
  message: {
    "body": { html: "<b>Hello, {{to_name}}</b>" },
    "subject": "Hello",
    "from_email": "user@example.com",
    "recipients": [{ email: "recipient@example.com" }],
    "headers": headers,
  },
});
console.log(JSON.stringify(request));
```

### TypeScript

Пакет містить оголошення типів: клієнт, класи API, моделі (з формою `...JSON` у форматі API та параметрами конструктора `...Init`) і переліки (заморожені об'єкти та рядкові літеральні типи).

```typescript
import { AllyMailerClient, type ConfigurationOptions } from "@allymailer/allymailer-node-sdk";
import { EmailSendRequest, MessageObject, MessageObjectRecipientsItem, type EmailSendResponse } from "@allymailer/allymailer-node-sdk/api/email";
import { TemplateEngine, BodyObject } from "@allymailer/allymailer-node-sdk/common";

const options: ConfigurationOptions = { timeout: 10000, headers: { "X-Request-Id": "42" } };
const client = new AllyMailerClient("YOUR_API_KEY", options);
const response: EmailSendResponse = await client.email.send(new EmailSendRequest({
  message: new MessageObject({
    recipients: [
      new MessageObjectRecipientsItem({
        email: "user@example.com",
        substitutions: {
          "CustomerId": "12452",
          "to_name": "John Smith",
        },
        metadata: {
          "campaign_id": "c77f4f4e-3561-49f7-9f07-c35be01b4f43",
          "customer_hash": "b253ac7",
        },
      }),
    ],
    templateId: "00000000-0000-0000-0000-000000000000",
    globalLanguage: "en",
    templateEngine: TemplateEngine.VELOCITY,
    body: new BodyObject({
      html: "<b>Hello, {{to_name}}</b>",
      plaintext: "Hello, {{to_name}}",
      amp: "<!doctype html><html amp4email><head> <meta charset=\"utf-8\"><script async src=\"https://cdn.ampproject.org/v0.js\"></script> <style amp4email-boilerplate>body{visibility:hidden}</style></head><body> Hello, AMP4EMAIL world.</body></html>",
    }),
    subject: "AllyMailer test email ",
    fromEmail: "email@example.com",
    fromName: "John Smith",
    replyTo: "email@example.com",
    replyToName: "John Smith",
    idempotenceKey: "SG1VsbG68sIH2dvc5mx890kIQ",
  }),
}));
```

## Допомога

- Для ШІ-агентів: [llms.txt](https://docs.allymailer.com.ua/llms.txt), скіли: `npx skills add https://github.com/allymailer/allymailer-skills.git`
- [Підтримка](https://cp.allymailer.com/ua/support) · [Задачі](https://github.com/allymailer/allymailer-node-sdk/issues)
- Розробникам: [AGENTS.md](AGENTS.md) — SDK генерується з OpenAPI-специфікації.
