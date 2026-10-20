# Template

[До списку розділів](../README.md)

Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте [тут](https://docs.allymailer.com.ua/en/template-engines).

`import { TemplateApi } from "@allymailer/allymailer-node-sdk/api/template"`, `client.template`

| Метод | Ендпоінт | Опис |
|---|---|---|
| [`set`](#set) | `POST /template/set.json` | Створити або оновити шаблон. |
| [`get`](#get) | `POST /template/get.json` | Повертає властивості шаблону за його ідентифікатором. |
| [`list`](#list) | `POST /template/list.json` | Повертає повний список або частину списку всіх шаблонів. |
| [`delete`](#delete) | `POST /template/delete.json` | Видаляє шаблон за ідентифікатором. |

## set

`POST /template/set.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#template-set)

Створити або оновити шаблон.

Обмеження:
* Максимальний розмір запиту — 10 MB.
* Кількість шаблонів обмежено 10000.

### Запит: `TemplateSetRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `template` | `TemplateObject` | так | Об'єкт, що містить властивості шаблону. |

### Відповідь: `TemplateSetResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `template` | `TemplateObject` | Об'єкт, що містить властивості шаблону. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { TemplateSetRequest, TemplateObject, EditorType } from "@allymailer/allymailer-node-sdk/api/template";
import { TemplateEngine } from "@allymailer/allymailer-node-sdk/common";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.template.set(new TemplateSetRequest({
  template: new TemplateObject({
    name: "name",
    editorType: EditorType.HTML,
    templateEngine: TemplateEngine.VELOCITY,
    subject: "AllyMailer test email ",
    fromEmail: "user@example.com",
    fromName: "John Smith",
    replyTo: "email@example.com",
    replyToName: "John Smith",
  }),
}));
console.log(response.template);
```

## get

`POST /template/get.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#template-get)

Повертає властивості шаблону за його ідентифікатором.

### Запит: `TemplateGetRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `id` | `string` | так | Ідентифікатор шаблону. |

### Відповідь: `TemplateGetResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `template` | `TemplateObject` | Об'єкт, що містить властивості шаблону. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { TemplateGetRequest } from "@allymailer/allymailer-node-sdk/api/template";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.template.get(new TemplateGetRequest({
  id: "00000000-0000-0000-0000-000000000000",
}));
console.log(response.template);
```

## list

`POST /template/list.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#template-list)

Повертає повний список або частину списку всіх шаблонів.

Ви можете переглядати великий список частинами, використовуючи параметри "offset" і "limit". Якщо повернуто менше ніж "limit" шаблонів — значить, ви досягли кінця списку.

### Запит: `TemplateListRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `limit` | `number` |  | Максимальна кількість шаблонів, що повертаються, за замовчуванням 50. |
| `offset` | `number` |  | Індекс першого шаблону зі списку, що повертається, рахуючи з нуля. |

### Відповідь: `TemplateListResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `templates` | `TemplateListObject[]` | Масив об'єктів-шаблонів. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { TemplateListRequest } from "@allymailer/allymailer-node-sdk/api/template";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.template.list(new TemplateListRequest());
console.log(response.templates);
```

## delete

`POST /template/delete.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#template-delete)

Видаляє шаблон за ідентифікатором.

### Запит: `TemplateDeleteRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `id` | `string` | так | Ідентифікатор шаблону. |

### Відповідь: `SuccessResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { TemplateDeleteRequest } from "@allymailer/allymailer-node-sdk/api/template";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.template.delete(new TemplateDeleteRequest({
  id: "00000000-0000-0000-0000-000000000000",
}));
console.log(response);
```
