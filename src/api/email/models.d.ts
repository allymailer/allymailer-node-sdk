// Types of the models of the Email section.
import type { AttachmentsArrayItem, AttachmentsArrayItemJSON, BodyObject, BodyObjectJSON, HeadersObject, HeadersObjectJSON, InlineAttachmentsArrayItem, InlineAttachmentsArrayItemJSON, TemplateEngine } from "../../common/models.js";

/** EmailSendRequest in the API format: the object sent and received as JSON. */
export interface EmailSendRequestJSON {
  "message": MessageObjectJSON;
}

/** Fields of new EmailSendRequest(): a nested model may be a plain object in the API format. */
export interface EmailSendRequestInit {
  /** Об'єкт, що містить усі властивості повідомлення, яке надсилається. */
  message: MessageObject | MessageObjectJSON;
}

/** EmailSendRequest */
export declare class EmailSendRequest {
  constructor(data: EmailSendRequestInit);
  /** Об'єкт, що містить усі властивості повідомлення, яке надсилається. */
  message: MessageObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EmailSendRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EmailSendRequestJSON;
}

/** MessageObject in the API format: the object sent and received as JSON. */
export interface MessageObjectJSON {
  "recipients": Array<MessageObjectRecipientsItemJSON>;
  "template_id"?: string;
  "tags"?: Array<string>;
  "skip_unsubscribe"?: number;
  "global_language"?: string;
  "template_engine"?: TemplateEngine;
  "global_substitutions"?: Record<string, string>;
  "global_metadata"?: Record<string, string>;
  "body": BodyObjectJSON;
  "subject": string;
  "from_email"?: string;
  "from_name"?: string;
  "reply_to"?: string;
  "reply_to_name"?: string;
  "track_links"?: number;
  "track_read"?: number;
  "bypass_global"?: number;
  "bypass_unavailable"?: number;
  "bypass_unsubscribed"?: number;
  "bypass_complained"?: number;
  "idempotence_key"?: string;
  "headers"?: HeadersObjectJSON;
  "attachments"?: Array<AttachmentsArrayItemJSON>;
  "inline_attachments"?: Array<InlineAttachmentsArrayItemJSON>;
  "options"?: MessageObjectOptionsJSON;
}

