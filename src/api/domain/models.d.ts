// Types of the models of the Domain section.
import type { VerificationRecordStatus } from "../../common/models.js";

/** Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів. */
export declare const DkimStatus: Readonly<{
  ACTIVE: "active";
  INACTIVE: "inactive";
}>;
/** Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів. */
export type DkimStatus = "active" | "inactive";

/** DomainGetDnsRecordsRequest in the API format: the object sent and received as JSON. */
export interface DomainGetDnsRecordsRequestJSON {
  "domain": string;
}

/** Fields of new DomainGetDnsRecordsRequest(): a nested model may be a plain object in the API format. */
export interface DomainGetDnsRecordsRequestInit {
  /** Домен, для якого потрібно отримати інформацію про DNS-записи. */
  domain: string;
}

/** DomainGetDnsRecordsRequest */
export declare class DomainGetDnsRecordsRequest {
  constructor(data: DomainGetDnsRecordsRequestInit);
  /** Домен, для якого потрібно отримати інформацію про DNS-записи. */
  domain: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainGetDnsRecordsRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainGetDnsRecordsRequestJSON;
}

/** DomainGetDnsRecordsResponse in the API format: the object sent and received as JSON. */
export interface DomainGetDnsRecordsResponseJSON {
  "status"?: string;
  "domain"?: string;
  "verification-record"?: string;
  "dkim"?: string;
  "dmarc"?: string;
}

/** Fields of new DomainGetDnsRecordsResponse(): a nested model may be a plain object in the API format. */
export interface DomainGetDnsRecordsResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Домен, для якого потрібно отримати інформацію про DNS-записи. */
  domain?: string;
  /** Запис, який потрібно внести "як є" для підтвердження володіння цим доменом. */
  verificationRecord?: string;
  /**
   * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб TXT-запис був коректним, перед
   * ключем потрібно додати "v=DKIM1; k=rsa; p=".
   */
  dkim?: string;
  /** Значення CNAME-запису для хоста "_dmarc" домену. */
  dmarc?: string;
}

/** DomainGetDnsRecordsResponse */
export declare class DomainGetDnsRecordsResponse {
  constructor(data?: DomainGetDnsRecordsResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Домен, для якого потрібно отримати інформацію про DNS-записи. */
  domain?: string;
  /** Запис, який потрібно внести "як є" для підтвердження володіння цим доменом. */
  verificationRecord?: string;
  /**
   * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб TXT-запис був коректним, перед
   * ключем потрібно додати "v=DKIM1; k=rsa; p=".
   */
  dkim?: string;
  /** Значення CNAME-запису для хоста "_dmarc" домену. */
  dmarc?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainGetDnsRecordsResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainGetDnsRecordsResponseJSON;
}

/** DomainValidateVerificationRecordRequest in the API format: the object sent and received as JSON. */
export interface DomainValidateVerificationRecordRequestJSON {
  "domain": string;
}

/** Fields of new DomainValidateVerificationRecordRequest(): a nested model may be a plain object in the API format. */
export interface DomainValidateVerificationRecordRequestInit {
  /** Домен, для якого перевіряється запис про володіння. */
  domain: string;
}

/** DomainValidateVerificationRecordRequest */
export declare class DomainValidateVerificationRecordRequest {
  constructor(data: DomainValidateVerificationRecordRequestInit);
  /** Домен, для якого перевіряється запис про володіння. */
  domain: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainValidateVerificationRecordRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainValidateVerificationRecordRequestJSON;
}

/** DomainValidateVerificationRecordResponse in the API format: the object sent and received as JSON. */
export interface DomainValidateVerificationRecordResponseJSON {
  "status"?: string;
  "message"?: string;
}

/** Fields of new DomainValidateVerificationRecordResponse(): a nested model may be a plain object in the API format. */
export interface DomainValidateVerificationRecordResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Налагоджувальне повідомлення про хід перевірки. */
  message?: string;
}

