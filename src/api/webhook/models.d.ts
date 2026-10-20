// Types of the models of the Webhook section.
import type { EmailStatus } from "../../common/models.js";

/**
 * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
 * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
 * (мінімум за 10 різними подіями).
 */
export declare const WebhookStatus: Readonly<{
  ACTIVE: "active";
  DISABLED: "disabled";
  STOPPED: "stopped";
}>;
/**
 * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
 * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
 * (мінімум за 10 різними подіями).
 */
export type WebhookStatus = "active" | "disabled" | "stopped";

/** Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip". */
export declare const WebhookEventFormat: Readonly<{
  JSON_POST: "json_post";
  JSON_POST_GZIP: "json_post_gzip";
}>;
/** Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip". */
export type WebhookEventFormat = "json_post" | "json_post_gzip";

/**
 * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
 * "transactional_spam_block".
 */
export declare const EventName: Readonly<{
  TRANSACTIONAL_EMAIL_STATUS: "transactional_email_status";
  TRANSACTIONAL_SPAM_BLOCK: "transactional_spam_block";
}>;
/**
 * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
 * "transactional_spam_block".
 */
export type EventName = "transactional_email_status" | "transactional_spam_block";

/**
 * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
 * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
 */
export declare const DeviceType: Readonly<{
  DESKTOP: "desktop";
  MOBILE: "mobile";
  TABLET: "tablet";
  OTHER: "other";
  UNKNOWN: "unknown";
}>;
/**
 * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
 * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
 */
export type DeviceType = "desktop" | "mobile" | "tablet" | "other" | "unknown";

/**
 * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
 * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
 * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
 * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
 * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
 */
export declare const TrafficType: Readonly<{
  HUMAN: "human";
  MACHINE: "machine";
  PROTECTED: "protected";
  UNKNOWN: "unknown";
}>;
/**
 * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
 * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
 * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
 * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
 * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
 */
export type TrafficType = "human" | "machine" | "protected" | "unknown";

/**
 * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
 * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
 * якщо event_name="transactional_spam_block".
 */
export declare const BlockType: Readonly<{
  ONE_SMTP: "one_smtp";
  ALL_SMTP: "all_smtp";
}>;
/**
 * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
 * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
 * якщо event_name="transactional_spam_block".
 */
export type BlockType = "one_smtp" | "all_smtp";

/**
 * Це подія блокування чи розблокування. Властивість присутня лише якщо
 * event_name="transactional_spam_block".
 */
export declare const DomainStatus: Readonly<{
  BLOCKED: "blocked";
  UNBLOCKED: "unblocked";
}>;
/**
 * Це подія блокування чи розблокування. Властивість присутня лише якщо
 * event_name="transactional_spam_block".
 */
export type DomainStatus = "blocked" | "unblocked";

/** WebhookSetRequest in the API format: the object sent and received as JSON. */
export interface WebhookSetRequestJSON {
  "url": string;
  "status"?: WebhookStatus;
  "event_format"?: WebhookEventFormat;
  "delivery_info"?: number;
  "single_event"?: number;
  "max_parallel"?: number;
  "events"?: WebhookEventsObjectJSON;
}

/** Fields of new WebhookSetRequest(): a nested model may be a plain object in the API format. */
export interface WebhookSetRequestInit {
  /**
   * Рядок з URL, на який надсилатиметься запит у разі виникнення події (ідентифікатор обробника). В URL
   * поки що підтримуються лише ASCII-символи. Якщо вам потрібно використати не-ASCII, сконвертуйте URL у
   * [Punycode](https://en.wikipedia.org/wiki/Punycode).
   */
  url: string;
  /**
   * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
   * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
   * (мінімум за 10 різними подіями).
   * За замовчуванням: `active`.
   */
  status?: WebhookStatus;
  /**
   * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * За замовчуванням: `json_post`.
   */
  eventFormat?: WebhookEventFormat;
  /**
   * Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається
   * додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки
   * "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent
   * інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і
   * traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для
   * статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може
   * повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  deliveryInfo?: number;
  /**
   * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  singleEvent?: number;
  /**
   * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
   * обробити — тим краще.
   * За замовчуванням: `10`.
   */
  maxParallel?: number;
  /** Об'єкт, що описує події, про які потрібно сповіщати. */
  events?: WebhookEventsObject | WebhookEventsObjectJSON;
}

