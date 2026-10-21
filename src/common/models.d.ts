// Types of the models of the Common section.

/**
 * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або
 * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
 */
export declare const TemplateEngine: Readonly<{
  SIMPLE: "simple";
  VELOCITY: "velocity";
  LIQUID: "liquid";
  NONE: "none";
}>;
/**
 * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або
 * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
 */
export type TemplateEngine = "simple" | "velocity" | "liquid" | "none";

/** EmailStatus */
export declare const EmailStatus: Readonly<{
  SENT: "sent";
  DELIVERED: "delivered";
  OPENED: "opened";
  CLICKED: "clicked";
  UNSUBSCRIBED: "unsubscribed";
  SUBSCRIBED: "subscribed";
  SOFT_BOUNCED: "soft_bounced";
  HARD_BOUNCED: "hard_bounced";
  SPAM: "spam";
}>;
/** EmailStatus */
export type EmailStatus = "sent" | "delivered" | "opened" | "clicked" | "unsubscribed" | "subscribed" | "soft_bounced" | "hard_bounced" | "spam";

/**
 * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
 * надсилання листів.
 */
export declare const VerificationRecordStatus: Readonly<{
  CONFIRMED: "confirmed";
  UNCONFIRMED: "unconfirmed";
}>;
/**
 * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
 * надсилання листів.
 */
export type VerificationRecordStatus = "confirmed" | "unconfirmed";

/**
 * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
 * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
 * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
 * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
 * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
 * змінюється.
 */
export declare const EmailCounterMode: Readonly<{
  DEFAULT: "default";
  PERMANENT: "permanent";
}>;
/**
 * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
 * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
 * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
 * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
 * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
 * змінюється.
 */
export type EmailCounterMode = "default" | "permanent";

/** BodyObject in the API format: the object sent and received as JSON. */
export interface BodyObjectJSON {
  "html"?: string;
  "plaintext"?: string;
  "amp"?: string;
}

/** Fields of new BodyObject(): a nested model may be a plain object in the API format. */
export interface BodyObjectInit {
  /** HTML-частина листа */
  html?: string;
  /** Plaintext-частина листа. */
  plaintext?: string;
  /**
   * Необов'язкова
   * [AMP](http://amp.dev/documentation/guides-and-tutorials/learn/email_fundamentals/)-частина листа.
   */
  amp?: string;
}

/**
 * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
 * має бути присутня обов'язково.
 */
export declare class BodyObject {
  constructor(data?: BodyObjectInit);
  /** HTML-частина листа */
  html?: string;
  /** Plaintext-частина листа. */
  plaintext?: string;
  /**
   * Необов'язкова
   * [AMP](http://amp.dev/documentation/guides-and-tutorials/learn/email_fundamentals/)-частина листа.
   */
  amp?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): BodyObject;
  /** An HTML body, with an optional plain-text part. */
  static html(html: string, plaintext?: string): BodyObject;
  /** A plain-text body. */
  static text(plaintext: string): BodyObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): BodyObjectJSON;
}

/** HeadersObject in the API format: the object sent and received as JSON. */
export interface HeadersObjectJSON {
  "X-ALLYMAILER-Global-Language"?: string;
  "X-ALLYMAILER-Template-Engine"?: string;
  [key: string]: string | undefined;
}

/** Fields of new HeadersObject(): a nested model may be a plain object in the API format. */
export interface HeadersObjectInit {
  /**
   * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
   * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   */
  xALLYMAILERGlobalLanguage?: string;
  /**
   * Заголовок для вибору шаблонізатора — або “simple”, або “velocity”, або “liquid”, або “none”. За
   * замовчуванням — “simple”. Має пріоритет над значенням, що передається в параметрі “template_engine”.
   */
  xALLYMAILERTemplateEngine?: string;
  /**
   * Keys besides the named fields, sent next to them (a named field wins over the same key here); keys
   * of a response that are not named fields come here.
   */
  extra?: Record<string, string>;
}