/** DomainValidateVerificationRecordResponse */
export declare class DomainValidateVerificationRecordResponse {
  constructor(data?: DomainValidateVerificationRecordResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Налагоджувальне повідомлення про хід перевірки. */
  message?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainValidateVerificationRecordResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainValidateVerificationRecordResponseJSON;
}

/** DomainValidateDkimRequest in the API format: the object sent and received as JSON. */
export interface DomainValidateDkimRequestJSON {
  "domain": string;
}

/** Fields of new DomainValidateDkimRequest(): a nested model may be a plain object in the API format. */
export interface DomainValidateDkimRequestInit {
  /** Домен, для якого перевіряється DKIM-запис. */
  domain: string;
}

/** DomainValidateDkimRequest */
export declare class DomainValidateDkimRequest {
  constructor(data: DomainValidateDkimRequestInit);
  /** Домен, для якого перевіряється DKIM-запис. */
  domain: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainValidateDkimRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainValidateDkimRequestJSON;
}

/** DomainValidateDkimResponse in the API format: the object sent and received as JSON. */
export interface DomainValidateDkimResponseJSON {
  "status"?: string;
  "message"?: string;
}

/** Fields of new DomainValidateDkimResponse(): a nested model may be a plain object in the API format. */
export interface DomainValidateDkimResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Налагоджувальне повідомлення про хід перевірки. */
  message?: string;
}

