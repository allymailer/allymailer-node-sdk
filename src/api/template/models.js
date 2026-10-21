// Models of the Template section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";
import { AttachmentsArrayItem, BodyObject, HeadersObject, InlineAttachmentsArrayItem } from "../../common/models.js";

/**
 * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
 * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
 */
export const EditorType = Object.freeze({
  HTML: "html",
  VISUAL: "visual",
});

/** Об'єкт з усіма властивостями шаблону. */
export class TemplateSetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {TemplateObject} data.template Об'єкт, що містить властивості шаблону.
   */
  constructor({ template } = {}) {
    /**
     * Об'єкт, що містить властивості шаблону.
     * @type {TemplateObject|undefined}
     */
    this.template = template == null ? template : toModel(template, TemplateObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateSetRequest}
   */
  static fromJSON(data) {
    return new TemplateSetRequest({
      template: data["template"] == null ? undefined : toModel(data["template"], TemplateObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "template": this.template == null ? undefined : toPlain(this.template),
    });
  }
}

/** Об'єкт, що містить властивості шаблону. */
export class TemplateObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.id] Унікальний ідентифікатор шаблону. Якщо вказано, система спробує знайти шаблон із указаним id і відредагувати його. Якщо не задано, буде створено новий шаблон.
   * @param {string} data.name Назва шаблону.
   * @param {"html"|"visual"} [data.editorType] Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   * @param {"simple"|"velocity"|"liquid"|"none"} [data.templateEngine] Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
   * @param {Record<string, string>} [data.globalSubstitutions] Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з об'єкта "substitutions". Підстановки працюють у параметрах:  - body.html - body.plaintext - body.amp - subject - from_name - options.unsubscribe_url Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може бути лише літера, використання пробілів не допускається.
   * @param {Record<string, string>} [data.globalMetadata] Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа: 1024 символи. Метадані передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні значення будуть прирівняні до '0'
   * @param {BodyObject} [data.body] Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина має бути присутня обов'язково.
   * @param {string} [data.subject] Тема листа.
   * @param {string} data.fromEmail Email-адреса відправника.
   * @param {string} [data.fromName] Ім'я відправника.
   * @param {string} [data.replyTo] Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
   * @param {string} [data.replyToName] Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише цей email, але й ім'я)
   * @param {number} [data.trackLinks] 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для використання track_links = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {number} [data.trackRead] 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для використання track_read = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {HeadersObject} [data.headers] Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language, X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-", але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe, List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
   * @param {AttachmentsArrayItem[]} [data.attachments] Необов'язковий масив вкладень.
   * @param {InlineAttachmentsArrayItem[]} [data.inlineAttachments] Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження їх за посиланням.
   */
  constructor({ id, name, editorType, templateEngine, globalSubstitutions, globalMetadata, body, subject, fromEmail, fromName, replyTo, replyToName, trackLinks, trackRead, headers, attachments, inlineAttachments } = {}) {
    /**
     * Унікальний ідентифікатор шаблону. Якщо вказано, система спробує знайти шаблон із указаним id і
     * відредагувати його. Якщо не задано, буде створено новий шаблон.
     * @type {string|undefined}
     */
    this.id = id;
    /**
     * Назва шаблону.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
     * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
     * @type {"html"|"visual"|undefined}
     */
    this.editorType = editorType;
    /**
     * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або
     * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
     * @type {"simple"|"velocity"|"liquid"|"none"|undefined}
     */
    this.templateEngine = templateEngine;
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
     * @type {Record<string, string>|undefined}
     */
    this.globalSubstitutions = globalSubstitutions;
    /**
     * Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна
     * кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа:
     * 1024 символи. Метадані передаються під час виклику
     * [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну
     * розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного
     * десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні
     * значення будуть прирівняні до '0'
     * @type {Record<string, string>|undefined}
     */
    this.globalMetadata = globalMetadata;
    /**
     * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
     * має бути присутня обов'язково.
     * @type {BodyObject|undefined}
     */
    this.body = body == null ? body : toModel(body, BodyObject);
    /**
     * Тема листа.
     * @type {string|undefined}
     */
    this.subject = subject;
    /**
     * Email-адреса відправника.
     * @type {string|undefined}
     */
    this.fromEmail = fromEmail;
    /**
     * Ім'я відправника.
     * @type {string|undefined}
     */
    this.fromName = fromName;
    /**
     * Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
     * @type {string|undefined}
     */
    this.replyTo = replyTo;
    /**
     * Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише
     * цей email, але й ім'я)
     * @type {string|undefined}
     */
    this.replyToName = replyToName;
    /**
     * 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для
     * використання track_links = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackLinks = trackLinks;
    /**
     * 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для
     * використання track_read = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackRead = trackRead;
    /**
     * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
     * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
     * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
     * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
     * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
     * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
     * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
     * @type {HeadersObject|undefined}
     */
    this.headers = headers == null ? headers : toModel(headers, HeadersObject);
    /**
     * Необов'язковий масив вкладень.
     * @type {AttachmentsArrayItem[]|undefined}
     */
    this.attachments = attachments == null ? attachments : attachments.map((item0) => toModel(item0, AttachmentsArrayItem));
    /**
     * Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження
     * їх за посиланням.
     * @type {InlineAttachmentsArrayItem[]|undefined}
     */
    this.inlineAttachments = inlineAttachments == null ? inlineAttachments : inlineAttachments.map((item0) => toModel(item0, InlineAttachmentsArrayItem));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateObject}
   */
  static fromJSON(data) {
    return new TemplateObject({
      id: data["id"],
      name: data["name"],
      editorType: data["editor_type"],
      templateEngine: data["template_engine"],
      globalSubstitutions: data["global_substitutions"],
      globalMetadata: data["global_metadata"],
      body: data["body"] == null ? undefined : toModel(data["body"], BodyObject),
      subject: data["subject"],
      fromEmail: data["from_email"],
      fromName: data["from_name"],
      replyTo: data["reply_to"],
      replyToName: data["reply_to_name"],
      trackLinks: data["track_links"],
      trackRead: data["track_read"],
      headers: data["headers"] == null ? undefined : toModel(data["headers"], HeadersObject),
      attachments: data["attachments"] == null ? undefined : data["attachments"].map((item0) => toModel(item0, AttachmentsArrayItem)),
      inlineAttachments: data["inline_attachments"] == null ? undefined : data["inline_attachments"].map((item0) => toModel(item0, InlineAttachmentsArrayItem)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
      "name": this.name,
      "editor_type": this.editorType,
      "template_engine": this.templateEngine,
      "global_substitutions": this.globalSubstitutions,
      "global_metadata": this.globalMetadata,
      "body": this.body == null ? undefined : toPlain(this.body),
      "subject": this.subject,
      "from_email": this.fromEmail,
      "from_name": this.fromName,
      "reply_to": this.replyTo,
      "reply_to_name": this.replyToName,
      "track_links": this.trackLinks,
      "track_read": this.trackRead,
      "headers": this.headers == null ? undefined : toPlain(this.headers),
      "attachments": this.attachments == null ? undefined : this.attachments.map((item0) => toPlain(item0)),
      "inline_attachments": this.inlineAttachments == null ? undefined : this.inlineAttachments.map((item0) => toPlain(item0)),
    });
  }
}