/**
 * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
 * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
 * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
 * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
 * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
 * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
 * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
 */
export declare class HeadersObject {
  constructor(data?: HeadersObjectInit);
  /**
   * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
   * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   */
  xALLYMAILERGlobalLanguage?: string;
  /**
   * Заголовок для вибору шаблонізатора — або “simple”, або “velocity”, або “liquid”, або “none”. За
   * замовчуванням — “simple”. Має пріоритет над значенням, що передається в параметрі “template_engine”.
   */
  xALLYMAILERTemplateEngine?: string;
  /**
   * Keys besides the named fields, sent next to them (a named field wins over the same key here); keys
   * of a response that are not named fields come here.
   */
  extra: Record<string, string>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): HeadersObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): HeadersObjectJSON;
}

/** AttachmentsArrayItem in the API format: the object sent and received as JSON. */
export interface AttachmentsArrayItemJSON {
  "type": string;
  "name": string;
  "content": string;
}

/** Fields of new AttachmentsArrayItem(): a nested model may be a plain object in the API format. */
export interface AttachmentsArrayItemInit {
  /**
   * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
   * "application/octet-stream".
   */
  type: string;
  /**
   * Назва вкладення у форматі: "ім'я.розширення". У разі передачі кількох вкладень їхні назви мають бути
   * унікальними. У назві вкладень заборонено символ ‘/’.
   */
  name: string;
  /**
   * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
   * (9786710 байт у base64).
   */
  content: string;
}

/** AttachmentsArrayItem */
export declare class AttachmentsArrayItem {
  constructor(data: AttachmentsArrayItemInit);
  /**
   * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
   * "application/octet-stream".
   */
  type: string;
  /**
   * Назва вкладення у форматі: "ім'я.розширення". У разі передачі кількох вкладень їхні назви мають бути
   * унікальними. У назві вкладень заборонено символ ‘/’.
   */
  name: string;
  /**
   * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
   * (9786710 байт у base64).
   */
  content: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): AttachmentsArrayItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): AttachmentsArrayItemJSON;
}

/** InlineAttachmentsArrayItem in the API format: the object sent and received as JSON. */
export interface InlineAttachmentsArrayItemJSON {
  "type": string;
  "name": string;
  "content": string;
}

/** Fields of new InlineAttachmentsArrayItem(): a nested model may be a plain object in the API format. */
export interface InlineAttachmentsArrayItemInit {
  /**
   * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
   * "application/octet-stream".
   */
  type: string;
  /**
   * Ідентифікатор вкладення. Якщо, наприклад, "name"="IMAGECID", то для виведення картинки з цього
   * вкладення в HTML-тексті листа потрібно вказати <img src="cid:IMAGECID">.
   */
  name: string;
  /**
   * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
   * (9786710 байт у base64).
   */
  content: string;
}

/** InlineAttachmentsArrayItem */
export declare class InlineAttachmentsArrayItem {
  constructor(data: InlineAttachmentsArrayItemInit);
  /**
   * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
   * "application/octet-stream".
   */
  type: string;
  /**
   * Ідентифікатор вкладення. Якщо, наприклад, "name"="IMAGECID", то для виведення картинки з цього
   * вкладення в HTML-тексті листа потрібно вказати <img src="cid:IMAGECID">.
   */
  name: string;
  /**
   * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
   * (9786710 байт у base64).
   */
  content: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): InlineAttachmentsArrayItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): InlineAttachmentsArrayItemJSON;
}

/** SuccessResponse in the API format: the object sent and received as JSON. */
export interface SuccessResponseJSON {
  "status"?: string;
}

/** Fields of new SuccessResponse(): a nested model may be a plain object in the API format. */
export interface SuccessResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
}

/** SuccessResponse */
export declare class SuccessResponse {
  constructor(data?: SuccessResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuccessResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuccessResponseJSON;
}
