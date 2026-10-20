// Models of the Webhook section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/**
 * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
 * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
 * (мінімум за 10 різними подіями).
 */
export const WebhookStatus = Object.freeze({
  ACTIVE: "active",
  DISABLED: "disabled",
  STOPPED: "stopped",
});

/** Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip". */
export const WebhookEventFormat = Object.freeze({
  JSON_POST: "json_post",
  JSON_POST_GZIP: "json_post_gzip",
});

/**
 * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
 * "transactional_spam_block".
 */
export const EventName = Object.freeze({
  TRANSACTIONAL_EMAIL_STATUS: "transactional_email_status",
  TRANSACTIONAL_SPAM_BLOCK: "transactional_spam_block",
});

/**
 * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
 * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
 */
export const DeviceType = Object.freeze({
  DESKTOP: "desktop",
  MOBILE: "mobile",
  TABLET: "tablet",
  OTHER: "other",
  UNKNOWN: "unknown",
});

/**
 * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
 * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
 * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
 * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
 * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
 */
export const TrafficType = Object.freeze({
  HUMAN: "human",
  MACHINE: "machine",
  PROTECTED: "protected",
  UNKNOWN: "unknown",
});

/**
 * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
 * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
 * якщо event_name="transactional_spam_block".
 */
export const BlockType = Object.freeze({
  ONE_SMTP: "one_smtp",
  ALL_SMTP: "all_smtp",
});

/**
 * Це подія блокування чи розблокування. Властивість присутня лише якщо
 * event_name="transactional_spam_block".
 */
export const DomainStatus = Object.freeze({
  BLOCKED: "blocked",
  UNBLOCKED: "unblocked",
});