/** Fields of new MessageObject(): a nested model may be a plain object in the API format. */
export interface MessageObjectInit {
  /** Масив об'єктів з email-адресами, підстановками та метаданими отримувачів. */
  recipients: Array<MessageObjectRecipientsItem | MessageObjectRecipientsItemJSON>;
  /**
   * Унікальний ідентифікатор шаблону, створеного раніше методом
   * [template/set](https://docs.allymailer.com.ua/ua/web-api-ref#template-set). Якщо вказано, то поля
   * шаблону підставляються замість пропущених полів email/send. Наприклад, якщо в email/send не вказано
   * body — береться тіло листа із шаблону, а якщо не вказано subject — береться тема із шаблону.
   */
  templateId?: string;
  /**
   * Масив із рядків, до 100 символів у кожному. Максимум 4 рядки в масиві, рядки мають бути унікальними.
   * Для кожного облікового запису/проєкту дозволено не більше ніж 10 000 міток, у разі перевищення метод
   * email/send повертатиме помилку. Мітки можуть використовуватися для категоризації листів за обраними
   * вами критеріями. Мітки передаються методами event-dump.
   */
  tags?: Array<string>;
  /**
   * Пропустити чи не пропускати додавання стандартного блока з посиланням відписки до HTML-частини
   * листа. 1=пропустити, 0=додати, за замовчуванням 0. Для использования skip_unsubscribe=1 вам надо
   * [попросить техподдержку](https://cp.allymailer.com/ru/support) включить такую возможность.
   * Допустимі значення: `0`, `1`.
   */
  skipUnsubscribe?: number;
  /**
   * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
   * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   */
  globalLanguage?: string;
  /**
   * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/en/template-engines) — або
   * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
   */
  templateEngine?: TemplateEngine;
  /**
   * Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних
   * повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з
   * об'єкта "substitutions". Підстановки працюють у параметрах:
   *
   * - body.html
   * - body.plaintext
   * - body.amp
   * - subject
   * - from_name
   * - options.unsubscribe_url
   * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
   * бути лише літера, використання пробілів не допускається.
   */
  globalSubstitutions?: Record<string, string>;
  /**
   * Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна
   * кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа:
   * 1024 символи. Метадані передаються під час виклику
   * [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну
   * розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного
   * десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні
   * значення будуть прирівняні до '0'
   */
  globalMetadata?: Record<string, string>;
  /**
   * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
   * має бути присутня обов'язково.
   */
  body: BodyObject | BodyObjectJSON;
  /** Тема листа. */
  subject: string;
  /** Email-адреса відправника. Обов'язковий лише за порожнього template_id. */
  fromEmail?: string;
  /** Ім'я відправника. */
  fromName?: string;
  /** Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника) */
  replyTo?: string;
  /**
   * Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише
   * цей email, але й ім'я)
   */
  replyToName?: string;
  /**
   * 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для
   * використання track_links = 0 вам потрібно [попросити
   * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * Допустимі значення: `0`, `1`.
   */
  trackLinks?: number;
  /**
   * 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для
   * використання track_read = 0 вам потрібно [попросити
   * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * Допустимі значення: `0`, `1`.
   */
  trackRead?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список глобальної недоступності, під час
   * надсилання не враховуватимуться дані про недоступність адрес або скарги, отримані під час надсилання
   * іншими користувачами AllyMailer. Для деяких системних записів може бути заборонено
   * Допустимі значення: `0`, `1`.
   */
  bypassGlobal?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список недоступних адрес поточного облікового
   * запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1.
   * Допустимі значення: `0`, `1`.
   */
  bypassUnavailable?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список відписаних від розсилок поточного
   * облікового запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр
   * доступний лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила
   * вимкнення посилання відписки.
   * Допустимі значення: `0`, `1`.
   */
  bypassUnsubscribed?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список тих, хто поскаржився на обліковий
   * запис/проєкт. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр доступний
   * лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вимкнення
   * посилання відписки.
   * Допустимі значення: `0`, `1`.
   */
  bypassComplained?: number;
  /**
   * Рядок до 64 символів завдовжки з унікальним ключем запиту. Може використовуватися для запобігання
   * випадковому дублюванню листів. У разі повторного надсилання запиту з тим самим ключем протягом
   * хвилини запит буде відхилено. Може створюватися автоматично для кожного листа; щоб увімкнути
   * автоматичну генерацію ключа, зв'яжіться з [техпідтримкою](https://cp.allymailer.com/ua/support).
   */
  idempotenceKey?: string;
  /**
   * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
   * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
   * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
   * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
   * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
   * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
   * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
   */
  headers?: HeadersObject | HeadersObjectJSON;
  /** Необов'язковий масив вкладень. */
  attachments?: Array<AttachmentsArrayItem | AttachmentsArrayItemJSON>;
  /**
   * Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження
   * їх за посиланням.
   */
  inlineAttachments?: Array<InlineAttachmentsArrayItem | InlineAttachmentsArrayItemJSON>;
  /** Додаткові опції. */
  options?: MessageObjectOptions | MessageObjectOptionsJSON;
}