/** DomainValidateDkimResponse */
export declare class DomainValidateDkimResponse {
  constructor(data?: DomainValidateDkimResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Налагоджувальне повідомлення про хід перевірки. */
  message?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainValidateDkimResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainValidateDkimResponseJSON;
}

/** DomainListRequest in the API format: the object sent and received as JSON. */
export interface DomainListRequestJSON {
  "domain"?: string;
  "limit"?: number;
  "offset"?: number;
}

/** Fields of new DomainListRequest(): a nested model may be a plain object in the API format. */
export interface DomainListRequestInit {
  /** Опціональне ім'я домену, якщо вам потрібно отримати статуси лише за одним доменом. */
  domain?: string;
  /**
   * Максимальна кількість доменів, що повертаються. За замовчуванням 50.
   * За замовчуванням: `50`.
   */
  limit?: number;
  /**
   * Індекс першого домену зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
}

/** DomainListRequest */
export declare class DomainListRequest {
  constructor(data?: DomainListRequestInit);
  /** Опціональне ім'я домену, якщо вам потрібно отримати статуси лише за одним доменом. */
  domain?: string;
  /**
   * Максимальна кількість доменів, що повертаються. За замовчуванням 50.
   * За замовчуванням: `50`.
   */
  limit?: number;
  /**
   * Індекс першого домену зі списку, що повертається, рахуючи з нуля.
   * За замовчуванням: `0`.
   */
  offset?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainListRequestJSON;
}

/** DomainListResponse in the API format: the object sent and received as JSON. */
export interface DomainListResponseJSON {
  "status"?: string;
  "domains"?: Array<DomainListResponseDomainsItemJSON>;
}

/** Fields of new DomainListResponse(): a nested model may be a plain object in the API format. */
export interface DomainListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів, що описують домени. */
  domains?: Array<DomainListResponseDomainsItem | DomainListResponseDomainsItemJSON>;
}

/** DomainListResponse */
export declare class DomainListResponse {
  constructor(data?: DomainListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів, що описують домени. */
  domains?: Array<DomainListResponseDomainsItem>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainListResponseJSON;
}

/** DomainListResponseDomainsItem in the API format: the object sent and received as JSON. */
export interface DomainListResponseDomainsItemJSON {
  "domain"?: string;
  "verification-record"?: DomainListResponseDomainsItemVerificationRecordJSON;
  "dkim"?: DomainListResponseDomainsItemDkimJSON;
}

/** Fields of new DomainListResponseDomainsItem(): a nested model may be a plain object in the API format. */
export interface DomainListResponseDomainsItemInit {
  /** Ім'я домену. */
  domain?: string;
  /** Об'єкт, що описує запис перевірки володіння та її статус. */
  verificationRecord?: DomainListResponseDomainsItemVerificationRecord | DomainListResponseDomainsItemVerificationRecordJSON;
  /** Об'єкт, що описує DKIM-запис та її статус. */
  dkim?: DomainListResponseDomainsItemDkim | DomainListResponseDomainsItemDkimJSON;
}

/** DomainListResponseDomainsItem */
export declare class DomainListResponseDomainsItem {
  constructor(data?: DomainListResponseDomainsItemInit);
  /** Ім'я домену. */
  domain?: string;
  /** Об'єкт, що описує запис перевірки володіння та її статус. */
  verificationRecord?: DomainListResponseDomainsItemVerificationRecord;
  /** Об'єкт, що описує DKIM-запис та її статус. */
  dkim?: DomainListResponseDomainsItemDkim;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainListResponseDomainsItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainListResponseDomainsItemJSON;
}

/** DomainListResponseDomainsItemVerificationRecord in the API format: the object sent and received as JSON. */
export interface DomainListResponseDomainsItemVerificationRecordJSON {
  "value"?: string;
  "status"?: VerificationRecordStatus;
}

/** Fields of new DomainListResponseDomainsItemVerificationRecord(): a nested model may be a plain object in the API format. */
export interface DomainListResponseDomainsItemVerificationRecordInit {
  /** Запис, який потрібно внести "як є" для підтвердження володіння цим доменом. */
  value?: string;
  /**
   * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
   * надсилання листів.
   */
  status?: VerificationRecordStatus;
}

/** Об'єкт, що описує запис перевірки володіння та її статус. */
export declare class DomainListResponseDomainsItemVerificationRecord {
  constructor(data?: DomainListResponseDomainsItemVerificationRecordInit);
  /** Запис, який потрібно внести "як є" для підтвердження володіння цим доменом. */
  value?: string;
  /**
   * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
   * надсилання листів.
   */
  status?: VerificationRecordStatus;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainListResponseDomainsItemVerificationRecord;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainListResponseDomainsItemVerificationRecordJSON;
}

/** DomainListResponseDomainsItemDkim in the API format: the object sent and received as JSON. */
export interface DomainListResponseDomainsItemDkimJSON {
  "key"?: string;
  "status"?: DkimStatus;
}

/** Fields of new DomainListResponseDomainsItemDkim(): a nested model may be a plain object in the API format. */
export interface DomainListResponseDomainsItemDkimInit {
  /**
   * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб DNS-запис був коректним, перед
   * ключем потрібно додати "k=rsa, p=" (див.
   * [domain/get-dns-records](https://docs.allymailer.com.ua/ua/web-api-ref#domain-get-dns-records)).
   */
  key?: string;
  /** Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів. */
  status?: DkimStatus;
}

/** Об'єкт, що описує DKIM-запис та її статус. */
export declare class DomainListResponseDomainsItemDkim {
  constructor(data?: DomainListResponseDomainsItemDkimInit);
  /**
   * DKIM-підпис для домену. У цьому полі повертається лише ключ. Щоб DNS-запис був коректним, перед
   * ключем потрібно додати "k=rsa, p=" (див.
   * [domain/get-dns-records](https://docs.allymailer.com.ua/ua/web-api-ref#domain-get-dns-records)).
   */
  key?: string;
  /** Лише домени зі статусом DKIM-запису "active" можуть використовуватися для надсилання листів. */
  status?: DkimStatus;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainListResponseDomainsItemDkim;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainListResponseDomainsItemDkimJSON;
}

/** DomainGetSandboxDomainResponse in the API format: the object sent and received as JSON. */
export interface DomainGetSandboxDomainResponseJSON {
  "status"?: string;
  "domain"?: string;
}

/** Fields of new DomainGetSandboxDomainResponse(): a nested model may be a plain object in the API format. */
export interface DomainGetSandboxDomainResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Ім'я sandbox-домену. */
  domain?: string;
}

/** DomainGetSandboxDomainResponse */
export declare class DomainGetSandboxDomainResponse {
  constructor(data?: DomainGetSandboxDomainResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Ім'я sandbox-домену. */
  domain?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainGetSandboxDomainResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainGetSandboxDomainResponseJSON;
}

/** DomainDeleteRequest in the API format: the object sent and received as JSON. */
export interface DomainDeleteRequestJSON {
  "domain": string;
}

/** Fields of new DomainDeleteRequest(): a nested model may be a plain object in the API format. */
export interface DomainDeleteRequestInit {
  /** Ім'я домену, який потрібно видалити. */
  domain: string;
}

/** DomainDeleteRequest */
export declare class DomainDeleteRequest {
  constructor(data: DomainDeleteRequestInit);
  /** Ім'я домену, який потрібно видалити. */
  domain: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainDeleteRequestJSON;
}

/** DomainDeleteResponse in the API format: the object sent and received as JSON. */
export interface DomainDeleteResponseJSON {
  "status"?: string;
  "message"?: string;
}

/** Fields of new DomainDeleteResponse(): a nested model may be a plain object in the API format. */
export interface DomainDeleteResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Домен видалено */
  message?: string;
}

/** DomainDeleteResponse */
export declare class DomainDeleteResponse {
  constructor(data?: DomainDeleteResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Домен видалено */
  message?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): DomainDeleteResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): DomainDeleteResponseJSON;
}
