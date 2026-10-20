# AllyMailer Node.js SDK 1.0.0

Web API 1.90

Офіційна бібліотека Node.js для API транзакційних листів [AllyMailer](https://allymailer.com.ua).

Покроковий посібник: [Надсилання листів на Node.js](https://docs.allymailer.com.ua/ua/send-with-nodejs) · Документація для LLM: [llms.txt](https://docs.allymailer.com.ua/llms.txt) · [Довідник API](https://docs.allymailer.com.ua/ua/web-api-ref)

## Встановлення

```bash
npm install @allymailer/allymailer-node-sdk
```

Вимоги: Node.js 14+. Сторонніх залежностей немає.

Це лінія 1.x (гілка `1.x`) для Node.js 14. Для нових версій — лінія 2.x (гілка `main`), API той самий.

## Отримайте API-ключ

1. Зареєструйтеся на [cp.allymailer.com](https://cp.allymailer.com).
2. Скопіюйте API-ключ у [панелі керування](https://cp.allymailer.com).
3. Покладіть його у змінну оточення:

```bash
export ALLYMAILER_API_KEY="your-api-key"
```

> **Лише на сервері.** Використовуйте цей SDK у серверному коді: API-маршрути, серверні функції, воркери.
> Ніколи не передавайте API-ключ у браузер чи мобільний застосунок і не комітьте його.

## Перший лист — без налаштування DNS

Кожен обліковий запис може одразу надсилати тестові листи із **sandbox-домену**: він уже підтверджений, DKIM і SPF налаштовані.
Листи доставляються лише на підтверджені вами адреси.

<!-- checked examples -->

**1. Отримайте sandbox-домен** (`domain/get-sandbox-domain`). Перший виклик створює домен, наступні повертають той самий.

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";

const client = new AllyMailerClient(process.env.ALLYMAILER_API_KEY);

const response = await client.domain.getSandboxDomain();
console.log(response.domain);
```

**2. Підтвердіть свою скриньку** (`confirmed-email/create`). AllyMailer надішле лист із підтвердженням; перейдіть за посиланням із нього протягом 48 годин.

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { ConfirmedEmailRequest } from "@allymailer/allymailer-node-sdk/api/confirmed-email";

const client = new AllyMailerClient(process.env.ALLYMAILER_API_KEY);

const response = await client.confirmedEmail.create(new ConfirmedEmailRequest({
  email: "you@example.com",
}));
console.log(response.confirmedEmail);
```

Статус перевірте через `confirmed-email/list` — у вашої адреси має бути `"status": "confirmed"`.

**3. Надішліть лист** (`email/send`) з будь-якої адреси sandbox-домену на підтверджену адресу.

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { EmailSendRequest, MessageObject, MessageObjectRecipientsItem } from "@allymailer/allymailer-node-sdk/api/email";
import { BodyObject } from "@allymailer/allymailer-node-sdk/common";

const client = new AllyMailerClient(process.env.ALLYMAILER_API_KEY);

const response = await client.email.send(new EmailSendRequest({
  message: new MessageObject({
    recipients: [
      new MessageObjectRecipientsItem({
        email: "you@example.com",
      }),
    ],
    body: new BodyObject({
      html: "<p>Працює!</p>",
    }),
    subject: "Привіт від AllyMailer",
    fromEmail: "noreply@<sandbox-domain>",
  }),
}));
console.log(response.jobId);
```

<!-- /checked examples -->

### Що повертається

```json
{
  "status": "success",
  "job_id": "1ZymBc-00041N-9X",
  "emails": [
    "you@example.com"
  ]
}
```

У разі помилки API повертає `status: "error"`, `message` і числовий `code`:

```json
{
  "status": "error",
  "code": 102,
  "message": "Error ID:83274F98-C7D5-11F1-B221-6214FF8707B1. Can not decode key wrongkey"
}
```

### Те саме через curl

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

## Обмеження sandbox

- Надсилання лише на підтверджені адреси: до 10 на обліковий запис.
- До 100 листів на день.
- Sandbox-домен спливає через 31 день; знову викличте `domain/get-sandbox-domain`, щоб отримати новий.
- Працює лише з API-ключем облікового запису, не з ключем проєкту.
- Не показується в `domain/list`; інші методи `domain/*` до нього не застосовуються.

Sandbox — для розробки та тестування. Не використовуйте sandbox-домен як відправника на проді.

## Перед продом: підтвердіть свій домен

1. `domain/get-dns-records` — повертає значення для DNS-записів.
2. Додайте ці записи у свого DNS-провайдера (їх також показує сторінка домену в панелі керування):

   | Тип | Хост | Значення |
   |---|---|---|
   | TXT | `@` | значення `verification-record` (`allymailer-validate-hash=…`) |
   | TXT | `<селектор>._domainkey` (селектор — на сторінці домену в панелі керування, наприклад `us`) | `v=DKIM1; k=rsa; p=<dkim>` |
   | TXT | `@` | `v=spf1 include:spf.allymailer.com ~all` |
   | CNAME | `_dmarc` | значення `dmarc` |

3. `domain/validate-verification-record`, потім `domain/validate-dkim`.
4. `domain/list` — дочекайтеся, поки запис підтвердження буде підтверджено, а DKIM — активний.
5. Беріть `from_email` з конфігурації, щоб перехід із sandbox не потребував змін у коді.

## Надійне надсилання

- **Повтори:** ставте `message.idempotence_key` у надсиланнях, які можуть повторюватися, щоб повторний запит не надіслав лист двічі.
- **Ліміти:** до 500 отримувачів і 10 МБ на запит; кожне вкладення до 7 МБ.
- **Тіло:** завжди передавайте `body.html` або `body.plaintext`.
- **Статус доставки:** зареєструйте вебхук (`webhook/set`) зі швидким ідемпотентним HTTPS-обробником замість опитування.
- **Типові налаштування:** не прибирайте стандартний блок відписки та трекінг; змінити їх можна через підтримку AllyMailer.
- **Помилки:** повторюйте `429` і `5xx` з backoff; інші помилки без змін не повторюйте.

## Посилання

- [Надсилання листів на Node.js](https://docs.allymailer.com.ua/ua/send-with-nodejs) та інші [посібники з інтеграції](https://docs.allymailer.com.ua/ua/integrations/)
- [Довідник Web API](https://docs.allymailer.com.ua/ua/web-api-ref)
- [llms.txt](https://docs.allymailer.com.ua/llms.txt) для AI-асистентів
- [Підтримка](https://cp.allymailer.com/ua/support)

## Для розробників SDK

Див. [AGENTS.md](AGENTS.md): як цей SDK генерується з OpenAPI-специфікації, збирається, перевіряється та випускається.

---

# Довідка з SDK

## Обробка помилок

Кожен метод кидає `ApiError`, якщо API повернув помилку; у ньому є [код помилки API](https://docs.allymailer.com.ua/ua/web-api-ref#api-errors) і HTTP-статус.

## Власний HTTP-клієнт і заголовки

`headers` додає заголовки до кожного запиту; `fetch` замінює функцію, через яку йдуть запити (за замовчуванням вбудовані модулі `http`/`https`): undici, node-fetch або обгортка з повторами, логуванням чи проксі. Мережеві помилки, таймаути й помилки читання відповіді кидають `ApiError` (вихідна помилка — у `cause`).

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

## Моделі

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

## TypeScript

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

## Розділи

| Розділ | Методи | Опис |
|---|---|---|
| [Email](docs/Email.md) | `send`, `subscribe` | Ця група методів пов'язана з надсиланням email. |
| [EmailValidation](docs/EmailValidation.md) | `single` | Методи перевірки email-адрес. Перевірка адреси електронної пошти надає докладну інформацію про працездатність email. Це дозволить виключити з надсилання неіснуючі email, знизити показник скарг, очистити список підписників і врешті-решт покращити вашу репутацію як відправника. Наприклад, ви можете інтегрувати процес перевірки у форму реєстрації вашого сайту і вже на етапі введення адреси повідомляти користувачам, що адреса, яку вони ввели у форму, недійсна. |
| [ConfirmedEmail](docs/ConfirmedEmail.md) | `create`, `list`, `delete` | Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з API-ключем основного облікового запису. |
| [Template](docs/Template.md) | `set`, `get`, `list`, `delete` | Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте [тут](https://docs.allymailer.com.ua/en/template-engines). |
| [Webhook](docs/Webhook.md) | `set`, `get`, `list`, `delete` | AllyMailer дозволяє вам отримувати сповіщення про зміну статусу доставки листа або спам-блокування. Ви надаєте URL, і в разі виникнення події, що вас цікавить, ми сповіщаємо вас, передаючи на цей URL JSON-дані про подію. |
| [Suppression](docs/Suppression.md) | `set`, `get`, `list`, `delete` | Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка, недоступність, скарги. |
| [Domain](docs/Domain.md) | `getDnsRecords`, `validateVerificationRecord`, `validateDkim`, `list`, `getSandboxDomain`, `delete` | Методи для налаштування доменів надсилання та перевірки їх статусів. Корисні, якщо вам недостатньо додавання доменів через вебінтерфейс AllyMailer і, наприклад, хочеться автоматизувати додавання доменів для ваших власних клієнтів. |
| [EventDump](docs/EventDump.md) | `create`, `get`, `list`, `delete` | Методи для отримання списку подій, що сталися, за певний період. Дані зберігаються до 45 днів, залежно від вашого тарифу. Це означає, що можна запросити події, починаючи з 00:00:00 45-го дня тому і до поточного моменту часу. Для індивідуальних тарифів з великими обсягами за замовчуванням події доступні лише за останні 7 днів. |
| [Tag](docs/Tag.md) | `list`, `delete` | Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання міток. |
| [Project](docs/Project.md) | `create`, `update`, `list`, `delete` | Проєкти дозволяють об'єднати кілька незалежних доменів із webhook, шаблонами та списками відписки. Це дуже корисно, якщо у вас є власні клієнти і ви керуєте їхніми даними з одного облікового запису AllyMailer. Кожен проєкт отримує власний ключ API, а виклики методів API з цим ключем обробляють лише дані цього проєкту. Таким чином, ви можете призначити окремий проєкт для кожного користувача і бути впевненими, що вони не конфліктуватимуть: наприклад, відписка від одного проєкту не вплине на інший. |
| [System](docs/System.md) | `ping`, `info` | Системні методи. |
| [Obsolete](docs/Obsolete.md) | `unsubscribedSet`, `unsubscribedCheck`, `unsubscribedList` | Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням повторної підписки за допомогою методу email/subscribe. |
