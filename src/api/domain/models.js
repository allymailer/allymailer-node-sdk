// Models of the Domain section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів. */
export const DkimStatus = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
});

/** DomainGetDnsRecordsRequest */
export class DomainGetDnsRecordsRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.domain Домен, для якого потрібно отримати інформацію про DNS-записи.
   */
  constructor({ domain } = {}) {
    /**
     * Домен, для якого потрібно отримати інформацію про DNS-записи.
     * @type {string|undefined}
     */
    this.domain = domain;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainGetDnsRecordsRequest}
   */
  static fromJSON(data) {
    return new DomainGetDnsRecordsRequest({
      domain: data["domain"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "domain": this.domain,
    });
  }
}

/** DomainGetDnsRecordsResponse */
export class DomainGetDnsRecordsResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.domain] Домен, для якого потрібно отримати інформацію про DNS-записи.
   * @param {string} [data.verificationRecord] Запис, який потрібно внести "як є" для підтвердження володіння цим доменом.
   * @param {string} [data.dkim] DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб TXT-запис був коректним, перед ключем потрібно додати "v=DKIM1; k=rsa; p=".
   * @param {string} [data.dmarc] Значення CNAME-запису для хоста "_dmarc" домену.
   */
  constructor({ status, domain, verificationRecord, dkim, dmarc } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Домен, для якого потрібно отримати інформацію про DNS-записи.
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Запис, який потрібно внести "як є" для підтвердження володіння цим доменом.
     * @type {string|undefined}
     */
    this.verificationRecord = verificationRecord;
    /**
     * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб TXT-запис був коректним, перед
     * ключем потрібно додати "v=DKIM1; k=rsa; p=".
     * @type {string|undefined}
     */
    this.dkim = dkim;
    /**
     * Значення CNAME-запису для хоста "_dmarc" домену.
     * @type {string|undefined}
     */
    this.dmarc = dmarc;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainGetDnsRecordsResponse}
   */
  static fromJSON(data) {
    return new DomainGetDnsRecordsResponse({
      status: data["status"],
      domain: data["domain"],
      verificationRecord: data["verification-record"],
      dkim: data["dkim"],
      dmarc: data["dmarc"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "domain": this.domain,
      "verification-record": this.verificationRecord,
      "dkim": this.dkim,
      "dmarc": this.dmarc,
    });
  }
}

/** DomainValidateVerificationRecordRequest */
export class DomainValidateVerificationRecordRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.domain Домен, для якого перевіряється запис про володіння.
   */
  constructor({ domain } = {}) {
    /**
     * Домен, для якого перевіряється запис про володіння.
     * @type {string|undefined}
     */
    this.domain = domain;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainValidateVerificationRecordRequest}
   */
  static fromJSON(data) {
    return new DomainValidateVerificationRecordRequest({
      domain: data["domain"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "domain": this.domain,
    });
  }
}

/** DomainValidateVerificationRecordResponse */
export class DomainValidateVerificationRecordResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.message] Налагоджувальне повідомлення про хід перевірки.
   */
  constructor({ status, message } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Налагоджувальне повідомлення про хід перевірки.
     * @type {string|undefined}
     */
    this.message = message;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainValidateVerificationRecordResponse}
   */
  static fromJSON(data) {
    return new DomainValidateVerificationRecordResponse({
      status: data["status"],
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
      "message": this.message,
    });
  }
}

/** DomainValidateDkimRequest */
export class DomainValidateDkimRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.domain Домен, для якого перевіряється DKIM-запис.
   */
  constructor({ domain } = {}) {
    /**
     * Домен, для якого перевіряється DKIM-запис.
     * @type {string|undefined}
     */
    this.domain = domain;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainValidateDkimRequest}
   */
  static fromJSON(data) {
    return new DomainValidateDkimRequest({
      domain: data["domain"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "domain": this.domain,
    });
  }
}

/** DomainValidateDkimResponse */
export class DomainValidateDkimResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.message] Налагоджувальне повідомлення про хід перевірки.
   */
  constructor({ status, message } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Налагоджувальне повідомлення про хід перевірки.
     * @type {string|undefined}
     */
    this.message = message;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainValidateDkimResponse}
   */
  static fromJSON(data) {
    return new DomainValidateDkimResponse({
      status: data["status"],
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
      "message": this.message,
    });
  }
}

/** DomainListRequest */
export class DomainListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.domain] Опціональне ім'я домену, якщо вам потрібно отримати статуси лише за одним доменом.
   * @param {number} [data.limit] Максимальна кількість доменів, що повертаються. За замовчуванням 50.
   * @param {number} [data.offset] Індекс першого домену зі списку, що повертається, рахуючи з нуля.
   */
  constructor({ domain, limit, offset } = {}) {
    /**
     * Опціональне ім'я домену, якщо вам потрібно отримати статуси лише за одним доменом.
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Максимальна кількість доменів, що повертаються. За замовчуванням 50.
     * За замовчуванням: `50`.
     * @type {number|undefined}
     */
    this.limit = limit;
    /**
     * Індекс першого домену зі списку, що повертається, рахуючи з нуля.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.offset = offset;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainListRequest}
   */
  static fromJSON(data) {
    return new DomainListRequest({
      domain: data["domain"],
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
      "domain": this.domain,
      "limit": this.limit,
      "offset": this.offset,
    });
  }
}