/** Об'єкт, що містить усі властивості повідомлення, яке надсилається. */
export declare class MessageObject {
  constructor(data: MessageObjectInit);
  /** Масив об'єктів з email-адресами, підстановками та метаданими отримувачів. */
  recipients: Array<MessageObjectRecipientsItem>;
  /**
   * Унікальний ідентифікатор шаблону, створеного раніше методом
   * [template/set](https://docs.allymailer.com.ua/ua/web-api-ref#template-set). Якщо вказано, то поля
   * шаблону підставляються замість пропущених полів email/send. Наприклад, якщо в email/send не вказано
   * body — береться тіло листа із шаблону, а якщо не вказано subject — береться тема із шаблону.
   */
  templateId?: string;
  /**
   * Масив із рядків, до 100 символів у кожному. Максимум 4 рядки в масиві, рядки мають бути унікальними.
   * Для кожного облікового запису/проєкту дозволено не більше ніж 10 000 міток, у разі перевищення метод
   * email/send повертатиме помилку. Мітки можуть використовуватися для категоризації листів за обраними
   * вами критеріями. Мітки передаються методами event-dump.
   */
  tags?: Array<string>;
  /**
   * Пропустити чи не пропускати додавання стандартного блока з посиланням відписки до HTML-частини
   * листа. 1=пропустити, 0=додати, за замовчуванням 0. Для использования skip_unsubscribe=1 вам надо
   * [попросить техподдержку](https://cp.allymailer.com/ru/support) включить такую возможность.
   * Допустимі значення: `0`, `1`.
   */
  skipUnsubscribe?: number;
  /**
   * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
   * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   */
  globalLanguage?: string;
  /**
   * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/en/template-engines) — або
   * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
   */
  templateEngine?: TemplateEngine;
  /**
   * Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних
   * повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з
   * об'єкта "substitutions". Підстановки працюють у параметрах:
   *
   * - body.html
   * - body.plaintext
   * - body.amp
   * - subject
   * - from_name
   * - options.unsubscribe_url
   * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
   * бути лише літера, використання пробілів не допускається.
   */
  globalSubstitutions?: Record<string, string>;
  /**
   * Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна
   * кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа:
   * 1024 символи. Метадані передаються під час виклику
   * [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну
   * розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного
   * десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні
   * значення будуть прирівняні до '0'
   */
  globalMetadata?: Record<string, string>;
  /**
   * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
   * має бути присутня обов'язково.
   */
  body: BodyObject;
  /** Тема листа. */
  subject: string;
  /** Email-адреса відправника. Обов'язковий лише за порожнього template_id. */
  fromEmail?: string;
  /** Ім'я відправника. */
  fromName?: string;
  /** Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника) */
  replyTo?: string;
  /**
   * Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише
   * цей email, але й ім'я)
   */
  replyToName?: string;
  /**
   * 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для
   * використання track_links = 0 вам потрібно [попросити
   * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * Допустимі значення: `0`, `1`.
   */
  trackLinks?: number;
  /**
   * 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для
   * використання track_read = 0 вам потрібно [попросити
   * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * Допустимі значення: `0`, `1`.
   */
  trackRead?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список глобальної недоступності, під час
   * надсилання не враховуватимуться дані про недоступність адрес або скарги, отримані під час надсилання
   * іншими користувачами AllyMailer. Для деяких системних записів може бути заборонено
   * Допустимі значення: `0`, `1`.
   */
  bypassGlobal?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список недоступних адрес поточного облікового
   * запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1.
   * Допустимі значення: `0`, `1`.
   */
  bypassUnavailable?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список відписаних від розсилок поточного
   * облікового запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр
   * доступний лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила
   * вимкнення посилання відписки.
   * Допустимі значення: `0`, `1`.
   */
  bypassUnsubscribed?: number;
  /**
   * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список тих, хто поскаржився на обліковий
   * запис/проєкт. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр доступний
   * лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вимкнення
   * посилання відписки.
   * Допустимі значення: `0`, `1`.
   */
  bypassComplained?: number;
  /**
   * Рядок до 64 символів завдовжки з унікальним ключем запиту. Може використовуватися для запобігання
   * випадковому дублюванню листів. У разі повторного надсилання запиту з тим самим ключем протягом
   * хвилини запит буде відхилено. Може створюватися автоматично для кожного листа; щоб увімкнути
   * автоматичну генерацію ключа, зв'яжіться з [техпідтримкою](https://cp.allymailer.com/ua/support).
   */
  idempotenceKey?: string;
  /**
   * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
   * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
   * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
   * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
   * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
   * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
   * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
   */
  headers?: HeadersObject;
  /** Необов'язковий масив вкладень. */
  attachments?: Array<AttachmentsArrayItem>;
  /**
   * Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження
   * їх за посиланням.
   */
  inlineAttachments?: Array<InlineAttachmentsArrayItem>;
  /** Додаткові опції. */
  options?: MessageObjectOptions;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): MessageObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): MessageObjectJSON;
}

/** MessageObjectRecipientsItem in the API format: the object sent and received as JSON. */
export interface MessageObjectRecipientsItemJSON {
  "email": string;
  "substitutions"?: Record<string, string>;
  "metadata"?: Record<string, string>;
}

/** Fields of new MessageObjectRecipientsItem(): a nested model may be a plain object in the API format. */
export interface MessageObjectRecipientsItemInit {
  /** Email-адреса отримувача */
  email: string;
  /**
   * Об'єкт, що описує підстановки для конкретного отримувача (наприклад, ім'я, товар для показу саме
   * цьому отримувачу — див. [Шаблонізатори](https://docs.allymailer.com.ua/en/template-engines)).
   * Підстановки працюють у параметрах:
   *
   * - body.html
   * - body.plaintext
   * - body.amp
   * - subject
   * - from_name
   * - headers["List-Unsubscribe"]
   * - options.unsubscribe_url
   * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
   * бути лише літера, використання пробілів не допускається. Є спеціальна змінна "to_name", що дозволяє
   * задати ім'я отримувача. У разі підстановки туди "Ім'я Прізвище" SMTP-заголовок “To” виглядатиме як
   * "Ім'я Прізвище <email@example.com>". Довжина змінної "to_name" обмежена 78 символами.
   */
  substitutions?: Record<string, string>;
  /**
   * Об'єкт для передачі метаданих, специфічних для окремого отримувача, де "key" — рядок до 64 символів
   * завдовжки, "value" — рядок до 1024 символів завдовжки, максимальна кількість ключів — 10. Метадані
   * передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook) і
   * методів [event-dump](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump). Для групування
   * листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді
   * невід'ємного десяткового цілого або UUID до 128 біт.
   */
  metadata?: Record<string, string>;
}