/** WebhookSetRequest */
export declare class WebhookSetRequest {
  constructor(data: WebhookSetRequestInit);
  /**
   * Рядок з URL, на який надсилатиметься запит у разі виникнення події (ідентифікатор обробника). В URL
   * поки що підтримуються лише ASCII-символи. Якщо вам потрібно використати не-ASCII, сконвертуйте URL у
   * [Punycode](https://en.wikipedia.org/wiki/Punycode).
   */
  url: string;
  /**
   * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
   * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
   * (мінімум за 10 різними подіями).
   * За замовчуванням: `active`.
   */
  status?: WebhookStatus;
  /**
   * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * За замовчуванням: `json_post`.
   */
  eventFormat?: WebhookEventFormat;
  /**
   * Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається
   * додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки
   * "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent
   * інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і
   * traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для
   * статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може
   * повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  deliveryInfo?: number;
  /**
   * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  singleEvent?: number;
  /**
   * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
   * обробити — тим краще.
   * За замовчуванням: `10`.
   */
  maxParallel?: number;
  /** Об'єкт, що описує події, про які потрібно сповіщати. */
  events?: WebhookEventsObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookSetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookSetRequestJSON;
}

/** WebhookEventsObject in the API format: the object sent and received as JSON. */
export interface WebhookEventsObjectJSON {
  "spam_block"?: Array<string>;
  "email_status"?: Array<EmailStatus>;
}

/** Fields of new WebhookEventsObject(): a nested model may be a plain object in the API format. */
export interface WebhookEventsObjectInit {
  /**
   * Якщо присутній, то надсилатимуться сповіщення про спам-блокування. У масиві має бути єдиний елемент
   * із рядком "*".
   */
  spamBlock?: Array<string>;
  /**
   * Якщо присутній, то надсилатимуться сповіщення про зміну статусу email. У масиві перелічуються ті
   * статуси, про які надсилатимуться сповіщення.
   */
  emailStatus?: Array<EmailStatus>;
}

/** Об'єкт, що описує події, про які потрібно сповіщати. */
export declare class WebhookEventsObject {
  constructor(data?: WebhookEventsObjectInit);
  /**
   * Якщо присутній, то надсилатимуться сповіщення про спам-блокування. У масиві має бути єдиний елемент
   * із рядком "*".
   */
  spamBlock?: Array<string>;
  /**
   * Якщо присутній, то надсилатимуться сповіщення про зміну статусу email. У масиві перелічуються ті
   * статуси, про які надсилатимуться сповіщення.
   */
  emailStatus?: Array<EmailStatus>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookEventsObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookEventsObjectJSON;
}

/** WebhookSetResponse in the API format: the object sent and received as JSON. */
export interface WebhookSetResponseJSON {
  "status"?: string;
  "object"?: WebhookObjectJSON;
}

/** Fields of new WebhookSetResponse(): a nested model may be a plain object in the API format. */
export interface WebhookSetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт з усіма властивостями webhook. */
  object?: WebhookObject | WebhookObjectJSON;
}