/** WebhookSetRequest */
export class WebhookSetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.url Рядок з URL, на який надсилатиметься запит у разі виникнення події (ідентифікатор обробника). В URL поки що підтримуються лише ASCII-символи. Якщо вам потрібно використати не-ASCII, сконвертуйте URL у [Punycode](https://en.wikipedia.org/wiki/Punycode).
   * @param {"active"|"disabled"|"stopped"} [data.status] Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів (мінімум за 10 різними подіями).
   * @param {"json_post"|"json_post_gzip"} [data.eventFormat] Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * @param {number} [data.deliveryInfo] Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * @param {number} [data.singleEvent] 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * @param {number} [data.maxParallel] Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може обробити — тим краще.
   * @param {WebhookEventsObject} [data.events] Об'єкт, що описує події, про які потрібно сповіщати.
   */
  constructor({ url, status, eventFormat, deliveryInfo, singleEvent, maxParallel, events } = {}) {
    /**
     * Рядок з URL, на який надсилатиметься запит у разі виникнення події (ідентифікатор обробника). В URL
     * поки що підтримуються лише ASCII-символи. Якщо вам потрібно використати не-ASCII, сконвертуйте URL у
     * [Punycode](https://en.wikipedia.org/wiki/Punycode).
     * @type {string|undefined}
     */
    this.url = url;
    /**
     * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
     * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
     * (мінімум за 10 різними подіями).
     * За замовчуванням: `active`.
     * @type {"active"|"disabled"|"stopped"|undefined}
     */
    this.status = status;
    /**
     * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
     * За замовчуванням: `json_post`.
     * @type {"json_post"|"json_post_gzip"|undefined}
     */
    this.eventFormat = eventFormat;
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
     * @type {number|undefined}
     */
    this.deliveryInfo = deliveryInfo;
    /**
     * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
     * Допустимі значення: `0`, `1`.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.singleEvent = singleEvent;
    /**
     * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
     * обробити — тим краще.
     * За замовчуванням: `10`.
     * @type {number|undefined}
     */
    this.maxParallel = maxParallel;
    /**
     * Об'єкт, що описує події, про які потрібно сповіщати.
     * @type {WebhookEventsObject|undefined}
     */
    this.events = events == null ? events : toModel(events, WebhookEventsObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookSetRequest}
   */
  static fromJSON(data) {
    return new WebhookSetRequest({
      url: data["url"],
      status: data["status"],
      eventFormat: data["event_format"],
      deliveryInfo: data["delivery_info"],
      singleEvent: data["single_event"],
      maxParallel: data["max_parallel"],
      events: data["events"] == null ? undefined : toModel(data["events"], WebhookEventsObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "url": this.url,
      "status": this.status,
      "event_format": this.eventFormat,
      "delivery_info": this.deliveryInfo,
      "single_event": this.singleEvent,
      "max_parallel": this.maxParallel,
      "events": this.events == null ? undefined : toPlain(this.events),
    });
  }
}

/** Об'єкт, що описує події, про які потрібно сповіщати. */
export class WebhookEventsObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string[]} [data.spamBlock] Якщо присутній, то надсилатимуться сповіщення про спам-блокування. У масиві має бути єдиний елемент із рядком "*".
   * @param {("sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam")[]} [data.emailStatus] Якщо присутній, то надсилатимуться сповіщення про зміну статусу email. У масиві перелічуються ті статуси, про які надсилатимуться сповіщення.
   */
  constructor({ spamBlock, emailStatus } = {}) {
    /**
     * Якщо присутній, то надсилатимуться сповіщення про спам-блокування. У масиві має бути єдиний елемент
     * із рядком "*".
     * @type {string[]|undefined}
     */
    this.spamBlock = spamBlock;
    /**
     * Якщо присутній, то надсилатимуться сповіщення про зміну статусу email. У масиві перелічуються ті
     * статуси, про які надсилатимуться сповіщення.
     * @type {("sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam")[]|undefined}
     */
    this.emailStatus = emailStatus;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookEventsObject}
   */
  static fromJSON(data) {
    return new WebhookEventsObject({
      spamBlock: data["spam_block"],
      emailStatus: data["email_status"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "spam_block": this.spamBlock,
      "email_status": this.emailStatus,
    });
  }
}

/** WebhookSetResponse */
export class WebhookSetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {WebhookObject} [data.object] Об'єкт з усіма властивостями webhook.
   */
  constructor({ status, object } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Об'єкт з усіма властивостями webhook.
     * @type {WebhookObject|undefined}
     */
    this.object = object == null ? object : toModel(object, WebhookObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookSetResponse}
   */
  static fromJSON(data) {
    return new WebhookSetResponse({
      status: data["status"],
      object: data["object"] == null ? undefined : toModel(data["object"], WebhookObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "object": this.object == null ? undefined : toPlain(this.object),
    });
  }
}

/** Об'єкт з усіма властивостями webhook. */
export class WebhookObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.id] Унікальний ідентифікатор webhook.
   * @param {string} [data.url] URL webhook.
   * @param {"active"|"disabled"|"stopped"} [data.status] Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів (мінімум за 10 різними подіями).
   * @param {"json_post"|"json_post_gzip"} [data.eventFormat] Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
   * @param {number} [data.deliveryInfo] Повертати (1) чи ні (0) докладну інформацію про доставку. Якщо delivery_info=1, повертається додаткова інформація про відповідь сервера та внутрішній статус доставки в разі статусів доставки "hard_bounced" і "soft_bounced"; user agent, IP-адреса отримувача, геодані, визначена за user agent інформація про пристрій (тип і марка пристрою, назва ОС, браузера або поштового клієнта) і traffic_type (human, machine, protected або unknown) в разі статусів "opened" і "clicked"; URL для статусу "clicked". Для статусів "delivered", "soft_bounced" і "hard_bounced" AllyMailer також може повернути sender_ip — IP-адресу SMTP-сервера, з якого було надіслано лист, якщо він доступний.
   * @param {number} [data.singleEvent] 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
   * @param {number} [data.maxParallel] Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може обробити — тим краще.
   * @param {string} [data.updatedAt] Час останнього оновлення властивостей webhook у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   * @param {WebhookEventsObject} [data.events] Об'єкт, що описує події, про які потрібно сповіщати.
   */
  constructor({ id, url, status, eventFormat, deliveryInfo, singleEvent, maxParallel, updatedAt, events } = {}) {
    /**
     * Унікальний ідентифікатор webhook.
     * @type {number|undefined}
     */
    this.id = id;
    /**
     * URL webhook.
     * @type {string|undefined}
     */
    this.url = url;
    /**
     * Статус webhook, за замовчуванням "active". Статус "disabled" означає, що webhook було вимкнено
     * користувачем, "stopped" означає, що webhook було зупинено системою після 24 годин невдалих викликів
     * (мінімум за 10 різними подіями).
     * За замовчуванням: `active`.
     * @type {"active"|"disabled"|"stopped"|undefined}
     */
    this.status = status;
    /**
     * Формат сповіщень. "json_post"(за замовчуванням) або "json_post_gzip".
     * За замовчуванням: `json_post`.
     * @type {"json_post"|"json_post_gzip"|undefined}
     */
    this.eventFormat = eventFormat;
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
     * @type {number|undefined}
     */
    this.deliveryInfo = deliveryInfo;
    /**
     * 0=в одному виклику може надійти декілька подій, 1=лише одна подія на виклик (не рекомендується).
     * Допустимі значення: `0`, `1`.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.singleEvent = singleEvent;
    /**
     * Максимальна кількість дозволених паралельних запитів до вашого сервера. Чим більше ваш сервер може
     * обробити — тим краще.
     * За замовчуванням: `10`.
     * @type {number|undefined}
     */
    this.maxParallel = maxParallel;
    /**
     * Час останнього оновлення властивостей webhook у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.updatedAt = updatedAt;
    /**
     * Об'єкт, що описує події, про які потрібно сповіщати.
     * @type {WebhookEventsObject|undefined}
     */
    this.events = events == null ? events : toModel(events, WebhookEventsObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookObject}
   */
  static fromJSON(data) {
    return new WebhookObject({
      id: data["id"],
      url: data["url"],
      status: data["status"],
      eventFormat: data["event_format"],
      deliveryInfo: data["delivery_info"],
      singleEvent: data["single_event"],
      maxParallel: data["max_parallel"],
      updatedAt: data["updated_at"],
      events: data["events"] == null ? undefined : toModel(data["events"], WebhookEventsObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
      "url": this.url,
      "status": this.status,
      "event_format": this.eventFormat,
      "delivery_info": this.deliveryInfo,
      "single_event": this.singleEvent,
      "max_parallel": this.maxParallel,
      "updated_at": this.updatedAt,
      "events": this.events == null ? undefined : toPlain(this.events),
    });
  }
}

/** Опис формату webhook. */
export class WebhookCallback {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.auth] MD5-хеш рядкового тіла повідомлення, у якому значення auth замінено на api_key користувача/проєкту, чий обробник викликається. За допомогою цього отримувач сповіщення може як провести автентифікацію, так і перевірити цілісність сповіщення.
   * @param {WebhookCallbackEventsByUserItem[]} [data.eventsByUser] Масив з одним елементом, що містить дані про події користувача/проєкту.
   */
  constructor({ auth, eventsByUser } = {}) {
    /**
     * MD5-хеш рядкового тіла повідомлення, у якому значення auth замінено на api_key користувача/проєкту,
     * чий обробник викликається. За допомогою цього отримувач сповіщення може як провести автентифікацію,
     * так і перевірити цілісність сповіщення.
     * @type {string|undefined}
     */
    this.auth = auth;
    /**
     * Масив з одним елементом, що містить дані про події користувача/проєкту.
     * @type {WebhookCallbackEventsByUserItem[]|undefined}
     */
    this.eventsByUser = eventsByUser == null ? eventsByUser : eventsByUser.map((item0) => toModel(item0, WebhookCallbackEventsByUserItem));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookCallback}
   */
  static fromJSON(data) {
    return new WebhookCallback({
      auth: data["auth"],
      eventsByUser: data["events_by_user"] == null ? undefined : data["events_by_user"].map((item0) => toModel(item0, WebhookCallbackEventsByUserItem)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "auth": this.auth,
      "events_by_user": this.eventsByUser == null ? undefined : this.eventsByUser.map((item0) => toPlain(item0)),
    });
  }
}

/** WebhookCallbackEventsByUserItem */
export class WebhookCallbackEventsByUserItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.userId] Унікальний ідентифікатор користувача.
   * @param {string} [data.projectId] Ідентифікатор проєкту, присутній, якщо webhook було зареєстровано за допомогою API-ключа проєкту.
   * @param {string} [data.projectName] Назва проєкту, присутня, якщо webhook було зареєстровано за допомогою API-ключа проєкту.
   * @param {WebhookCallbackEventsByUserItemEventsItem[]} [data.events] Масив подій, про які сповіщає виклик webhook.
   */
  constructor({ userId, projectId, projectName, events } = {}) {
    /**
     * Унікальний ідентифікатор користувача.
     * @type {number|undefined}
     */
    this.userId = userId;
    /**
     * Ідентифікатор проєкту, присутній, якщо webhook було зареєстровано за допомогою API-ключа проєкту.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Назва проєкту, присутня, якщо webhook було зареєстровано за допомогою API-ключа проєкту.
     * @type {string|undefined}
     */
    this.projectName = projectName;
    /**
     * Масив подій, про які сповіщає виклик webhook.
     * @type {WebhookCallbackEventsByUserItemEventsItem[]|undefined}
     */
    this.events = events == null ? events : events.map((item0) => toModel(item0, WebhookCallbackEventsByUserItemEventsItem));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookCallbackEventsByUserItem}
   */
  static fromJSON(data) {
    return new WebhookCallbackEventsByUserItem({
      userId: data["user_id"],
      projectId: data["project_id"],
      projectName: data["project_name"],
      events: data["events"] == null ? undefined : data["events"].map((item0) => toModel(item0, WebhookCallbackEventsByUserItemEventsItem)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "user_id": this.userId,
      "project_id": this.projectId,
      "project_name": this.projectName,
      "events": this.events == null ? undefined : this.events.map((item0) => toPlain(item0)),
    });
  }
}

/** WebhookCallbackEventsByUserItemEventsItem */
export class WebhookCallbackEventsByUserItemEventsItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {"transactional_email_status"|"transactional_spam_block"} [data.eventName] Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або "transactional_spam_block".
   * @param {WebhookCallbackEventsByUserItemEventsItemEventData} [data.eventData] Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі можливі властивості, спочатку для події "transactional_email_status", потім для події "transactional_spam_block".
   */
  constructor({ eventName, eventData } = {}) {
    /**
     * Тип даних, що містяться в об'єкті event_data. Або "transactional_email_status", або
     * "transactional_spam_block".
     * @type {"transactional_email_status"|"transactional_spam_block"|undefined}
     */
    this.eventName = eventName;
    /**
     * Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі
     * можливі властивості, спочатку для події "transactional_email_status", потім для події
     * "transactional_spam_block".
     * @type {WebhookCallbackEventsByUserItemEventsItemEventData|undefined}
     */
    this.eventData = eventData == null ? eventData : toModel(eventData, WebhookCallbackEventsByUserItemEventsItemEventData);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookCallbackEventsByUserItemEventsItem}
   */
  static fromJSON(data) {
    return new WebhookCallbackEventsByUserItemEventsItem({
      eventName: data["event_name"],
      eventData: data["event_data"] == null ? undefined : toModel(data["event_data"], WebhookCallbackEventsByUserItemEventsItemEventData),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "event_name": this.eventName,
      "event_data": this.eventData == null ? undefined : toPlain(this.eventData),
    });
  }
}

