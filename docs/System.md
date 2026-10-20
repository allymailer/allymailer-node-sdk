# System

[До списку розділів](../README.md)

Системні методи.

`import { SystemApi } from "@allymailer/allymailer-node-sdk/api/system"`, `client.system`

| Метод | Ендпоінт | Опис |
|---|---|---|
| [`ping`](#ping) | `POST /system/ping.json` | Перевіряє валідність API-ключа та повертає ідентифікатор користувача. |
| [`info`](#info) | `POST /system/info.json` | Повертає інформацію про користувача або проєкт за API-ключем. |

## ping

`POST /system/ping.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#system-ping)

Перевіряє валідність API-ключа та повертає ідентифікатор користувача.

### Запит

Метод не має параметрів.

### Відповідь: `SystemPingResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `userId` | `number` | Унікальний ідентифікатор користувача. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.system.ping();
console.log(response.userId);
```

## info

`POST /system/info.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#system-info)

Повертає інформацію про користувача або проєкт за API-ключем.

### Запит

Метод не має параметрів.

### Відповідь: `SystemInfoResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `userId` | `number` | Унікальний ідентифікатор користувача. |
| `email` | `string` | Email користувача. |
| `projectId` | `string` | Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем проєкту. |
| `projectName` | `string` | Назва проєкту, унікальна в межах облікового запису користувача. Присутня лише якщо API-ключ, використаний для запиту, був API-ключем проєкту. |
| `projectAccounting` | `ProjectAccountingObject` | Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем проєкту. |
| `accounting` | `SystemInfoResponseAccounting` | Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем користувача. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.system.info();
console.log(response.userId);
```