/** DomainListResponse */
export class DomainListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {DomainListResponseDomainsItem[]} [data.domains] Масив об'єктів, що описують домени.
   */
  constructor({ status, domains } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів, що описують домени.
     * @type {DomainListResponseDomainsItem[]|undefined}
     */
    this.domains = domains == null ? domains : domains.map((item0) => toModel(item0, DomainListResponseDomainsItem));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainListResponse}
   */
  static fromJSON(data) {
    return new DomainListResponse({
      status: data["status"],
      domains: data["domains"] == null ? undefined : data["domains"].map((item0) => toModel(item0, DomainListResponseDomainsItem)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "domains": this.domains == null ? undefined : this.domains.map((item0) => toPlain(item0)),
    });
  }
}

/** DomainListResponseDomainsItem */
export class DomainListResponseDomainsItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.domain] Ім'я домену.
   * @param {DomainListResponseDomainsItemVerificationRecord} [data.verificationRecord] Об'єкт, що описує запис перевірки володіння та її статус.
   * @param {DomainListResponseDomainsItemDkim} [data.dkim] Об'єкт, що описує DKIM-запис та її статус.
   */
  constructor({ domain, verificationRecord, dkim } = {}) {
    /**
     * Ім'я домену.
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Об'єкт, що описує запис перевірки володіння та її статус.
     * @type {DomainListResponseDomainsItemVerificationRecord|undefined}
     */
    this.verificationRecord = verificationRecord == null ? verificationRecord : toModel(verificationRecord, DomainListResponseDomainsItemVerificationRecord);
    /**
     * Об'єкт, що описує DKIM-запис та її статус.
     * @type {DomainListResponseDomainsItemDkim|undefined}
     */
    this.dkim = dkim == null ? dkim : toModel(dkim, DomainListResponseDomainsItemDkim);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainListResponseDomainsItem}
   */
  static fromJSON(data) {
    return new DomainListResponseDomainsItem({
      domain: data["domain"],
      verificationRecord: data["verification-record"] == null ? undefined : toModel(data["verification-record"], DomainListResponseDomainsItemVerificationRecord),
      dkim: data["dkim"] == null ? undefined : toModel(data["dkim"], DomainListResponseDomainsItemDkim),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "domain": this.domain,
      "verification-record": this.verificationRecord == null ? undefined : toPlain(this.verificationRecord),
      "dkim": this.dkim == null ? undefined : toPlain(this.dkim),
    });
  }
}

/** Об'єкт, що описує запис перевірки володіння та її статус. */
export class DomainListResponseDomainsItemVerificationRecord {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.value] Запис, який потрібно внести "як є" для підтвердження володіння цим доменом.
   * @param {"confirmed"|"unconfirmed"} [data.status] Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для надсилання листів.
   */
  constructor({ value, status } = {}) {
    /**
     * Запис, який потрібно внести "як є" для підтвердження володіння цим доменом.
     * @type {string|undefined}
     */
    this.value = value;
    /**
     * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
     * надсилання листів.
     * @type {"confirmed"|"unconfirmed"|undefined}
     */
    this.status = status;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainListResponseDomainsItemVerificationRecord}
   */
  static fromJSON(data) {
    return new DomainListResponseDomainsItemVerificationRecord({
      value: data["value"],
      status: data["status"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "value": this.value,
      "status": this.status,
    });
  }
}

/** Об'єкт, що описує DKIM-запис та її статус. */
export class DomainListResponseDomainsItemDkim {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.key] DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб DNS-запис був коректним, перед ключем потрібно додати "k=rsa, p=" (див. [domain/get-dns-records](https://docs.allymailer.com.ua/ua/web-api-ref#domain-get-dns-records)).
   * @param {"active"|"inactive"} [data.status] Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів.
   */
  constructor({ key, status } = {}) {
    /**
     * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб DNS-запис був коректним, перед
     * ключем потрібно додати "k=rsa, p=" (див.
     * [domain/get-dns-records](https://docs.allymailer.com.ua/ua/web-api-ref#domain-get-dns-records)).
     * @type {string|undefined}
     */
    this.key = key;
    /**
     * Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів.
     * @type {"active"|"inactive"|undefined}
     */
    this.status = status;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainListResponseDomainsItemDkim}
   */
  static fromJSON(data) {
    return new DomainListResponseDomainsItemDkim({
      key: data["key"],
      status: data["status"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "key": this.key,
      "status": this.status,
    });
  }
}

/** DomainGetSandboxDomainResponse */
export class DomainGetSandboxDomainResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.domain] Ім'я sandbox-домену.
   */
  constructor({ status, domain } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Ім'я sandbox-домену.
     * @type {string|undefined}
     */
    this.domain = domain;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainGetSandboxDomainResponse}
   */
  static fromJSON(data) {
    return new DomainGetSandboxDomainResponse({
      status: data["status"],
      domain: data["domain"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "domain": this.domain,
    });
  }
}

/** DomainDeleteRequest */
export class DomainDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.domain Ім'я домену, який потрібно видалити.
   */
  constructor({ domain } = {}) {
    /**
     * Ім'я домену, який потрібно видалити.
     * @type {string|undefined}
     */
    this.domain = domain;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainDeleteRequest}
   */
  static fromJSON(data) {
    return new DomainDeleteRequest({
      domain: data["domain"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "domain": this.domain,
    });
  }
}

/** DomainDeleteResponse */
export class DomainDeleteResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.message] Домен видалено
   */
  constructor({ status, message } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Домен видалено
     * @type {string|undefined}
     */
    this.message = message;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {DomainDeleteResponse}
   */
  static fromJSON(data) {
    return new DomainDeleteResponse({
      status: data["status"],
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
      "message": this.message,
    });
  }
}