/**
 * Об'єкт з різними властивостями події, що залежать від поля "event_name". Нижче перелічено всі
 * можливі властивості, спочатку для події "transactional_email_status", потім для події
 * "transactional_spam_block".
 */
export class WebhookCallbackEventsByUserItemEventsItemEventData {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.jobId] Ідентифікатор завдання, раніше повернутий методом [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send). Присутній лише якщо event_name="transactional_email_status".
   * @param {Record<string, string>} [data.metadata] Метадані, раніше передані методом [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send) у полі recipients.metadata або global_metadata. Присутні лише якщо event_name="transactional_email_status".
   * @param {string} [data.email] Email, на який було здійснено надсилання. Присутній лише якщо event_name="transactional_email_status".
   * @param {"sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam"} [data.status] Статус доставки листа. Присутній лише якщо event_name="transactional_email_status". Набуває одного з таких значень:  __accepted__ — повідомлення прийнято, але ще не надіслано.  __sent__ — повідомлення надіслано, але ще не доставлено.  __delivered__ — повідомлення доставлено. Може змінитися на “opened”, “clicked”, “unsubscribed”, “subscribed” або “spam”.  __opened__ — повідомлення доставлено й зареєстровано його прочитання. Може змінитися на “clicked”, “unsubscribed”, “subscribed” або “spam”.  __clicked__ — повідомлення доставлено, прочитано, було зареєстровано перехід за одним з посилань у листі. Може змінитися на “unsubscribed”, “subscribed” або “spam”.  __unsubscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався за посиланням у листі. Може змінитися на “subscribed”.  __subscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався, а потім знову підписався за посиланням у листі. Може змінитися на “unsubscribed”.  __soft_bounced__ — тимчасова недоставка повідомлення. AllyMailer продовжує спроби доставки протягом 2 діб. У разі успішної доставки лист перейде у статус “delivered”, у разі неуспішної — у “hard_bounced”.  __hard_bounced__ — доставка не вдалася, спроб доставки більше не буде. Статус остаточний. Можливих причин невдалої доставки безліч, для їх аналізу можна використати текст відповіді SMTP-сервера з поля delivery_info.destination_response або нашу внутрішню класифікацію помилок з поля delivery_info.delivery_status.  __spam__ — повідомлення доставлено, але позначено як “спам” отримувачем. Статус остаточний. Ось деякі домени, від яких AllyMailer може отримати й обробити скаргу про спам (використовуючи технологію FBL): mail.ru, msn.com, outlook.com, hotmail.com, live.com, ukr.net, yahoo.com, aol.com.
   * @param {string} [data.eventTime] Дата й час події в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо event_name="transactional_email_status".
   * @param {string} [data.url] URL у разі статусів "opened" і "clicked". Присутній лише якщо event_name="transactional_email_status".
   * @param {WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo} [data.deliveryInfo] Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
   * @param {string} [data.blockTime] Дата й час спам-блока в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо event_name="transactional_spam_block".
   * @param {"one_smtp"|"all_smtp"} [data.blockType] Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише якщо event_name="transactional_spam_block".
   * @param {string} [data.domain] Домен, що заблокував надсилання. Властивість присутня лише якщо event_name="transactional_spam_block".
   * @param {number} [data.sMTPBlocksCount] Кількість заблокованих вихідних SMTP. Властивість присутня лише якщо event_name="transactional_spam_block".
   * @param {"blocked"|"unblocked"} [data.domainStatus] Це подія блокування чи розблокування. Властивість присутня лише якщо event_name="transactional_spam_block".
   */
  constructor({ jobId, metadata, email, status, eventTime, url, deliveryInfo, blockTime, blockType, domain, sMTPBlocksCount, domainStatus } = {}) {
    /**
     * Ідентифікатор завдання, раніше повернутий методом
     * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send). Присутній лише якщо
     * event_name="transactional_email_status".
     * @type {string|undefined}
     */
    this.jobId = jobId;
    /**
     * Метадані, раніше передані методом
     * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send) у полі recipients.metadata
     * або global_metadata. Присутні лише якщо event_name="transactional_email_status".
     * @type {Record<string, string>|undefined}
     */
    this.metadata = metadata;
    /**
     * Email, на який було здійснено надсилання. Присутній лише якщо
     * event_name="transactional_email_status".
     * @type {string|undefined}
     */
    this.email = email;
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
     * @type {"sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam"|undefined}
     */
    this.status = status;
    /**
     * Дата й час події в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
     * event_name="transactional_email_status".
     * @type {string|undefined}
     */
    this.eventTime = eventTime;
    /**
     * URL у разі статусів "opened" і "clicked". Присутній лише якщо
     * event_name="transactional_email_status".
     * @type {string|undefined}
     */
    this.url = url;
    /**
     * Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час
     * встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
     * @type {WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo|undefined}
     */
    this.deliveryInfo = deliveryInfo == null ? deliveryInfo : toModel(deliveryInfo, WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo);
    /**
     * Дата й час спам-блока в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". Присутній лише якщо
     * event_name="transactional_spam_block".
     * @type {string|undefined}
     */
    this.blockTime = blockTime;
    /**
     * Тип спам-блока — заблоковано або один відправляючий SMTP, або одразу багато. У разі блокування
     * одиночного SMTP із загального пулу AllyMailer пробуватиме ще декілька. Властивість присутня лише
     * якщо event_name="transactional_spam_block".
     * @type {"one_smtp"|"all_smtp"|undefined}
     */
    this.blockType = blockType;
    /**
     * Домен, що заблокував надсилання. Властивість присутня лише якщо
     * event_name="transactional_spam_block".
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Кількість заблокованих вихідних SMTP. Властивість присутня лише якщо
     * event_name="transactional_spam_block".
     * @type {number|undefined}
     */
    this.sMTPBlocksCount = sMTPBlocksCount;
    /**
     * Це подія блокування чи розблокування. Властивість присутня лише якщо
     * event_name="transactional_spam_block".
     * @type {"blocked"|"unblocked"|undefined}
     */
    this.domainStatus = domainStatus;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookCallbackEventsByUserItemEventsItemEventData}
   */
  static fromJSON(data) {
    return new WebhookCallbackEventsByUserItemEventsItemEventData({
      jobId: data["job_id"],
      metadata: data["metadata"],
      email: data["email"],
      status: data["status"],
      eventTime: data["event_time"],
      url: data["url"],
      deliveryInfo: data["delivery_info"] == null ? undefined : toModel(data["delivery_info"], WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo),
      blockTime: data["block_time"],
      blockType: data["block_type"],
      domain: data["domain"],
      sMTPBlocksCount: data["SMTP_blocks_count"],
      domainStatus: data["domain_status"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "job_id": this.jobId,
      "metadata": this.metadata,
      "email": this.email,
      "status": this.status,
      "event_time": this.eventTime,
      "url": this.url,
      "delivery_info": this.deliveryInfo == null ? undefined : toPlain(this.deliveryInfo),
      "block_time": this.blockTime,
      "block_type": this.blockType,
      "domain": this.domain,
      "SMTP_blocks_count": this.sMTPBlocksCount,
      "domain_status": this.domainStatus,
    });
  }
}

