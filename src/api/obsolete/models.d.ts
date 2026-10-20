// Types of the models of the Obsolete section.

/**
 * Подробиці відписки:
 *
 * - "unsubscribed" якщо email було щойно відписано,
 * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
 * - "was unsubscribed" якщо email уже було відписано раніше,
 * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
 */
export declare const ObsoleteUnsubscribedSetMessage: Readonly<{
  UNSUBSCRIBED: "unsubscribed";
  WAS_INACTIVE: "was inactive";
  WAS_UNSUBSCRIBED: "was unsubscribed";
  ADDED_AND_UNSUBSCRIBED: "added and unsubscribed";
}>;
/**
 * Подробиці відписки:
 *
 * - "unsubscribed" якщо email було щойно відписано,
 * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
 * - "was unsubscribed" якщо email уже було відписано раніше,
 * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
 */
export type ObsoleteUnsubscribedSetMessage = "unsubscribed" | "was inactive" | "was unsubscribed" | "added and unsubscribed";

/** ObsoleteUnsubscribedSetRequest in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedSetRequestJSON {
  "address": string;
}

/** Fields of new ObsoleteUnsubscribedSetRequest(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedSetRequestInit {
  /** Email, який має бути відписано. */
  address: string;
}

/** ObsoleteUnsubscribedSetRequest */
export declare class ObsoleteUnsubscribedSetRequest {
  constructor(data: ObsoleteUnsubscribedSetRequestInit);
  /** Email, який має бути відписано. */
  address: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedSetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedSetRequestJSON;
}

/** ObsoleteUnsubscribedSetResponse in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedSetResponseJSON {
  "status"?: string;
  "address"?: string;
  "message"?: ObsoleteUnsubscribedSetMessage;
}

/** Fields of new ObsoleteUnsubscribedSetResponse(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedSetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Відписаний email. */
  address?: string;
  /**
   * Подробиці відписки:
   *
   * - "unsubscribed" якщо email було щойно відписано,
   * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
   * - "was unsubscribed" якщо email уже було відписано раніше,
   * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
   */
  message?: ObsoleteUnsubscribedSetMessage;
}

/** ObsoleteUnsubscribedSetResponse */
export declare class ObsoleteUnsubscribedSetResponse {
  constructor(data?: ObsoleteUnsubscribedSetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Відписаний email. */
  address?: string;
  /**
   * Подробиці відписки:
   *
   * - "unsubscribed" якщо email було щойно відписано,
   * - "was inactive" якщо він уже був позначений як неактивний і немає сенсу відписувати,
   * - "was unsubscribed" якщо email уже було відписано раніше,
   * - "added and unsubscribed" якщо для цього email не зберігалося жодного більш раннього статусу, тому його було додано й одразу ж відписано.
   */
  message?: ObsoleteUnsubscribedSetMessage;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedSetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedSetResponseJSON;
}

/** ObsoleteUnsubscribedCheckRequest in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedCheckRequestJSON {
  "address": string;
}

/** Fields of new ObsoleteUnsubscribedCheckRequest(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedCheckRequestInit {
  /** Email, який необхідно перевірити. */
  address: string;
}

/** ObsoleteUnsubscribedCheckRequest */
export declare class ObsoleteUnsubscribedCheckRequest {
  constructor(data: ObsoleteUnsubscribedCheckRequestInit);
  /** Email, який необхідно перевірити. */
  address: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedCheckRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedCheckRequestJSON;
}

/** ObsoleteUnsubscribedCheckResponse in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedCheckResponseJSON {
  "status"?: string;
  "address"?: string;
  "is_unsubscribed"?: boolean;
}

/** Fields of new ObsoleteUnsubscribedCheckResponse(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedCheckResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email, який було перевірено. */
  address?: string;
  /** true якщо відписано, false якщо ні. */
  isUnsubscribed?: boolean;
}

/** ObsoleteUnsubscribedCheckResponse */
export declare class ObsoleteUnsubscribedCheckResponse {
  constructor(data?: ObsoleteUnsubscribedCheckResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email, який було перевірено. */
  address?: string;
  /** true якщо відписано, false якщо ні. */
  isUnsubscribed?: boolean;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedCheckResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedCheckResponseJSON;
}

/** ObsoleteUnsubscribedListRequest in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedListRequestJSON {
  "date_from"?: string;
}

/** Fields of new ObsoleteUnsubscribedListRequest(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedListRequestInit {
  /**
   * Дата у форматі РРРР-ММ-ДД, щоб отримати всі відписані адреси з "date_from" по сьогоднішній день.
   * Якщо параметр не вказати, період за замовчуванням буде з 00:00 сьогоднішнього дня за UTC.
   */
  dateFrom?: string;
}

/** ObsoleteUnsubscribedListRequest */
export declare class ObsoleteUnsubscribedListRequest {
  constructor(data?: ObsoleteUnsubscribedListRequestInit);
  /**
   * Дата у форматі РРРР-ММ-ДД, щоб отримати всі відписані адреси з "date_from" по сьогоднішній день.
   * Якщо параметр не вказати, період за замовчуванням буде з 00:00 сьогоднішнього дня за UTC.
   */
  dateFrom?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedListRequestJSON;
}

/** ObsoleteUnsubscribedListResponse in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedListResponseJSON {
  "status"?: string;
  "unsubscribed"?: Array<ObsoleteUnsubscribedListResponseUnsubscribedItemJSON>;
}

/** Fields of new ObsoleteUnsubscribedListResponse(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з даними відписаних. */
  unsubscribed?: Array<ObsoleteUnsubscribedListResponseUnsubscribedItem | ObsoleteUnsubscribedListResponseUnsubscribedItemJSON>;
}

/** ObsoleteUnsubscribedListResponse */
export declare class ObsoleteUnsubscribedListResponse {
  constructor(data?: ObsoleteUnsubscribedListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з даними відписаних. */
  unsubscribed?: Array<ObsoleteUnsubscribedListResponseUnsubscribedItem>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedListResponseJSON;
}

/** ObsoleteUnsubscribedListResponseUnsubscribedItem in the API format: the object sent and received as JSON. */
export interface ObsoleteUnsubscribedListResponseUnsubscribedItemJSON {
  "address"?: string;
  "unsubscribed_on"?: string;
}

/** Fields of new ObsoleteUnsubscribedListResponseUnsubscribedItem(): a nested model may be a plain object in the API format. */
export interface ObsoleteUnsubscribedListResponseUnsubscribedItemInit {
  /** Відписаний email. */
  address?: string;
  /** Дата й час відписки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC. */
  unsubscribedOn?: string;
}

/** ObsoleteUnsubscribedListResponseUnsubscribedItem */
export declare class ObsoleteUnsubscribedListResponseUnsubscribedItem {
  constructor(data?: ObsoleteUnsubscribedListResponseUnsubscribedItemInit);
  /** Відписаний email. */
  address?: string;
  /** Дата й час відписки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC. */
  unsubscribedOn?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ObsoleteUnsubscribedListResponseUnsubscribedItem;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ObsoleteUnsubscribedListResponseUnsubscribedItemJSON;
}