/** MessageObjectRecipientsItem */
export declare class MessageObjectRecipientsItem {
  constructor(data: MessageObjectRecipientsItemInit);
  /** Email-адреса отримувача */
  email: string;
  /**
   * Об'єкт, що описує підстановки для конкретного отримувача (наприклад, ім'я, товар для показу саме
   * цьому отримувачу — див. [Шаблонізатори](https://docs.allymailer.com.ua/en/template-engines)).
   * Підстановки працюють у параметрах:
   *
   * - body.html
   * - body.plaintext
   * - body.amp
   * - subject
   * - from_name
   * - headers["List-Unsubscribe"]
   * - options.unsubscribe_url
   * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
   * бути лише літера, використання пробілів не допускається. Є спеціальна змінна "to_name", що дозволяє
   * задати ім'я отримувача. У разі підстановки туди "Ім'я Прізвище" SMTP-заголовок “To” виглядатиме як
   * "Ім'я Прізвище <email@example.com>". Довжина змінної "to_name" обмежена 78 символами.
   */
  substitutions?: Record<string, string>;
  /**
   * Об'єкт для передачі метаданих, специфічних для окремого отримувача, де "key" — рядок до 64 символів
   * завдовжки, "value" — рядок до 1024 символів завдовжки, максимальна кількість ключів — 10. Метадані
   * передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook) і
   * методів [event-dump](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump). Для групування
   * листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді
   * невід'ємного десяткового цілого або UUID до 128 біт.
   */
  metadata?: Record<string, string>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): MessageObjectRecipientsItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): MessageObjectRecipientsItemJSON;
}

/** MessageObjectOptions in the API format: the object sent and received as JSON. */
export interface MessageObjectOptionsJSON {
  "send_at"?: string;
  "unsubscribe_url"?: string;
  "custom_backend_id"?: number;
  "smtp_pool_id"?: string;
}

/** Fields of new MessageObjectOptions(): a nested model may be a plain object in the API format. */
export interface MessageObjectOptionsInit {
  /**
   * Дата й час у форматі "РРРР-ММ-ДД гг:хх:сс" у часовому поясі UTC. Дозволяє запланувати час надсилання
   * на майбутнє, у межах 24 годин від поточного часу.
   */
  sendAt?: string;
  /** Користувацьке посилання відписки. Докладніше [тут](https://docs.allymailer.com.ua/unsubscribe-link). */
  unsubscribeUrl?: string;
  /**
   * Ідентифікатор backend-домену, через який надсилається повідомлення. Якщо відсутній — надсилання буде
   * від імені backend-домену, призначеного вашому обліковому запису/проєкту за замовчуванням. Ви можете
   * придбати один або декілька виділених IP-адрес і використовувати цю опцію для вибору.
   */
  customBackendId?: number;
  /**
   * Ідентифікатор пулу SMTP, через який надсилається повідомлення. Зазвичай немає необхідності вказувати
   * пул явно, оскільки він обирається автоматично або як пул за замовчуванням для вашого облікового
   * запису/проєкту, або відповідно до переданого параметра custom_backend_id.
   */
  smtpPoolId?: string;
}

/** Додаткові опції. */
export declare class MessageObjectOptions {
  constructor(data?: MessageObjectOptionsInit);
  /**
   * Дата й час у форматі "РРРР-ММ-ДД гг:хх:сс" у часовому поясі UTC. Дозволяє запланувати час надсилання
   * на майбутнє, у межах 24 годин від поточного часу.
   */
  sendAt?: string;
  /** Користувацьке посилання відписки. Докладніше [тут](https://docs.allymailer.com.ua/unsubscribe-link). */
  unsubscribeUrl?: string;
  /**
   * Ідентифікатор backend-домену, через який надсилається повідомлення. Якщо відсутній — надсилання буде
   * від імені backend-домену, призначеного вашому обліковому запису/проєкту за замовчуванням. Ви можете
   * придбати один або декілька виділених IP-адрес і використовувати цю опцію для вибору.
   */
  customBackendId?: number;
  /**
   * Ідентифікатор пулу SMTP, через який надсилається повідомлення. Зазвичай немає необхідності вказувати
   * пул явно, оскільки він обирається автоматично або як пул за замовчуванням для вашого облікового
   * запису/проєкту, або відповідно до переданого параметра custom_backend_id.
   */
  smtpPoolId?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): MessageObjectOptions;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): MessageObjectOptionsJSON;
}

