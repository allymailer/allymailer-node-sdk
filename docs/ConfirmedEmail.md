# ConfirmedEmail

[До списку розділів](../README.md)

Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з API-ключем основного облікового запису.

`import { ConfirmedEmailApi } from "@allymailer/allymailer-node-sdk/api/confirmed-email"`, `client.confirmedEmail`

| Метод | Ендпоінт | Опис |
|---|---|---|
| [`create`](#create) | `POST /confirmed-email/create.json` | Adds an email address and sends a confirmation link. |
| [`list`](#list) | `POST /confirmed-email/list.json` | Lists confirmed and unconfirmed email addresses for the account. |
| [`delete`](#delete) | `POST /confirmed-email/delete.json` | Deletes an email address from the account's confirmed email list. |

## create

`POST /confirmed-email/create.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-create)

Adds an email address and sends a confirmation link.

### Запит: `ConfirmedEmailRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `email` | `string` | так | Email address to add or delete. |

### Відповідь: `ConfirmedEmailCreateResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `confirmedEmail` | `ConfirmedEmail` |  |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { ConfirmedEmailRequest } from "@allymailer/allymailer-node-sdk/api/confirmed-email";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.confirmedEmail.create(new ConfirmedEmailRequest({
  email: "dev@example.com",
}));
console.log(response.confirmedEmail);
```

## list

`POST /confirmed-email/list.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-list)

Lists confirmed and unconfirmed email addresses for the account.

### Запит

Метод не має параметрів.

### Відповідь: `ConfirmedEmailListResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `confirmedEmails` | `ConfirmedEmail[]` |  |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.confirmedEmail.list();
console.log(response.confirmedEmails);
```

## delete

`POST /confirmed-email/delete.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-delete)

Deletes an email address from the account's confirmed email list.

### Запит: `ConfirmedEmailRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `email` | `string` | так | Email address to add or delete. |

### Відповідь: `ConfirmedEmailDeleteResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `message` | `string` |  |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { ConfirmedEmailRequest } from "@allymailer/allymailer-node-sdk/api/confirmed-email";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.confirmedEmail.delete(new ConfirmedEmailRequest({
  email: "dev@example.com",
}));
console.log(response.message);
```
