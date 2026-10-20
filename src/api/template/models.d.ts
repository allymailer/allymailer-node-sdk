// Types of the models of the Template section.
import type { AttachmentsArrayItem, AttachmentsArrayItemJSON, BodyObject, BodyObjectJSON, HeadersObject, HeadersObjectJSON, InlineAttachmentsArrayItem, InlineAttachmentsArrayItemJSON, TemplateEngine } from "../../common/models.js";

/**
 * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
 * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
 */
export declare const EditorType: Readonly<{
  HTML: "html";
  VISUAL: "visual";
}>;
/**
 * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
 * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
 */
export type EditorType = "html" | "visual";

/** TemplateSetRequest in the API format: the object sent and received as JSON. */
export interface TemplateSetRequestJSON {
  "template": TemplateObjectJSON;
}

/** Fields of new TemplateSetRequest(): a nested model may be a plain object in the API format. */
export interface TemplateSetRequestInit {
  /** Об'єкт, що містить властивості шаблону. */
  template: TemplateObject | TemplateObjectJSON;
}

/** Об'єкт з усіма властивостями шаблону. */
export declare class TemplateSetRequest {
  constructor(data: TemplateSetRequestInit);
  /** Об'єкт, що містить властивості шаблону. */
  template: TemplateObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateSetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateSetRequestJSON;
}

/** TemplateObject in the API format: the object sent and received as JSON. */
export interface TemplateObjectJSON {
  "id"?: string;
  "name": string;
  "editor_type"?: EditorType;
  "template_engine"?: TemplateEngine;
  "global_substitutions"?: Record<string, string>;
  "global_metadata"?: Record<string, string>;
  "body"?: BodyObjectJSON;
  "subject"?: string;
  "from_email": string;
  "from_name"?: string;
  "reply_to"?: string;
  "reply_to_name"?: string;
  "track_links"?: number;
  "track_read"?: number;
  "headers"?: HeadersObjectJSON;
  "attachments"?: Array<AttachmentsArrayItemJSON>;
  "inline_attachments"?: Array<InlineAttachmentsArrayItemJSON>;
}

/** Fields of new TemplateObject(): a nested model may be a plain object in the API format. */
export interface TemplateObjectInit {
  /**
   * Унікальний ідентифікатор шаблону. Якщо вказано, система спробує знайти шаблон із указаним id і
   * відредагувати його. Якщо не задано, буде створено новий шаблон.
   */
  id?: string;
  /** Назва шаблону. */
  name: string;
  /**
   * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
   * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   */
  editorType?: EditorType;
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
  body?: BodyObject | BodyObjectJSON;
  /** Тема листа. */
  subject?: string;
  /** Email-адреса відправника. */
  fromEmail: string;
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
}

/** Об'єкт, що містить властивості шаблону. */
export declare class TemplateObject {
  constructor(data: TemplateObjectInit);
  /**
   * Унікальний ідентифікатор шаблону. Якщо вказано, система спробує знайти шаблон із указаним id і
   * відредагувати його. Якщо не задано, буде створено новий шаблон.
   */
  id?: string;
  /** Назва шаблону. */
  name: string;
  /**
   * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
   * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   */
  editorType?: EditorType;
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
  body?: BodyObject;
  /** Тема листа. */
  subject?: string;
  /** Email-адреса відправника. */
  fromEmail: string;
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
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateObjectJSON;
}

/** TemplateSetResponse in the API format: the object sent and received as JSON. */
export interface TemplateSetResponseJSON {
  "status"?: string;
  "template"?: TemplateObjectJSON;
}

/** Fields of new TemplateSetResponse(): a nested model may be a plain object in the API format. */
export interface TemplateSetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт, що містить властивості шаблону. */
  template?: TemplateObject | TemplateObjectJSON;
}

/** TemplateSetResponse */
export declare class TemplateSetResponse {
  constructor(data?: TemplateSetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт, що містить властивості шаблону. */
  template?: TemplateObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateSetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateSetResponseJSON;
}

/** TemplateGetRequest in the API format: the object sent and received as JSON. */
export interface TemplateGetRequestJSON {
  "id": string;
}

/** Fields of new TemplateGetRequest(): a nested model may be a plain object in the API format. */
export interface TemplateGetRequestInit {
  /** Ідентифікатор шаблону. */
  id: string;
}

/** TemplateGetRequest */
export declare class TemplateGetRequest {
  constructor(data: TemplateGetRequestInit);
  /** Ідентифікатор шаблону. */
  id: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateGetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateGetRequestJSON;
}

/** TemplateGetResponse in the API format: the object sent and received as JSON. */
export interface TemplateGetResponseJSON {
  "status"?: string;
  "template"?: TemplateObjectJSON;
}

/** Fields of new TemplateGetResponse(): a nested model may be a plain object in the API format. */
export interface TemplateGetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт, що містить властивості шаблону. */
  template?: TemplateObject | TemplateObjectJSON;
}

