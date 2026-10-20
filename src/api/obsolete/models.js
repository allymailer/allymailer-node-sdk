// Models of the Obsolete section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/**
 * Подробиці відписки:
 *
 * - "unsubscribed" якщо email було щойно відписано,
 * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
 * - "was unsubscribed" якщо email уже було відписано раніше,
 * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
 */
export const ObsoleteUnsubscribedSetMessage = Object.freeze({
  UNSUBSCRIBED: "unsubscribed",
  WAS_INACTIVE: "was inactive",
  WAS_UNSUBSCRIBED: "was unsubscribed",
  ADDED_AND_UNSUBSCRIBED: "added and unsubscribed",
});

/** ObsoleteUnsubscribedSetRequest */
export class ObsoleteUnsubscribedSetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.address Email, який має бути відписано.
   */
  constructor({ address } = {}) {
    /**
     * Email, який має бути відписано.
     * @type {string|undefined}
     */
    this.address = address;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedSetRequest}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedSetRequest({
      address: data["address"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "address": this.address,
    });
  }
}

/** ObsoleteUnsubscribedSetResponse */
export class ObsoleteUnsubscribedSetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.address] Відписаний email.
   * @param {"unsubscribed"|"was inactive"|"was unsubscribed"|"added and unsubscribed"} [data.message] Подробиці відписки:  - "unsubscribed" якщо email було щойно відписано, - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати, - "was unsubscribed" якщо email уже було відписано раніше, - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
   */
  constructor({ status, address, message } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Відписаний email.
     * @type {string|undefined}
     */
    this.address = address;
    /**
     * Подробиці відписки:
     *
     * - "unsubscribed" якщо email було щойно відписано,
     * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
     * - "was unsubscribed" якщо email уже було відписано раніше,
     * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
     * @type {"unsubscribed"|"was inactive"|"was unsubscribed"|"added and unsubscribed"|undefined}
     */
    this.message = message;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedSetResponse}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedSetResponse({
      status: data["status"],
      address: data["address"],
      message: data["message"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "address": this.address,
      "message": this.message,
    });
  }
}

/** ObsoleteUnsubscribedCheckRequest */
export class ObsoleteUnsubscribedCheckRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.address Email, який необхідно перевірити.
   */
  constructor({ address } = {}) {
    /**
     * Email, який необхідно перевірити.
     * @type {string|undefined}
     */
    this.address = address;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedCheckRequest}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedCheckRequest({
      address: data["address"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "address": this.address,
    });
  }
}

/** ObsoleteUnsubscribedCheckResponse */
export class ObsoleteUnsubscribedCheckResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.address] Email, який було перевірено.
   * @param {boolean} [data.isUnsubscribed] true якщо відписано, false якщо ні.
   */
  constructor({ status, address, isUnsubscribed } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Email, який було перевірено.
     * @type {string|undefined}
     */
    this.address = address;
    /**
     * true якщо відписано, false якщо ні.
     * @type {boolean|undefined}
     */
    this.isUnsubscribed = isUnsubscribed;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedCheckResponse}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedCheckResponse({
      status: data["status"],
      address: data["address"],
      isUnsubscribed: data["is_unsubscribed"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "address": this.address,
      "is_unsubscribed": this.isUnsubscribed,
    });
  }
}

/** ObsoleteUnsubscribedListRequest */
export class ObsoleteUnsubscribedListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.dateFrom] Дата у форматі РРРР-ММ-ДД, щоб отримати всі відписані адреси з "date_from" по сьогоднішній день. Якщо параметр не вказати, період за замовчуванням буде з 00:00 сьогоднішнього дня за UTC.
   */
  constructor({ dateFrom } = {}) {
    /**
     * Дата у форматі РРРР-ММ-ДД, щоб отримати всі відписані адреси з "date_from" по сьогоднішній день.
     * Якщо параметр не вказати, період за замовчуванням буде з 00:00 сьогоднішнього дня за UTC.
     * @type {string|undefined}
     */
    this.dateFrom = dateFrom;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedListRequest}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedListRequest({
      dateFrom: data["date_from"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "date_from": this.dateFrom,
    });
  }
}

/** ObsoleteUnsubscribedListResponse */
export class ObsoleteUnsubscribedListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {ObsoleteUnsubscribedListResponseUnsubscribedItem[]} [data.unsubscribed] Масив об'єктів з даними відписаних.
   */
  constructor({ status, unsubscribed } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів з даними відписаних.
     * @type {ObsoleteUnsubscribedListResponseUnsubscribedItem[]|undefined}
     */
    this.unsubscribed = unsubscribed == null ? unsubscribed : unsubscribed.map((item0) => toModel(item0, ObsoleteUnsubscribedListResponseUnsubscribedItem));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedListResponse}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedListResponse({
      status: data["status"],
      unsubscribed: data["unsubscribed"] == null ? undefined : data["unsubscribed"].map((item0) => toModel(item0, ObsoleteUnsubscribedListResponseUnsubscribedItem)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "unsubscribed": this.unsubscribed == null ? undefined : this.unsubscribed.map((item0) => toPlain(item0)),
    });
  }
}

/** ObsoleteUnsubscribedListResponseUnsubscribedItem */
export class ObsoleteUnsubscribedListResponseUnsubscribedItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.address] Відписаний email.
   * @param {string} [data.unsubscribedOn] Дата й час відписки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC.
   */
  constructor({ address, unsubscribedOn } = {}) {
    /**
     * Відписаний email.
     * @type {string|undefined}
     */
    this.address = address;
    /**
     * Дата й час відписки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC.
     * @type {string|undefined}
     */
    this.unsubscribedOn = unsubscribedOn;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ObsoleteUnsubscribedListResponseUnsubscribedItem}
   */
  static fromJSON(data) {
    return new ObsoleteUnsubscribedListResponseUnsubscribedItem({
      address: data["address"],
      unsubscribedOn: data["unsubscribed_on"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "address": this.address,
      "unsubscribed_on": this.unsubscribedOn,
    });
  }
}