/** EmailSendResponse in the API format: the object sent and received as JSON. */
export interface EmailSendResponseJSON {
  "status"?: string;
  "job_id"?: string;
  "emails"?: Array<string>;
  "failed_emails"?: Record<string, string>;
}

/** Fields of new EmailSendResponse(): a nested model may be a plain object in the API format. */
export interface EmailSendResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Ідентифікатор завдання з надсилання, може виявитися корисним під час з'ясування причин збоїв. */
  jobId?: string;
  /** Масив email-адрес, успішно прийнятих до надсилання. */
  emails?: Array<string>;
  /**
   * Об'єкт із email-адресами, не прийнятими до надсилання. Email представлено іменем властивості, а його
   * статус — значенням властивості, наприклад: {"email1@gmail.com": "temporary_unavailable"}. Можливі
   * статуси адрес, на які не вдалося здійснити надсилання:
   *
   * - __unsubscribed__ — зазначену адресу відписано;
   * - __invalid__ — адреса не існує або введена некоректно;
   * - __duplicate__ — адреса повторюється в запиті, повторне надсилання на той самий email запобігнуто;
   * - __temporary_unavailable__ — адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
   *
   * - попереднє надсилання було відхилено сервером отримувача як спам;
   * - поштова скринька отримувача переповнена або не використовується;
   * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
   * - сервер відправника було відхилено через блеклистинг;
   *
   * - __permanent_unavailable__ — адреса перманентно недоступна через багаторазові недоставки;
   * - __complained__ — в одному з попередніх листів адресат натиснув “Це спам”;
   * - __blocked__ — надсилання на цю адресу заборонено адміністрацією AllyMailer.
   * У майбутньому можуть з'явитися й інші статуси.
   */
  failedEmails?: Record<string, string>;
}

/** EmailSendResponse */
export declare class EmailSendResponse {
  constructor(data?: EmailSendResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Ідентифікатор завдання з надсилання, може виявитися корисним під час з'ясування причин збоїв. */
  jobId?: string;
  /** Масив email-адрес, успішно прийнятих до надсилання. */
  emails?: Array<string>;
  /**
   * Об'єкт із email-адресами, не прийнятими до надсилання. Email представлено іменем властивості, а його
   * статус — значенням властивості, наприклад: {"email1@gmail.com": "temporary_unavailable"}. Можливі
   * статуси адрес, на які не вдалося здійснити надсилання:
   *
   * - __unsubscribed__ — зазначену адресу відписано;
   * - __invalid__ — адреса не існує або введена некоректно;
   * - __duplicate__ — адреса повторюється в запиті, повторне надсилання на той самий email запобігнуто;
   * - __temporary_unavailable__ — адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
   *
   * - попереднє надсилання було відхилено сервером отримувача як спам;
   * - поштова скринька отримувача переповнена або не використовується;
   * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
   * - сервер відправника було відхилено через блеклистинг;
   *
   * - __permanent_unavailable__ — адреса перманентно недоступна через багаторазові недоставки;
   * - __complained__ — в одному з попередніх листів адресат натиснув “Це спам”;
   * - __blocked__ — надсилання на цю адресу заборонено адміністрацією AllyMailer.
   * У майбутньому можуть з'явитися й інші статуси.
   */
  failedEmails?: Record<string, string>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EmailSendResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EmailSendResponseJSON;
}

/** EmailSubscribeRequest in the API format: the object sent and received as JSON. */
export interface EmailSubscribeRequestJSON {
  "from_email": string;
  "from_name": string;
  "to_email": string;
}

/** Fields of new EmailSubscribeRequest(): a nested model may be a plain object in the API format. */
export interface EmailSubscribeRequestInit {
  /**
   * Адреса відправника на підтвердженому домені. (Також підтримується іменування поля як
   * "email_address_from").
   */
  fromEmail: string;
  /** Ім'я відправника. (Також підтримується іменування поля як "name_from"). */
  fromName: string;
  /** Адреса отримувача. (Також підтримується іменування поля як "email_address_to"). */
  toEmail: string;
}

/** EmailSubscribeRequest */
export declare class EmailSubscribeRequest {
  constructor(data: EmailSubscribeRequestInit);
  /**
   * Адреса відправника на підтвердженому домені. (Також підтримується іменування поля як
   * "email_address_from").
   */
  fromEmail: string;
  /** Ім'я відправника. (Також підтримується іменування поля як "name_from"). */
  fromName: string;
  /** Адреса отримувача. (Також підтримується іменування поля як "email_address_to"). */
  toEmail: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EmailSubscribeRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EmailSubscribeRequestJSON;
}