/** TemplateSetResponse */
export class TemplateSetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {TemplateObject} [data.template] Об'єкт, що містить властивості шаблону.
   */
  constructor({ status, template } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Об'єкт, що містить властивості шаблону.
     * @type {TemplateObject|undefined}
     */
    this.template = template == null ? template : toModel(template, TemplateObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateSetResponse}
   */
  static fromJSON(data) {
    return new TemplateSetResponse({
      status: data["status"],
      template: data["template"] == null ? undefined : toModel(data["template"], TemplateObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "template": this.template == null ? undefined : toPlain(this.template),
    });
  }
}

/** TemplateGetRequest */
export class TemplateGetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.id Ідентифікатор шаблону.
   */
  constructor({ id } = {}) {
    /**
     * Ідентифікатор шаблону.
     * @type {string|undefined}
     */
    this.id = id;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateGetRequest}
   */
  static fromJSON(data) {
    return new TemplateGetRequest({
      id: data["id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
    });
  }
}

/** TemplateGetResponse */
export class TemplateGetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {TemplateObject} [data.template] Об'єкт, що містить властивості шаблону.
   */
  constructor({ status, template } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Об'єкт, що містить властивості шаблону.
     * @type {TemplateObject|undefined}
     */
    this.template = template == null ? template : toModel(template, TemplateObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateGetResponse}
   */
  static fromJSON(data) {
    return new TemplateGetResponse({
      status: data["status"],
      template: data["template"] == null ? undefined : toModel(data["template"], TemplateObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "template": this.template == null ? undefined : toPlain(this.template),
    });
  }
}

/** TemplateListRequest */
export class TemplateListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.limit] Максимальна кількість шаблонів, що повертаються, за замовчуванням 50.
   * @param {number} [data.offset] Індекс першого шаблону зі списку, що повертається, рахуючи з нуля.
   */
  constructor({ limit, offset } = {}) {
    /**
     * Максимальна кількість шаблонів, що повертаються, за замовчуванням 50.
     * За замовчуванням: `50`.
     * @type {number|undefined}
     */
    this.limit = limit;
    /**
     * Індекс першого шаблону зі списку, що повертається, рахуючи з нуля.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.offset = offset;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateListRequest}
   */
  static fromJSON(data) {
    return new TemplateListRequest({
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

/** TemplateListResponse */
export class TemplateListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {TemplateListObject[]} [data.templates] Масив об'єктів-шаблонів.
   */
  constructor({ status, templates } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів-шаблонів.
     * @type {TemplateListObject[]|undefined}
     */
    this.templates = templates == null ? templates : templates.map((item0) => toModel(item0, TemplateListObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateListResponse}
   */
  static fromJSON(data) {
    return new TemplateListResponse({
      status: data["status"],
      templates: data["templates"] == null ? undefined : data["templates"].map((item0) => toModel(item0, TemplateListObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "templates": this.templates == null ? undefined : this.templates.map((item0) => toPlain(item0)),
    });
  }
}

/** TemplateListObject */
export class TemplateListObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.id] Унікальний ідентифікатор шаблону.
   * @param {string} [data.name] Назва шаблону.
   * @param {"html"|"visual"} [data.editorType] Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
   * @param {"simple"|"velocity"|"liquid"|"none"} [data.templateEngine] Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
   * @param {Record<string, string>} [data.globalSubstitutions] Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з об'єкта "substitutions". Підстановки працюють у параметрах:  - body.html - body.plaintext - body.amp - subject - from_name - options.unsubscribe_url Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може бути лише літера, використання пробілів не допускається.
   * @param {Record<string, string>} [data.globalMetadata] Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа: 1024 символи. Метадані передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні значення будуть прирівняні до '0'
   * @param {BodyObject} [data.body] Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина має бути присутня обов'язково.
   * @param {string} [data.subject] Тема листа.
   * @param {string} [data.fromEmail] Email-адреса відправника.
   * @param {string} [data.fromName] Ім'я відправника.
   * @param {string} [data.replyTo] Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
   * @param {string} [data.replyToName] Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише цей email, але й ім'я)
   * @param {number} [data.trackLinks] 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для використання track_links = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {number} [data.trackRead] 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для використання track_read = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {HeadersObject} [data.headers] Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language, X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-", але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe, List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
   * @param {AttachmentsArrayItem[]} [data.attachments] Необов'язковий масив вкладень.
   * @param {InlineAttachmentsArrayItem[]} [data.inlineAttachments] Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження їх за посиланням.
   * @param {string} [data.created] Час створення шаблону в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс"
   * @param {number} [data.userId] Унікальний ідентифікатор користувача.
   * @param {string} [data.projectId] Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
   * @param {string} [data.projectName] Назва проєкту, унікальна в межах облікового запису користувача.
   */
  constructor({ id, name, editorType, templateEngine, globalSubstitutions, globalMetadata, body, subject, fromEmail, fromName, replyTo, replyToName, trackLinks, trackRead, headers, attachments, inlineAttachments, created, userId, projectId, projectName } = {}) {
    /**
     * Унікальний ідентифікатор шаблону.
     * @type {string|undefined}
     */
    this.id = id;
    /**
     * Назва шаблону.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Тип редактора шаблону у вебінтерфейсі, "html" або "visual". За замовчуванням — "html". Створення
     * шаблонів із типом редактора "visual" можливе лише через вебінтерфейс.
     * @type {"html"|"visual"|undefined}
     */
    this.editorType = editorType;
    /**
     * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або
     * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
     * @type {"simple"|"velocity"|"liquid"|"none"|undefined}
     */
    this.templateEngine = templateEngine;
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
     * @type {Record<string, string>|undefined}
     */
    this.globalSubstitutions = globalSubstitutions;
    /**
     * Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна
     * кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа:
     * 1024 символи. Метадані передаються під час виклику
     * [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну
     * розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного
     * десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні
     * значення будуть прирівняні до '0'
     * @type {Record<string, string>|undefined}
     */
    this.globalMetadata = globalMetadata;
    /**
     * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
     * має бути присутня обов'язково.
     * @type {BodyObject|undefined}
     */
    this.body = body == null ? body : toModel(body, BodyObject);
    /**
     * Тема листа.
     * @type {string|undefined}
     */
    this.subject = subject;
    /**
     * Email-адреса відправника.
     * @type {string|undefined}
     */
    this.fromEmail = fromEmail;
    /**
     * Ім'я відправника.
     * @type {string|undefined}
     */
    this.fromName = fromName;
    /**
     * Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
     * @type {string|undefined}
     */
    this.replyTo = replyTo;
    /**
     * Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише
     * цей email, але й ім'я)
     * @type {string|undefined}
     */
    this.replyToName = replyToName;
    /**
     * 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для
     * використання track_links = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackLinks = trackLinks;
    /**
     * 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для
     * використання track_read = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackRead = trackRead;
    /**
     * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
     * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
     * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
     * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
     * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
     * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
     * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
     * @type {HeadersObject|undefined}
     */
    this.headers = headers == null ? headers : toModel(headers, HeadersObject);
    /**
     * Необов'язковий масив вкладень.
     * @type {AttachmentsArrayItem[]|undefined}
     */
    this.attachments = attachments == null ? attachments : attachments.map((item0) => toModel(item0, AttachmentsArrayItem));
    /**
     * Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження
     * їх за посиланням.
     * @type {InlineAttachmentsArrayItem[]|undefined}
     */
    this.inlineAttachments = inlineAttachments == null ? inlineAttachments : inlineAttachments.map((item0) => toModel(item0, InlineAttachmentsArrayItem));
    /**
     * Час створення шаблону в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс"
     * @type {string|undefined}
     */
    this.created = created;
    /**
     * Унікальний ідентифікатор користувача.
     * @type {number|undefined}
     */
    this.userId = userId;
    /**
     * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Назва проєкту, унікальна в межах облікового запису користувача.
     * @type {string|undefined}
     */
    this.projectName = projectName;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateListObject}
   */
  static fromJSON(data) {
    return new TemplateListObject({
      id: data["id"],
      name: data["name"],
      editorType: data["editor_type"],
      templateEngine: data["template_engine"],
      globalSubstitutions: data["global_substitutions"],
      globalMetadata: data["global_metadata"],
      body: data["body"] == null ? undefined : toModel(data["body"], BodyObject),
      subject: data["subject"],
      fromEmail: data["from_email"],
      fromName: data["from_name"],
      replyTo: data["reply_to"],
      replyToName: data["reply_to_name"],
      trackLinks: data["track_links"],
      trackRead: data["track_read"],
      headers: data["headers"] == null ? undefined : toModel(data["headers"], HeadersObject),
      attachments: data["attachments"] == null ? undefined : data["attachments"].map((item0) => toModel(item0, AttachmentsArrayItem)),
      inlineAttachments: data["inline_attachments"] == null ? undefined : data["inline_attachments"].map((item0) => toModel(item0, InlineAttachmentsArrayItem)),
      created: data["created"],
      userId: data["user_id"],
      projectId: data["project_id"],
      projectName: data["project_name"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
      "name": this.name,
      "editor_type": this.editorType,
      "template_engine": this.templateEngine,
      "global_substitutions": this.globalSubstitutions,
      "global_metadata": this.globalMetadata,
      "body": this.body == null ? undefined : toPlain(this.body),
      "subject": this.subject,
      "from_email": this.fromEmail,
      "from_name": this.fromName,
      "reply_to": this.replyTo,
      "reply_to_name": this.replyToName,
      "track_links": this.trackLinks,
      "track_read": this.trackRead,
      "headers": this.headers == null ? undefined : toPlain(this.headers),
      "attachments": this.attachments == null ? undefined : this.attachments.map((item0) => toPlain(item0)),
      "inline_attachments": this.inlineAttachments == null ? undefined : this.inlineAttachments.map((item0) => toPlain(item0)),
      "created": this.created,
      "user_id": this.userId,
      "project_id": this.projectId,
      "project_name": this.projectName,
    });
  }
}

/** TemplateDeleteRequest */
export class TemplateDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.id Ідентифікатор шаблону.
   */
  constructor({ id } = {}) {
    /**
     * Ідентифікатор шаблону.
     * @type {string|undefined}
     */
    this.id = id;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TemplateDeleteRequest}
   */
  static fromJSON(data) {
    return new TemplateDeleteRequest({
      id: data["id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
    });
  }
}
