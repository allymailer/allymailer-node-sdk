// Models of the Suppression section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** SuppressionSetRequest */
export class SuppressionSetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.email Email-адреса, яку потрібно додати до списку недоступних.
   * @param {string} data.cause Причина, з якої надсилання на цей email блокується. Одна з таких:  - __unsubscribed__ - зазначену адресу відписано; - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:  - попереднє надсилання було відхилено сервером отримувача як спам; - поштова скринька отримувача переповнена або не використовується; - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин; - сервер відправника було відхилено через блеклистинг;  - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки; - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”.
   * @param {string} [data.created] Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   */
  constructor({ email, cause, created } = {}) {
    /**
     * Email-адреса, яку потрібно додати до списку недоступних.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Причина, з якої надсилання на цей email блокується. Одна з таких:
     *
     * - __unsubscribed__ - зазначену адресу відписано;
     * - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
     *
     * - попереднє надсилання було відхилено сервером отримувача як спам;
     * - поштова скринька отримувача переповнена або не використовується;
     * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
     * - сервер відправника було відхилено через блеклистинг;
     *
     * - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки;
     * - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”.
     * @type {string|undefined}
     */
    this.cause = cause;
    /**
     * Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.created = created;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionSetRequest}
   */
  static fromJSON(data) {
    return new SuppressionSetRequest({
      email: data["email"],
      cause: data["cause"],
      created: data["created"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "email": this.email,
      "cause": this.cause,
      "created": this.created,
    });
  }
}

/** SuppressionGetRequest */
export class SuppressionGetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.email Email-адреса, для якої потрібно отримати дані про недоступність.
   * @param {boolean} [data.allProjects] Якщо у користувача увімкнено проєкти, all_projects=true дозволить шукати за даними всіх проєктів.
   */
  constructor({ email, allProjects } = {}) {
    /**
     * Email-адреса, для якої потрібно отримати дані про недоступність.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Якщо у користувача увімкнено проєкти, all_projects=true дозволить шукати за даними всіх проєктів.
     * За замовчуванням: `False`.
     * @type {boolean|undefined}
     */
    this.allProjects = allProjects;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionGetRequest}
   */
  static fromJSON(data) {
    return new SuppressionGetRequest({
      email: data["email"],
      allProjects: data["all_projects"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "email": this.email,
      "all_projects": this.allProjects,
    });
  }
}

/** SuppressionGetResponse */
export class SuppressionGetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.email] Email-адреса, для якої було запитано дані про недоступність.
   * @param {SuppressionGetObject[]} [data.suppressions] Масив об'єктів з інформацією про недоступність.
   */
  constructor({ status, email, suppressions } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Email-адреса, для якої було запитано дані про недоступність.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Масив об'єктів з інформацією про недоступність.
     * @type {SuppressionGetObject[]|undefined}
     */
    this.suppressions = suppressions == null ? suppressions : suppressions.map((item0) => toModel(item0, SuppressionGetObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionGetResponse}
   */
  static fromJSON(data) {
    return new SuppressionGetResponse({
      status: data["status"],
      email: data["email"],
      suppressions: data["suppressions"] == null ? undefined : data["suppressions"].map((item0) => toModel(item0, SuppressionGetObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "email": this.email,
      "suppressions": this.suppressions == null ? undefined : this.suppressions.map((item0) => toPlain(item0)),
    });
  }
}

/** Об'єкт з даними про блокування email. */
export class SuppressionGetObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.projectId] Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
   * @param {string} [data.cause] Причина, з якої надсилання на цей email блокується. Одна з таких:  - __unsubscribed__ - зазначену адресу відписано; - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:  - попереднє надсилання було відхилено сервером отримувача як спам; - поштова скринька отримувача переповнена або не використовується; - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин; - сервер відправника було відхилено через блеклистинг;  - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки; - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”. - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer. У майбутньому можуть з'явитися й інші причини.
   * @param {string} [data.source] Джерело потрапляння до списку недоступних. Одне з таких:  - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set); - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки; - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   * @param {boolean} [data.isDeletable] Чи можна видалити запис за допомогою виклику suppression/delete.
   * @param {string} [data.created] Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   */
  constructor({ projectId, cause, source, isDeletable, created } = {}) {
    /**
     * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Причина, з якої надсилання на цей email блокується. Одна з таких:
     *
     * - __unsubscribed__ - зазначену адресу відписано;
     * - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
     *
     * - попереднє надсилання було відхилено сервером отримувача як спам;
     * - поштова скринька отримувача переповнена або не використовується;
     * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
     * - сервер відправника було відхилено через блеклистинг;
     *
     * - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки;
     * - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”.
     * - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer.
     * У майбутньому можуть з'явитися й інші причини.
     * @type {string|undefined}
     */
    this.cause = cause;
    /**
     * Джерело потрапляння до списку недоступних. Одне з таких:
     *
     * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
     * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
     * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
     * @type {string|undefined}
     */
    this.source = source;
    /**
     * Чи можна видалити запис за допомогою виклику suppression/delete.
     * @type {boolean|undefined}
     */
    this.isDeletable = isDeletable;
    /**
     * Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.created = created;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionGetObject}
   */
  static fromJSON(data) {
    return new SuppressionGetObject({
      projectId: data["project_id"],
      cause: data["cause"],
      source: data["source"],
      isDeletable: data["is_deletable"],
      created: data["created"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "project_id": this.projectId,
      "cause": this.cause,
      "source": this.source,
      "is_deletable": this.isDeletable,
      "created": this.created,
    });
  }
}

/** SuppressionListRequest */
export class SuppressionListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.cause] Причина, з якої надсилання на цей email блокується. Одна з таких:  - __unsubscribed__ - зазначену адресу відписано; - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:  - попереднє надсилання було відхилено сервером отримувача як спам; - поштова скринька отримувача переповнена або не використовується; - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин; - сервер відправника було відхилено через блеклистинг;  - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки; - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”. - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer. У майбутньому можуть з'явитися й інші причини.
   * @param {string} [data.source] Джерело потрапляння до списку недоступних. Одне з таких:  - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set); - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки; - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   * @param {string} [data.startTime] Дата у форматі РРРР-ММ-ДД гг:хх:сс, щоб отримати список блокування з "start_time" по сьогоднішній день. Ігнорується, якщо параметр “cursor” не порожній.
   * @param {string} [data.cursor] Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи значення поля "cursor" з попередньої порції.
   * @param {number} [data.limit] Максимум записів, що видаються за один раз, за замовчуванням 50.
   */
  constructor({ cause, source, startTime, cursor, limit } = {}) {
    /**
     * Причина, з якої надсилання на цей email блокується. Одна з таких:
     *
     * - __unsubscribed__ - зазначену адресу відписано;
     * - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
     *
     * - попереднє надсилання було відхилено сервером отримувача як спам;
     * - поштова скринька отримувача переповнена або не використовується;
     * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
     * - сервер відправника було відхилено через блеклистинг;
     *
     * - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки;
     * - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”.
     * - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer.
     * У майбутньому можуть з'явитися й інші причини.
     * @type {string|undefined}
     */
    this.cause = cause;
    /**
     * Джерело потрапляння до списку недоступних. Одне з таких:
     *
     * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
     * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
     * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
     * @type {string|undefined}
     */
    this.source = source;
    /**
     * Дата у форматі РРРР-ММ-ДД гг:хх:сс, щоб отримати список блокування з "start_time" по сьогоднішній
     * день. Ігнорується, якщо параметр “cursor” не порожній.
     * @type {string|undefined}
     */
    this.startTime = startTime;
    /**
     * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
     * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
     * значення поля "cursor" з попередньої порції.
     * @type {string|undefined}
     */
    this.cursor = cursor;
    /**
     * Максимум записів, що видаються за один раз, за замовчуванням 50.
     * @type {number|undefined}
     */
    this.limit = limit;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionListRequest}
   */
  static fromJSON(data) {
    return new SuppressionListRequest({
      cause: data["cause"],
      source: data["source"],
      startTime: data["start_time"],
      cursor: data["cursor"],
      limit: data["limit"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "cause": this.cause,
      "source": this.source,
      "start_time": this.startTime,
      "cursor": this.cursor,
      "limit": this.limit,
    });
  }
}