/** WebhookSetResponse */
export declare class WebhookSetResponse {
  constructor(data?: WebhookSetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт з усіма властивостями webhook. */
  object?: WebhookObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookSetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookSetResponseJSON;
}

/** WebhookObject in the API format: the object sent and received as JSON. */
export interface WebhookObjectJSON {
  "id"?: number;
  "url"?: string;
  "status"?: WebhookStatus;
  "event_format"?: WebhookEventFormat;
  "delivery_info"?: number;
  "single_event"?: number;
  "max_parallel"?: number;
  "updated_at"?: string;
  "events"?: WebhookEventsObjectJSON;
}

/** Fields of new WebhookObject(): a nested model may be a plain object in the API format. */
export interface WebhookObjectInit {
  /** Унікальний ідентифікатор webhook. */
  id?: number;
  /** URL webhook. */
  url?: string;
  /**
   * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
   * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
   * (мінімум за 10 різними подіями).
   * За замовчуванням: `active`.
   */
  status?: WebhookStatus;
  /**
   * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * За замовчуванням: `json_post`.
   */
  eventFormat?: WebhookEventFormat;
  /**
   * Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається
   * додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки
   * "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent
   * інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і
   * traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для
   * статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може
   * повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  deliveryInfo?: number;
  /**
   * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  singleEvent?: number;
  /**
   * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
   * обробити — тим краще.
   * За замовчуванням: `10`.
   */
  maxParallel?: number;
  /** Час останнього оновлення властивостей webhook у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  updatedAt?: string;
  /** Об'єкт, що описує події, про які потрібно сповіщати. */
  events?: WebhookEventsObject | WebhookEventsObjectJSON;
}

/** Об'єкт з усіма властивостями webhook. */
export declare class WebhookObject {
  constructor(data?: WebhookObjectInit);
  /** Унікальний ідентифікатор webhook. */
  id?: number;
  /** URL webhook. */
  url?: string;
  /**
   * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
   * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
   * (мінімум за 10 різними подіями).
   * За замовчуванням: `active`.
   */
  status?: WebhookStatus;
  /**
   * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * За замовчуванням: `json_post`.
   */
  eventFormat?: WebhookEventFormat;
  /**
   * Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається
   * додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки
   * "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent
   * інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і
   * traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для
   * статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може
   * повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  deliveryInfo?: number;
  /**
   * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * Допустимі значення: `0`, `1`.
   * За замовчуванням: `0`.
   */
  singleEvent?: number;
  /**
   * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
   * обробити — тим краще.
   * За замовчуванням: `10`.
   */
  maxParallel?: number;
  /** Час останнього оновлення властивостей webhook у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  updatedAt?: string;
  /** Об'єкт, що описує події, про які потрібно сповіщати. */
  events?: WebhookEventsObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookObjectJSON;
}

/** WebhookCallback in the API format: the object sent and received as JSON. */
export interface WebhookCallbackJSON {
  "auth"?: string;
  "events_by_user"?: Array<WebhookCallbackEventsByUserItemJSON>;
}

/** Fields of new WebhookCallback(): a nested model may be a plain object in the API format. */
export interface WebhookCallbackInit {
  /**
   * MD5-хеш рядкового тіла повідомлення, у якому значення auth замінено на api_key користувача/проєкту,
   * чий обробник викликається. За допомогою цього отримувач сповіщення може як провести автентифікацію,
   * так і перевірити цілісність сповіщення.
   */
  auth?: string;
  /** Масив з одним елементом, що містить дані про події користувача/проєкту. */
  eventsByUser?: Array<WebhookCallbackEventsByUserItem | WebhookCallbackEventsByUserItemJSON>;
}

/** Опис формату webhook. */
export declare class WebhookCallback {
  constructor(data?: WebhookCallbackInit);
  /**
   * MD5-хеш рядкового тіла повідомлення, у якому значення auth замінено на api_key користувача/проєкту,
   * чий обробник викликається. За допомогою цього отримувач сповіщення може як провести автентифікацію,
   * так і перевірити цілісність сповіщення.
   */
  auth?: string;
  /** Масив з одним елементом, що містить дані про події користувача/проєкту. */
  eventsByUser?: Array<WebhookCallbackEventsByUserItem>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookCallback;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookCallbackJSON;
}

/** WebhookCallbackEventsByUserItem in the API format: the object sent and received as JSON. */
export interface WebhookCallbackEventsByUserItemJSON {
  "user_id"?: number;
  "project_id"?: string;
  "project_name"?: string;
  "events"?: Array<WebhookCallbackEventsByUserItemEventsItemJSON>;
}

/** Fields of new WebhookCallbackEventsByUserItem(): a nested model may be a plain object in the API format. */
export interface WebhookCallbackEventsByUserItemInit {
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Ідентифікатор проєкту, присутній, якщо webhook було зареєстровано за допомогою API-ключа проєкту. */
  projectId?: string;
  /** Назва проєкту, присутня, якщо webhook було зареєстровано за допомогою API-ключа проєкту. */
  projectName?: string;
  /** Масив подій, про які сповіщає виклик webhook. */
  events?: Array<WebhookCallbackEventsByUserItemEventsItem | WebhookCallbackEventsByUserItemEventsItemJSON>;
}

/** WebhookCallbackEventsByUserItem */
export declare class WebhookCallbackEventsByUserItem {
  constructor(data?: WebhookCallbackEventsByUserItemInit);
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Ідентифікатор проєкту, присутній, якщо webhook було зареєстровано за допомогою API-ключа проєкту. */
  projectId?: string;
  /** Назва проєкту, присутня, якщо webhook було зареєстровано за допомогою API-ключа проєкту. */
  projectName?: string;
  /** Масив подій, про які сповіщає виклик webhook. */
  events?: Array<WebhookCallbackEventsByUserItemEventsItem>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookCallbackEventsByUserItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookCallbackEventsByUserItemJSON;
}

/** WebhookCallbackEventsByUserItemEventsItem in the API format: the object sent and received as JSON. */
export interface WebhookCallbackEventsByUserItemEventsItemJSON {
  "event_name"?: EventName;
  "event_data"?: WebhookCallbackEventsByUserItemEventsItemEventDataJSON;
}

/** Fields of new WebhookCallbackEventsByUserItemEventsItem(): a nested model may be a plain object in the API format. */
export interface WebhookCallbackEventsByUserItemEventsItemInit {
  /**
   * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
   * "transactional_spam_block".
   */
  eventName?: EventName;
  /**
   * Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі
   * можливі властивості, спочатку для події "transactional_email_status", потім для події
   * "transactional_spam_block".
   */
  eventData?: WebhookCallbackEventsByUserItemEventsItemEventData | WebhookCallbackEventsByUserItemEventsItemEventDataJSON;
}

/** WebhookCallbackEventsByUserItemEventsItem */
export declare class WebhookCallbackEventsByUserItemEventsItem {
  constructor(data?: WebhookCallbackEventsByUserItemEventsItemInit);
  /**
   * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
   * "transactional_spam_block".
   */
  eventName?: EventName;
  /**
   * Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі
   * можливі властивості, спочатку для події "transactional_email_status", потім для події
   * "transactional_spam_block".
   */
  eventData?: WebhookCallbackEventsByUserItemEventsItemEventData;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookCallbackEventsByUserItemEventsItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookCallbackEventsByUserItemEventsItemJSON;
}

/** WebhookCallbackEventsByUserItemEventsItemEventData in the API format: the object sent and received as JSON. */
export interface WebhookCallbackEventsByUserItemEventsItemEventDataJSON {
  "job_id"?: string;
  "metadata"?: Record<string, string>;
  "email"?: string;
  "status"?: EmailStatus;
  "event_time"?: string;
  "url"?: string;
  "delivery_info"?: WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoJSON;
  "block_time"?: string;
  "block_type"?: BlockType;
  "domain"?: string;
  "SMTP_blocks_count"?: number;
  "domain_status"?: DomainStatus;
}

/** Fields of new WebhookCallbackEventsByUserItemEventsItemEventData(): a nested model may be a plain object in the API format. */
export interface WebhookCallbackEventsByUserItemEventsItemEventDataInit {
  /**
   * Ідентифікатор завдання, раніше повернутий методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send). Присутній лише якщо
   * event_name="transactional_email_status".
   */
  jobId?: string;
  /**
   * Метадані, раніше передані методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send) у полі recipients.metadata
   * або global_metadata. Присутні лише якщо event_name="transactional_email_status".
   */
  metadata?: Record<string, string>;
  /**
   * Email, на який було здійснено надсилання. Присутній лише якщо
   * event_name="transactional_email_status".
   */
  email?: string;
  /**
   * Статус доставки листа. Присутній лише якщо event_name="transactional_email_status". Набуває одного з
   * таких значень:
   *
   * __accepted__ — повідомлення прийнято, але ще не надіслано.
   *
   * __sent__ — повідомлення надіслано, але ще не доставлено.
   *
   * __delivered__ — повідомлення доставлено. Може змінитися на “opened”, “clicked”, “unsubscribed”,
   * “subscribed” або “spam”.
   *
   * __opened__ — повідомлення доставлено й зареєстровано його прочитання. Може змінитися на “clicked”,
   * “unsubscribed”, “subscribed” або “spam”.
   *
   * __clicked__ — повідомлення доставлено, прочитано, було зареєстровано перехід за одним з посилань у
   * листі. Може змінитися на “unsubscribed”, “subscribed” або “spam”.
   *
   * __unsubscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач
   * відписався за посиланням у листі. Може змінитися на “subscribed”.
   *
   * __subscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався,
   * а потім знову підписався за посиланням у листі. Може змінитися на “unsubscribed”.
   *
   * __soft_bounced__ — тимчасова недоставка повідомлення. AllyMailer продовжує спроби доставки протягом
   * 2 діб. У разі успішної доставки лист перейде у статус “delivered”, у разі неуспішної — у
   * “hard_bounced”.
   *
   * __hard_bounced__ — доставка не вдалася, спроб доставки більше не буде. Статус остаточний. Можливих
   * причин невдалої доставки безліч, для їх аналізу можна використати текст відповіді SMTP-сервера з
   * поля delivery_info.destination_response або нашу внутрішню класифікацію помилок з поля
   * delivery_info.delivery_status.
   *
   * __spam__ — повідомлення доставлено, але позначено як “спам” отримувачем. Статус остаточний. Ось
   * деякі домени, від яких AllyMailer може отримати й обробити скаргу про спам (використовуючи
   * технологію FBL): mail.ru, msn.com, outlook.com, hotmail.com, live.com, ukr.net, yahoo.com, aol.com.
   */
  status?: EmailStatus;
  /**
   * Дата й час події в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
   * event_name="transactional_email_status".
   */
  eventTime?: string;
  /**
   * URL у разі статусів "opened" і "clicked". Присутній лише якщо
   * event_name="transactional_email_status".
   */
  url?: string;
  /**
   * Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час
   * встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
   */
  deliveryInfo?: WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo | WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoJSON;
  /**
   * Дата й час спам-блока в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
   * event_name="transactional_spam_block".
   */
  blockTime?: string;
  /**
   * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
   * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
   * якщо event_name="transactional_spam_block".
   */
  blockType?: BlockType;
  /**
   * Домен, що заблокував надсилання. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  domain?: string;
  /**
   * Кількість заблокованих вихідних SMTP. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  sMTPBlocksCount?: number;
  /**
   * Це подія блокування чи розблокування. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  domainStatus?: DomainStatus;
}

/**
 * Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі
 * можливі властивості, спочатку для події "transactional_email_status", потім для події
 * "transactional_spam_block".
 */
export declare class WebhookCallbackEventsByUserItemEventsItemEventData {
  constructor(data?: WebhookCallbackEventsByUserItemEventsItemEventDataInit);
  /**
   * Ідентифікатор завдання, раніше повернутий методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send). Присутній лише якщо
   * event_name="transactional_email_status".
   */
  jobId?: string;
  /**
   * Метадані, раніше передані методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send) у полі recipients.metadata
   * або global_metadata. Присутні лише якщо event_name="transactional_email_status".
   */
  metadata?: Record<string, string>;
  /**
   * Email, на який було здійснено надсилання. Присутній лише якщо
   * event_name="transactional_email_status".
   */
  email?: string;
  /**
   * Статус доставки листа. Присутній лише якщо event_name="transactional_email_status". Набуває одного з
   * таких значень:
   *
   * __accepted__ — повідомлення прийнято, але ще не надіслано.
   *
   * __sent__ — повідомлення надіслано, але ще не доставлено.
   *
   * __delivered__ — повідомлення доставлено. Може змінитися на “opened”, “clicked”, “unsubscribed”,
   * “subscribed” або “spam”.
   *
   * __opened__ — повідомлення доставлено й зареєстровано його прочитання. Може змінитися на “clicked”,
   * “unsubscribed”, “subscribed” або “spam”.
   *
   * __clicked__ — повідомлення доставлено, прочитано, було зареєстровано перехід за одним з посилань у
   * листі. Може змінитися на “unsubscribed”, “subscribed” або “spam”.
   *
   * __unsubscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач
   * відписався за посиланням у листі. Може змінитися на “subscribed”.
   *
   * __subscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався,
   * а потім знову підписався за посиланням у листі. Може змінитися на “unsubscribed”.
   *
   * __soft_bounced__ — тимчасова недоставка повідомлення. AllyMailer продовжує спроби доставки протягом
   * 2 діб. У разі успішної доставки лист перейде у статус “delivered”, у разі неуспішної — у
   * “hard_bounced”.
   *
   * __hard_bounced__ — доставка не вдалася, спроб доставки більше не буде. Статус остаточний. Можливих
   * причин невдалої доставки безліч, для їх аналізу можна використати текст відповіді SMTP-сервера з
   * поля delivery_info.destination_response або нашу внутрішню класифікацію помилок з поля
   * delivery_info.delivery_status.
   *
   * __spam__ — повідомлення доставлено, але позначено як “спам” отримувачем. Статус остаточний. Ось
   * деякі домени, від яких AllyMailer може отримати й обробити скаргу про спам (використовуючи
   * технологію FBL): mail.ru, msn.com, outlook.com, hotmail.com, live.com, ukr.net, yahoo.com, aol.com.
   */
  status?: EmailStatus;
  /**
   * Дата й час події в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
   * event_name="transactional_email_status".
   */
  eventTime?: string;
  /**
   * URL у разі статусів "opened" і "clicked". Присутній лише якщо
   * event_name="transactional_email_status".
   */
  url?: string;
  /**
   * Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час
   * встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
   */
  deliveryInfo?: WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo;
  /**
   * Дата й час спам-блока в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
   * event_name="transactional_spam_block".
   */
  blockTime?: string;
  /**
   * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
   * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
   * якщо event_name="transactional_spam_block".
   */
  blockType?: BlockType;
  /**
   * Домен, що заблокував надсилання. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  domain?: string;
  /**
   * Кількість заблокованих вихідних SMTP. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  sMTPBlocksCount?: number;
  /**
   * Це подія блокування чи розблокування. Властивість присутня лише якщо
   * event_name="transactional_spam_block".
   */
  domainStatus?: DomainStatus;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookCallbackEventsByUserItemEventsItemEventData;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookCallbackEventsByUserItemEventsItemEventDataJSON;
}

/** WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo in the API format: the object sent and received as JSON. */
export interface WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoJSON {
  "delivery_status"?: string;
  "destination_response"?: string;
  "user_agent"?: string;
  "device_type"?: DeviceType;
  "device_brand"?: string;
  "os_name"?: string;
  "browser_name"?: string;
  "email_client_name"?: string;
  "traffic_type"?: TrafficType;
  "ip"?: string;
  "country_code"?: string;
  "country"?: string;
  "city"?: string;
  "sender_ip"?: string;
}

/** Fields of new WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo(): a nested model may be a plain object in the API format. */
export interface WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoInit {
  /**
   * Внутрішній детальний статус доставки AllyMailer. Ось деякі з можливих статусів:
   *
   * __err_user_unknown__ -- адреса не існує (і невідомо, чи існувала колись);
   *
   * __err_user_inactive__ -- адреса не використовується;
   *
   * __err_will_retry__ -- лист було тимчасово відхилено, пізніше буде здійснено повторну спробу
   * доставки;
   *
   * __err_mailbox_discarded__ -- адресу видалено (тобто колись існувала, але тепер її немає);
   *
   * __err_mailbox_full__ -- поштова скринька переповнена;
   *
   * __err_spam_rejected__ -- лист відхилено як спам;
   *
   * __err_blacklisted__ -- лист було відхилено через наявність IP-адреси або домену відправника в
   * якомусь із чорних списків;
   *
   * __err_too_large__ -- на думку сервера отримувача, лист перевищує допустимий розмір;
   *
   * __err_unsubscribed__ -- адресат раніше відписався від ваших розсилок;
   *
   * __err_unreachable__ -- адресу позначено як постійно недоступну через багаторазові помилки доставки
   * на цю адресу;
   *
   * __err_skip_letter__ -- надсилання скасовано, оскільки email-адреса тимчасово недоступна;
   *
   * __err_domain_inactive__ -- домен не приймає пошту або не існує;
   *
   * __err_destination_misconfigured__ -- домен не приймає пошту через неправильне налаштування на боці
   * отримувача, причому відповідь сервера містить інформацію про усувну причину (наприклад,
   * використовується непрацюючий блеклист тощо);
   *
   * __err_delivery_failed__ -- доставка не вдалася з інших причин;
   *
   * __err_spam_skipped__ -- надсилання скасовано через блокування розсилки як спаму;
   *
   * __err_lost__ -- лист не було надіслано через неузгодженість його частин, або його було втрачено
   * через збій на нашому боці. Відправник має повторно надіслати лист самостійно, оскільки оригінал не
   * зберігся;
   *
   * Ми залишаємо за собою право змінювати й додавати внутрішні статуси, тому решту
   * використовуваних наразі статусів перелічимо лише довідково, без пояснень:
   * ok_accepted, ok_sent, ok_delivered, ok_read, ok_link_visited, ok_unsubscribed, ok_resubscribed,
   * ok_spam_folder, ok_fbl,
   * not_sent, skip_dup_unreachable, skip_dup_temp_unreachable, skip_dup_mailbox_full,
   * err_spam_removed, err_resend, err_unknown, err_retry_letter, err_src_invalid,
   * err_dest_invalid, err_not_available, err_internal, err_no_dns, err_no_smtp, err_giveup.
   */
  deliveryStatus?: string;
  /** Відповідь SMTP-сервера. */
  destinationResponse?: string;
  /**
   * Рядок user agent отримувача. Присутній лише якщо вдалося його визначити, для статусів "clicked" і
   * "opened".
   */
  userAgent?: string;
  /**
   * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
   * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
   */
  deviceType?: DeviceType;
  /**
   * Марка пристрою отримувача, визначена за user agent. Присутня для статусів "clicked" і "opened", якщо
   * її вдалося визначити. Для device_type "mobile" і "tablet" присутня завжди та дорівнює "unknown",
   * якщо марку визначити не вдалося.
   */
  deviceBrand?: string;
  /**
   * Назва операційної системи пристрою отримувача, визначена за user agent. Присутня для статусів
   * "clicked" і "opened"; дорівнює "unknown", якщо ОС визначити не вдалося.
   */
  osName?: string;
  /**
   * Назва браузера, у якому було відкрито лист, визначена за user agent. Присутня для статусів "clicked"
   * і "opened", лише якщо було визначено браузер, тому ніколи не надходить разом з email_client_name.
   */
  browserName?: string;
  /**
   * Назва поштового клієнта, у якому було відкрито лист, визначена за user agent. Присутня для статусів
   * "clicked" і "opened", лише якщо було визначено поштовий клієнт, тому ніколи не надходить разом з
   * browser_name.
   */
  emailClientName?: string;
  /**
   * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
   * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
   * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
   * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
   * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
   */
  trafficType?: TrafficType;
  /** IP-адреса отримувача. Присутня лише якщо вдалося її визначити, для статусів "clicked" і "opened". */
  ip?: string;
  /**
   * ISO 3166-1 alpha-2 код країни, визначений за IP-адресою отримувача. Присутній для статусів "clicked"
   * і "opened".
   */
  countryCode?: string;
  /** Країна, визначена за IP-адресою отримувача. Присутня для статусів "clicked" і "opened". */
  country?: string;
  /** Місто, визначене за IP-адресою отримувача. Присутнє для статусів "clicked" і "opened". */
  city?: string;
  /**
   * IP-адреса SMTP-сервера, з якого було надіслано лист. Присутня лише для статусів "delivered",
   * "soft_bounced" і "hard_bounced", якщо доступна.
   */
  senderIp?: string;
}

/**
 * Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час
 * встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
 */
export declare class WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo {
  constructor(data?: WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoInit);
  /**
   * Внутрішній детальний статус доставки AllyMailer. Ось деякі з можливих статусів:
   *
   * __err_user_unknown__ -- адреса не існує (і невідомо, чи існувала колись);
   *
   * __err_user_inactive__ -- адреса не використовується;
   *
   * __err_will_retry__ -- лист було тимчасово відхилено, пізніше буде здійснено повторну спробу
   * доставки;
   *
   * __err_mailbox_discarded__ -- адресу видалено (тобто колись існувала, але тепер її немає);
   *
   * __err_mailbox_full__ -- поштова скринька переповнена;
   *
   * __err_spam_rejected__ -- лист відхилено як спам;
   *
   * __err_blacklisted__ -- лист було відхилено через наявність IP-адреси або домену відправника в
   * якомусь із чорних списків;
   *
   * __err_too_large__ -- на думку сервера отримувача, лист перевищує допустимий розмір;
   *
   * __err_unsubscribed__ -- адресат раніше відписався від ваших розсилок;
   *
   * __err_unreachable__ -- адресу позначено як постійно недоступну через багаторазові помилки доставки
   * на цю адресу;
   *
   * __err_skip_letter__ -- надсилання скасовано, оскільки email-адреса тимчасово недоступна;
   *
   * __err_domain_inactive__ -- домен не приймає пошту або не існує;
   *
   * __err_destination_misconfigured__ -- домен не приймає пошту через неправильне налаштування на боці
   * отримувача, причому відповідь сервера містить інформацію про усувну причину (наприклад,
   * використовується непрацюючий блеклист тощо);
   *
   * __err_delivery_failed__ -- доставка не вдалася з інших причин;
   *
   * __err_spam_skipped__ -- надсилання скасовано через блокування розсилки як спаму;
   *
   * __err_lost__ -- лист не було надіслано через неузгодженість його частин, або його було втрачено
   * через збій на нашому боці. Відправник має повторно надіслати лист самостійно, оскільки оригінал не
   * зберігся;
   *
   * Ми залишаємо за собою право змінювати й додавати внутрішні статуси, тому решту
   * використовуваних наразі статусів перелічимо лише довідково, без пояснень:
   * ok_accepted, ok_sent, ok_delivered, ok_read, ok_link_visited, ok_unsubscribed, ok_resubscribed,
   * ok_spam_folder, ok_fbl,
   * not_sent, skip_dup_unreachable, skip_dup_temp_unreachable, skip_dup_mailbox_full,
   * err_spam_removed, err_resend, err_unknown, err_retry_letter, err_src_invalid,
   * err_dest_invalid, err_not_available, err_internal, err_no_dns, err_no_smtp, err_giveup.
   */
  deliveryStatus?: string;
  /** Відповідь SMTP-сервера. */
  destinationResponse?: string;
  /**
   * Рядок user agent отримувача. Присутній лише якщо вдалося його визначити, для статусів "clicked" і
   * "opened".
   */
  userAgent?: string;
  /**
   * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
   * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
   */
  deviceType?: DeviceType;
  /**
   * Марка пристрою отримувача, визначена за user agent. Присутня для статусів "clicked" і "opened", якщо
   * її вдалося визначити. Для device_type "mobile" і "tablet" присутня завжди та дорівнює "unknown",
   * якщо марку визначити не вдалося.
   */
  deviceBrand?: string;
  /**
   * Назва операційної системи пристрою отримувача, визначена за user agent. Присутня для статусів
   * "clicked" і "opened"; дорівнює "unknown", якщо ОС визначити не вдалося.
   */
  osName?: string;
  /**
   * Назва браузера, у якому було відкрито лист, визначена за user agent. Присутня для статусів "clicked"
   * і "opened", лише якщо було визначено браузер, тому ніколи не надходить разом з email_client_name.
   */
  browserName?: string;
  /**
   * Назва поштового клієнта, у якому було відкрито лист, визначена за user agent. Присутня для статусів
   * "clicked" і "opened", лише якщо було визначено поштовий клієнт, тому ніколи не надходить разом з
   * browser_name.
   */
  emailClientName?: string;
  /**
   * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
   * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
   * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
   * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
   * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
   */
  trafficType?: TrafficType;
  /** IP-адреса отримувача. Присутня лише якщо вдалося її визначити, для статусів "clicked" і "opened". */
  ip?: string;
  /**
   * ISO 3166-1 alpha-2 код країни, визначений за IP-адресою отримувача. Присутній для статусів "clicked"
   * і "opened".
   */
  countryCode?: string;
  /** Країна, визначена за IP-адресою отримувача. Присутня для статусів "clicked" і "opened". */
  country?: string;
  /** Місто, визначене за IP-адресою отримувача. Присутнє для статусів "clicked" і "opened". */
  city?: string;
  /**
   * IP-адреса SMTP-сервера, з якого було надіслано лист. Присутня лише для статусів "delivered",
   * "soft_bounced" і "hard_bounced", якщо доступна.
   */
  senderIp?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfoJSON;
}

/** WebhookGetRequest in the API format: the object sent and received as JSON. */
export interface WebhookGetRequestJSON {
  "url": string;
}

/** Fields of new WebhookGetRequest(): a nested model may be a plain object in the API format. */
export interface WebhookGetRequestInit {
  /** URL webhook. */
  url: string;
}

/** WebhookGetRequest */
export declare class WebhookGetRequest {
  constructor(data: WebhookGetRequestInit);
  /** URL webhook. */
  url: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookGetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookGetRequestJSON;
}

/** WebhookGetResponse in the API format: the object sent and received as JSON. */
export interface WebhookGetResponseJSON {
  "status"?: string;
  "object"?: WebhookObjectJSON;
}

/** Fields of new WebhookGetResponse(): a nested model may be a plain object in the API format. */
export interface WebhookGetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт з усіма властивостями webhook. */
  object?: WebhookObject | WebhookObjectJSON;
}

/** WebhookGetResponse */
export declare class WebhookGetResponse {
  constructor(data?: WebhookGetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт з усіма властивостями webhook. */
  object?: WebhookObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookGetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookGetResponseJSON;
}

/** WebhookListRequest in the API format: the object sent and received as JSON. */
export interface WebhookListRequestJSON {
  "limit"?: number;
  "offset"?: number;
}

/** Fields of new WebhookListRequest(): a nested model may be a plain object in the API format. */
export interface WebhookListRequestInit {
  /** Максимальна кількість webhook, що повертаються за один виклик. Рекомендується 50. */
  limit?: number;
  /**
   * Індекс першого webhook зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
}

/** WebhookListRequest */
export declare class WebhookListRequest {
  constructor(data?: WebhookListRequestInit);
  /** Максимальна кількість webhook, що повертаються за один виклик. Рекомендується 50. */
  limit?: number;
  /**
   * Індекс першого webhook зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookListRequestJSON;
}

/** WebhookListResponse in the API format: the object sent and received as JSON. */
export interface WebhookListResponseJSON {
  "status"?: string;
  "objects"?: Array<WebhookObjectJSON>;
}

/** Fields of new WebhookListResponse(): a nested model may be a plain object in the API format. */
export interface WebhookListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з даними про webhook. */
  objects?: Array<WebhookObject | WebhookObjectJSON>;
}

/** WebhookListResponse */
export declare class WebhookListResponse {
  constructor(data?: WebhookListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з даними про webhook. */
  objects?: Array<WebhookObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookListResponseJSON;
}

/** WebhookDeleteRequest in the API format: the object sent and received as JSON. */
export interface WebhookDeleteRequestJSON {
  "url": string;
}

/** Fields of new WebhookDeleteRequest(): a nested model may be a plain object in the API format. */
export interface WebhookDeleteRequestInit {
  /** URL webhook. */
  url: string;
}

/** WebhookDeleteRequest */
export declare class WebhookDeleteRequest {
  constructor(data: WebhookDeleteRequestInit);
  /** URL webhook. */
  url: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): WebhookDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): WebhookDeleteRequestJSON;
}