/**
 * Об'єкт з додатковою інформацією про доставку. Присутній лише якщо властивість delivery_info під час
 * встановлення webhook дорівнювала 1 і якщо event_name="transactional_email_status".
 */
export class WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.deliveryStatus] Внутрішній детальний статус доставки AllyMailer. Ось деякі з можливих статусів:  __err_user_unknown__ -- адреса не існує (і невідомо, чи існувала колись);  __err_user_inactive__ -- адреса не використовується;  __err_will_retry__ -- лист було тимчасово відхилено, пізніше буде здійснено повторну спробу доставки;  __err_mailbox_discarded__ -- адресу видалено (тобто колись існувала, але тепер її немає);  __err_mailbox_full__ -- поштова скринька переповнена;  __err_spam_rejected__ -- лист відхилено як спам;  __err_blacklisted__ -- лист було відхилено через наявність IP-адреси або домену відправника в якомусь із чорних списків;  __err_too_large__ -- на думку сервера отримувача, лист перевищує допустимий розмір;  __err_unsubscribed__ -- адресат раніше відписався від ваших розсилок;  __err_unreachable__ -- адресу позначено як постійно недоступну через багаторазові помилки доставки на цю адресу;  __err_skip_letter__ -- надсилання скасовано, оскільки email-адреса тимчасово недоступна;  __err_domain_inactive__ -- домен не приймає пошту або не існує;  __err_destination_misconfigured__ -- домен не приймає пошту через неправильне налаштування на боці отримувача, причому відповідь сервера містить інформацію про усувну причину (наприклад, використовується непрацюючий блеклист тощо);  __err_delivery_failed__ -- доставка не вдалася з інших причин;  __err_spam_skipped__ -- надсилання скасовано через блокування розсилки як спаму;  __err_lost__ -- лист не було надіслано через неузгодженість його частин, або його було втрачено через збій на нашому боці. Відправник має повторно надіслати лист самостійно, оскільки оригінал не зберігся;  Ми залишаємо за собою право змінювати й додавати внутрішні статуси, тому решту використовуваних наразі статусів перелічимо лише довідково, без пояснень: ok_accepted, ok_sent, ok_delivered, ok_read, ok_link_visited, ok_unsubscribed, ok_resubscribed, ok_spam_folder, ok_fbl, not_sent, skip_dup_unreachable, skip_dup_temp_unreachable, skip_dup_mailbox_full, err_spam_removed, err_resend, err_unknown, err_retry_letter, err_src_invalid, err_dest_invalid, err_not_available, err_internal, err_no_dns, err_no_smtp, err_giveup.
   * @param {string} [data.destinationResponse] Відповідь SMTP-сервера.
   * @param {string} [data.userAgent] Рядок user agent отримувача. Присутній лише якщо вдалося його визначити, для статусів "clicked" і "opened".
   * @param {"desktop"|"mobile"|"tablet"|"other"|"unknown"} [data.deviceType] Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened"; дорівнює "unknown", якщо тип пристрою визначити не вдалося.
   * @param {string} [data.deviceBrand] Марка пристрою отримувача, визначена за user agent. Присутня для статусів "clicked" і "opened", якщо її вдалося визначити. Для device_type "mobile" і "tablet" присутня завжди та дорівнює "unknown", якщо марку визначити не вдалося.
   * @param {string} [data.osName] Назва операційної системи пристрою отримувача, визначена за user agent. Присутня для статусів "clicked" і "opened"; дорівнює "unknown", якщо ОС визначити не вдалося.
   * @param {string} [data.browserName] Назва браузера, у якому було відкрито лист, визначена за user agent. Присутня для статусів "clicked" і "opened", лише якщо було визначено браузер, тому ніколи не надходить разом з email_client_name.
   * @param {string} [data.emailClientName] Назва поштового клієнта, у якому було відкрито лист, визначена за user agent. Присутня для статусів "clicked" і "opened", лише якщо було визначено поштовий клієнт, тому ніколи не надходить разом з browser_name.
   * @param {"human"|"machine"|"protected"|"unknown"} [data.trafficType] Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected" — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine); "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
   * @param {string} [data.ip] IP-адреса отримувача. Присутня лише якщо вдалося її визначити, для статусів "clicked" і "opened".
   * @param {string} [data.countryCode] ISO 3166-1 alpha-2 код країни, визначений за IP-адресою отримувача. Присутній для статусів "clicked" і "opened".
   * @param {string} [data.country] Країна, визначена за IP-адресою отримувача. Присутня для статусів "clicked" і "opened".
   * @param {string} [data.city] Місто, визначене за IP-адресою отримувача. Присутнє для статусів "clicked" і "opened".
   * @param {string} [data.senderIp] IP-адреса SMTP-сервера, з якого було надіслано лист. Присутня лише для статусів "delivered", "soft_bounced" і "hard_bounced", якщо доступна.
   */
  constructor({ deliveryStatus, destinationResponse, userAgent, deviceType, deviceBrand, osName, browserName, emailClientName, trafficType, ip, countryCode, country, city, senderIp } = {}) {
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
     * @type {string|undefined}
     */
    this.deliveryStatus = deliveryStatus;
    /**
     * Відповідь SMTP-сервера.
     * @type {string|undefined}
     */
    this.destinationResponse = destinationResponse;
    /**
     * Рядок user agent отримувача. Присутній лише якщо вдалося його визначити, для статусів "clicked" і
     * "opened".
     * @type {string|undefined}
     */
    this.userAgent = userAgent;
    /**
     * Тип пристрою отримувача, визначений за user agent. Присутній для статусів "clicked" і "opened";
     * дорівнює "unknown", якщо тип пристрою визначити не вдалося.
     * @type {"desktop"|"mobile"|"tablet"|"other"|"unknown"|undefined}
     */
    this.deviceType = deviceType;
    /**
     * Марка пристрою отримувача, визначена за user agent. Присутня для статусів "clicked" і "opened", якщо
     * її вдалося визначити. Для device_type "mobile" і "tablet" присутня завжди та дорівнює "unknown",
     * якщо марку визначити не вдалося.
     * @type {string|undefined}
     */
    this.deviceBrand = deviceBrand;
    /**
     * Назва операційної системи пристрою отримувача, визначена за user agent. Присутня для статусів
     * "clicked" і "opened"; дорівнює "unknown", якщо ОС визначити не вдалося.
     * @type {string|undefined}
     */
    this.osName = osName;
    /**
     * Назва браузера, у якому було відкрито лист, визначена за user agent. Присутня для статусів "clicked"
     * і "opened", лише якщо було визначено браузер, тому ніколи не надходить разом з email_client_name.
     * @type {string|undefined}
     */
    this.browserName = browserName;
    /**
     * Назва поштового клієнта, у якому було відкрито лист, визначена за user agent. Присутня для статусів
     * "clicked" і "opened", лише якщо було визначено поштовий клієнт, тому ніколи не надходить разом з
     * browser_name.
     * @type {string|undefined}
     */
    this.emailClientName = emailClientName;
    /**
     * Якість трафіку для статусів "opened" і "clicked". "human" — розпізнано звичайний браузер або
     * поштовий клієнт без машинних ознак; "machine" — бот, сканер посилань або проксі безпеки; "protected"
     * — механізм приватності скриньки/ОС, участь людини підтвердити не можна (Apple Mail Privacy
     * Protection / iCloud Private Relay, Gmail Image Proxy; Apple MPP — це protected, не machine);
     * "unknown" — User-Agent відсутній, пошкоджений або не розпізнаний.
     * @type {"human"|"machine"|"protected"|"unknown"|undefined}
     */
    this.trafficType = trafficType;
    /**
     * IP-адреса отримувача. Присутня лише якщо вдалося її визначити, для статусів "clicked" і "opened".
     * @type {string|undefined}
     */
    this.ip = ip;
    /**
     * ISO 3166-1 alpha-2 код країни, визначений за IP-адресою отримувача. Присутній для статусів "clicked"
     * і "opened".
     * @type {string|undefined}
     */
    this.countryCode = countryCode;
    /**
     * Країна, визначена за IP-адресою отримувача. Присутня для статусів "clicked" і "opened".
     * @type {string|undefined}
     */
    this.country = country;
    /**
     * Місто, визначене за IP-адресою отримувача. Присутнє для статусів "clicked" і "opened".
     * @type {string|undefined}
     */
    this.city = city;
    /**
     * IP-адреса SMTP-сервера, з якого було надіслано лист. Присутня лише для статусів "delivered",
     * "soft_bounced" і "hard_bounced", якщо доступна.
     * @type {string|undefined}
     */
    this.senderIp = senderIp;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo}
   */
  static fromJSON(data) {
    return new WebhookCallbackEventsByUserItemEventsItemEventDataDeliveryInfo({
      deliveryStatus: data["delivery_status"],
      destinationResponse: data["destination_response"],
      userAgent: data["user_agent"],
      deviceType: data["device_type"],
      deviceBrand: data["device_brand"],
      osName: data["os_name"],
      browserName: data["browser_name"],
      emailClientName: data["email_client_name"],
      trafficType: data["traffic_type"],
      ip: data["ip"],
      countryCode: data["country_code"],
      country: data["country"],
      city: data["city"],
      senderIp: data["sender_ip"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "delivery_status": this.deliveryStatus,
      "destination_response": this.destinationResponse,
      "user_agent": this.userAgent,
      "device_type": this.deviceType,
      "device_brand": this.deviceBrand,
      "os_name": this.osName,
      "browser_name": this.browserName,
      "email_client_name": this.emailClientName,
      "traffic_type": this.trafficType,
      "ip": this.ip,
      "country_code": this.countryCode,
      "country": this.country,
      "city": this.city,
      "sender_ip": this.senderIp,
    });
  }
}