/** SuppressionListResponse */
export class SuppressionListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {SuppressionListObject[]} [data.suppressions] Масив об'єктів з інформацією про недоступність.
   * @param {string} [data.cursor] Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи значення поля "cursor" з попередньої порції.
   */
  constructor({ status, suppressions, cursor } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів з інформацією про недоступність.
     * @type {SuppressionListObject[]|undefined}
     */
    this.suppressions = suppressions == null ? suppressions : suppressions.map((item0) => toModel(item0, SuppressionListObject));
    /**
     * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
     * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
     * значення поля "cursor" з попередньої порції.
     * @type {string|undefined}
     */
    this.cursor = cursor;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionListResponse}
   */
  static fromJSON(data) {
    return new SuppressionListResponse({
      status: data["status"],
      suppressions: data["suppressions"] == null ? undefined : data["suppressions"].map((item0) => toModel(item0, SuppressionListObject)),
      cursor: data["cursor"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "suppressions": this.suppressions == null ? undefined : this.suppressions.map((item0) => toPlain(item0)),
      "cursor": this.cursor,
    });
  }
}

/** Об'єкт з даними про блокування email. */
export class SuppressionListObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.email] Email-адреса, яка знаходиться в списку недоступних.
   * @param {string} [data.cause] Причина, з якої надсилання на цей email блокується. Одна з таких:  - __unsubscribed__ - зазначену адресу відписано; - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:  - попереднє надсилання було відхилено сервером отримувача як спам; - поштова скринька отримувача переповнена або не використовується; - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин; - сервер відправника було відхилено через блеклистинг;  - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки; - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”. - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer. У майбутньому можуть з'явитися й інші причини.
   * @param {string} [data.source] Джерело потрапляння до списку недоступних. Одне з таких:  - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set); - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки; - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   * @param {boolean} [data.isDeletable] Чи можна видалити запис за допомогою виклику suppression/delete.
   * @param {string} [data.created] Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   */
  constructor({ email, cause, source, isDeletable, created } = {}) {
    /**
     * Email-адреса, яка знаходиться в списку недоступних.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Причина, з якої надсилання на цей email блокується. Одна з таких:
     *
     * - __unsubscribed__ - зазначену адресу відписано;
     * - __temporary_unavailable__ - адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
     *
     * - попереднє надсилання було відхилено сервером отримувача як спам;
     * - поштова скринька отримувача переповнена або не використовується;
     * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
     * - сервер відправника було відхилено через блеклистинг;
     *
     * - __permanent_unavailable__ - адреса перманентно недоступна через багаторазові недоставки;
     * - __complained__ - в одному з попередніх листів адресат натиснув “Це спам”.
     * - __blocked__ - надсилання на цю адресу заборонено адміністрацією AllyMailer.
     * У майбутньому можуть з'явитися й інші причини.
     * @type {string|undefined}
     */
    this.cause = cause;
    /**
     * Джерело потрапляння до списку недоступних. Одне з таких:
     *
     * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
     * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
     * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
     * @type {string|undefined}
     */
    this.source = source;
    /**
     * Чи можна видалити запис за допомогою виклику suppression/delete.
     * @type {boolean|undefined}
     */
    this.isDeletable = isDeletable;
    /**
     * Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.created = created;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionListObject}
   */
  static fromJSON(data) {
    return new SuppressionListObject({
      email: data["email"],
      cause: data["cause"],
      source: data["source"],
      isDeletable: data["is_deletable"],
      created: data["created"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "email": this.email,
      "cause": this.cause,
      "source": this.source,
      "is_deletable": this.isDeletable,
      "created": this.created,
    });
  }
}

/** SuppressionDeleteRequest */
export class SuppressionDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.email Email-адреса, яку потрібно видалити зі списку недоступних.
   */
  constructor({ email } = {}) {
    /**
     * Email-адреса, яку потрібно видалити зі списку недоступних.
     * @type {string|undefined}
     */
    this.email = email;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuppressionDeleteRequest}
   */
  static fromJSON(data) {
    return new SuppressionDeleteRequest({
      email: data["email"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "email": this.email,
    });
  }
}