/** TemplateGetResponse */
export declare class TemplateGetResponse {
  constructor(data?: TemplateGetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт, що містить властивості шаблону. */
  template?: TemplateObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateGetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateGetResponseJSON;
}

/** TemplateListRequest in the API format: the object sent and received as JSON. */
export interface TemplateListRequestJSON {
  "limit"?: number;
  "offset"?: number;
}

/** Fields of new TemplateListRequest(): a nested model may be a plain object in the API format. */
export interface TemplateListRequestInit {
  /**
   * Максимальна кількість шаблонів, що повертаються, за замовчуванням 50.
   * За замовчуванням: `50`.
   */
  limit?: number;
  /**
   * Індекс першого шаблону зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
}

/** TemplateListRequest */
export declare class TemplateListRequest {
  constructor(data?: TemplateListRequestInit);
  /**
   * Максимальна кількість шаблонів, що повертаються, за замовчуванням 50.
   * За замовчуванням: `50`.
   */
  limit?: number;
  /**
   * Індекс першого шаблону зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateListRequestJSON;
}

/** TemplateListResponse in the API format: the object sent and received as JSON. */
export interface TemplateListResponseJSON {
  "status"?: string;
  "templates"?: Array<TemplateListObjectJSON>;
}

/** Fields of new TemplateListResponse(): a nested model may be a plain object in the API format. */
export interface TemplateListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів-шаблонів. */
  templates?: Array<TemplateListObject | TemplateListObjectJSON>;
}

/** TemplateListResponse */
export declare class TemplateListResponse {
  constructor(data?: TemplateListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів-шаблонів. */
  templates?: Array<TemplateListObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateListResponseJSON;
}

/** TemplateListObject in the API format: the object sent and received as JSON. */
export interface TemplateListObjectJSON {
  "id"?: string;
  "name"?: string;
  "editor_type"?: EditorType;
  "template_engine"?: TemplateEngine;
  "global_substitutions"?: Record<string, string>;
  "global_metadata"?: Record<string, string>;
  "body"?: BodyObjectJSON;
  "subject"?: string;
  "from_email"?: string;
  "from_name"?: string;
  "reply_to"?: string;
  "reply_to_name"?: string;
  "track_links"?: number;
  "track_read"?: number;
  "headers"?: HeadersObjectJSON;
  "attachments"?: Array<AttachmentsArrayItemJSON>;
  "inline_attachments"?: Array<InlineAttachmentsArrayItemJSON>;
  "created"?: string;
  "user_id"?: number;
  "project_id"?: string;
  "project_name"?: string;
}

/** Fields of new TemplateListObject(): a nested model may be a plain object in the API format. */
export interface TemplateListObjectInit {
  /** Унікальний ідентифікатор шаблону. */
  id?: string;
  /** Назва шаблону. */
  name?: string;
  /**
   * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
   * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   */
  editorType?: EditorType;
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
  body?: BodyObject | BodyObjectJSON;
  /** Тема листа. */
  subject?: string;
  /** Email-адреса відправника. */
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
  /** Час створення шаблону в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс" */
  created?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  projectName?: string;
}

/** TemplateListObject */
export declare class TemplateListObject {
  constructor(data?: TemplateListObjectInit);
  /** Унікальний ідентифікатор шаблону. */
  id?: string;
  /** Назва шаблону. */
  name?: string;
  /**
   * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
   * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   */
  editorType?: EditorType;
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
  body?: BodyObject;
  /** Тема листа. */
  subject?: string;
  /** Email-адреса відправника. */
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
  /** Час створення шаблону в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс" */
  created?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  projectName?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateListObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateListObjectJSON;
}

/** TemplateDeleteRequest in the API format: the object sent and received as JSON. */
export interface TemplateDeleteRequestJSON {
  "id": string;
}

/** Fields of new TemplateDeleteRequest(): a nested model may be a plain object in the API format. */
export interface TemplateDeleteRequestInit {
  /** Ідентифікатор шаблону. */
  id: string;
}

/** TemplateDeleteRequest */
export declare class TemplateDeleteRequest {
  constructor(data: TemplateDeleteRequestInit);
  /** Ідентифікатор шаблону. */
  id: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): TemplateDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): TemplateDeleteRequestJSON;
}