/** WebhookGetRequest */
export class WebhookGetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.url URL webhook.
   */
  constructor({ url } = {}) {
    /**
     * URL webhook.
     * @type {string|undefined}
     */
    this.url = url;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookGetRequest}
   */
  static fromJSON(data) {
    return new WebhookGetRequest({
      url: data["url"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "url": this.url,
    });
  }
}

/** WebhookGetResponse */
export class WebhookGetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {WebhookObject} [data.object] Об'єкт з усіма властивостями webhook.
   */
  constructor({ status, object } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Об'єкт з усіма властивостями webhook.
     * @type {WebhookObject|undefined}
     */
    this.object = object == null ? object : toModel(object, WebhookObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookGetResponse}
   */
  static fromJSON(data) {
    return new WebhookGetResponse({
      status: data["status"],
      object: data["object"] == null ? undefined : toModel(data["object"], WebhookObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "object": this.object == null ? undefined : toPlain(this.object),
    });
  }
}

/** WebhookListRequest */
export class WebhookListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.limit] Максимальна кількість webhook, що повертаються за один виклик. Рекомендується 50.
   * @param {number} [data.offset] Індекс першого webhook зі списку, що повертається, рахуючи з нуля.
   */
  constructor({ limit, offset } = {}) {
    /**
     * Максимальна кількість webhook, що повертаються за один виклик. Рекомендується 50.
     * @type {number|undefined}
     */
    this.limit = limit;
    /**
     * Індекс першого webhook зі списку, що повертається, рахуючи з нуля.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.offset = offset;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookListRequest}
   */
  static fromJSON(data) {
    return new WebhookListRequest({
      limit: data["limit"],
      offset: data["offset"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "limit": this.limit,
      "offset": this.offset,
    });
  }
}

/** WebhookListResponse */
export class WebhookListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {WebhookObject[]} [data.objects] Масив об'єктів з даними про webhook.
   */
  constructor({ status, objects } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів з даними про webhook.
     * @type {WebhookObject[]|undefined}
     */
    this.objects = objects == null ? objects : objects.map((item0) => toModel(item0, WebhookObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookListResponse}
   */
  static fromJSON(data) {
    return new WebhookListResponse({
      status: data["status"],
      objects: data["objects"] == null ? undefined : data["objects"].map((item0) => toModel(item0, WebhookObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "objects": this.objects == null ? undefined : this.objects.map((item0) => toPlain(item0)),
    });
  }
}

/** WebhookDeleteRequest */
export class WebhookDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.url URL webhook.
   */
  constructor({ url } = {}) {
    /**
     * URL webhook.
     * @type {string|undefined}
     */
    this.url = url;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {WebhookDeleteRequest}
   */
  static fromJSON(data) {
    return new WebhookDeleteRequest({
      url: data["url"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "url": this.url,
    });
  }
}
