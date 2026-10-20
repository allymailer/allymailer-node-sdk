# Tag

[До списку розділів](../README.md)

Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання міток.

`import { TagApi } from "@allymailer/allymailer-node-sdk/api/tag"`, `client.tag`

| Метод | Ендпоінт | Опис |
|---|---|---|
| [`list`](#list) | `POST /tag/list.json` | Метод без параметрів, повертає список усіх користувацьких міток. |
| [`delete`](#delete) | `POST /tag/delete.json` | Видаляє мітку. |

## list

`POST /tag/list.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#tag-list)

Метод без параметрів, повертає список усіх користувацьких міток.

### Запит

Метод не має параметрів.

### Відповідь: `TagListResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |
| `tags` | `TagsResponseObject[]` | Масив об'єктів з даними користувацьких міток. |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.tag.list();
console.log(response.tags);
```

## delete

`POST /tag/delete.json` · [Документація](https://docs.allymailer.com.ua/ua/web-api-ref#tag-delete)

Видаляє мітку.

### Запит: `TagDeleteRequest`

| Поле | Тип | Обов'язкове | Опис |
|---|---|---|---|
| `tagId` | `number` | так | Унікальний id мітки. |

### Відповідь: `SuccessResponse`

| Поле | Тип | Опис |
|---|---|---|
| `status` | `string` | Рядок "success". (`success`) |

### Приклад

```javascript
import { AllyMailerClient } from "@allymailer/allymailer-node-sdk";
import { TagDeleteRequest } from "@allymailer/allymailer-node-sdk/api/tag";

const client = new AllyMailerClient("YOUR_API_KEY");

const response = await client.tag.delete(new TagDeleteRequest({
  tagId: 54,
}));
console.log(response);
```
