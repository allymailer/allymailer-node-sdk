// Types of the models of the Suppression section.

/** SuppressionSetRequest in the API format: the object sent and received as JSON. */
export interface SuppressionSetRequestJSON {
  "email": string;
  "cause": string;
  "created"?: string;
}

/** Fields of new SuppressionSetRequest(): a nested model may be a plain object in the API format. */
export interface SuppressionSetRequestInit {
  /** Email-адреса, яку потрібно додати до списку недоступних. */
  email: string;
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
   */
  cause: string;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
}

/** SuppressionSetRequest */
export declare class SuppressionSetRequest {
  constructor(data: SuppressionSetRequestInit);
  /** Email-адреса, яку потрібно додати до списку недоступних. */
  email: string;
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
   */
  cause: string;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionSetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionSetRequestJSON;
}

/** SuppressionGetRequest in the API format: the object sent and received as JSON. */
export interface SuppressionGetRequestJSON {
  "email": string;
  "all_projects"?: boolean;
}

/** Fields of new SuppressionGetRequest(): a nested model may be a plain object in the API format. */
export interface SuppressionGetRequestInit {
  /** Email-адреса, для якої потрібно отримати дані про недоступність. */
  email: string;
  /**
   * Якщо у користувача увімкнено проєкти, all_projects=true дозволить шукати за даними всіх проєктів.
   * За замовчуванням: `False`.
   */
  allProjects?: boolean;
}

/** SuppressionGetRequest */
export declare class SuppressionGetRequest {
  constructor(data: SuppressionGetRequestInit);
  /** Email-адреса, для якої потрібно отримати дані про недоступність. */
  email: string;
  /**
   * Якщо у користувача увімкнено проєкти, all_projects=true дозволить шукати за даними всіх проєктів.
   * За замовчуванням: `False`.
   */
  allProjects?: boolean;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionGetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionGetRequestJSON;
}

/** SuppressionGetResponse in the API format: the object sent and received as JSON. */
export interface SuppressionGetResponseJSON {
  "status"?: string;
  "email"?: string;
  "suppressions"?: Array<SuppressionGetObjectJSON>;
}

/** Fields of new SuppressionGetResponse(): a nested model may be a plain object in the API format. */
export interface SuppressionGetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email-адреса, для якої було запитано дані про недоступність. */
  email?: string;
  /** Масив об'єктів з інформацією про недоступність. */
  suppressions?: Array<SuppressionGetObject | SuppressionGetObjectJSON>;
}

/** SuppressionGetResponse */
export declare class SuppressionGetResponse {
  constructor(data?: SuppressionGetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email-адреса, для якої було запитано дані про недоступність. */
  email?: string;
  /** Масив об'єктів з інформацією про недоступність. */
  suppressions?: Array<SuppressionGetObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionGetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionGetResponseJSON;
}

/** SuppressionGetObject in the API format: the object sent and received as JSON. */
export interface SuppressionGetObjectJSON {
  "project_id"?: string;
  "cause"?: string;
  "source"?: string;
  "is_deletable"?: boolean;
  "created"?: string;
}

/** Fields of new SuppressionGetObject(): a nested model may be a plain object in the API format. */
export interface SuppressionGetObjectInit {
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /** Чи можна видалити запис за допомогою виклику suppression/delete. */
  isDeletable?: boolean;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
}

/** Об'єкт з даними про блокування email. */
export declare class SuppressionGetObject {
  constructor(data?: SuppressionGetObjectInit);
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /** Чи можна видалити запис за допомогою виклику suppression/delete. */
  isDeletable?: boolean;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionGetObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionGetObjectJSON;
}

/** SuppressionListRequest in the API format: the object sent and received as JSON. */
export interface SuppressionListRequestJSON {
  "cause"?: string;
  "source"?: string;
  "start_time"?: string;
  "cursor"?: string;
  "limit"?: number;
}

/** Fields of new SuppressionListRequest(): a nested model may be a plain object in the API format. */
export interface SuppressionListRequestInit {
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /**
   * Дата у форматі РРРР-ММ-ДД гг:хх:сс, щоб отримати список блокування з "start_time" по сьогоднішній
   * день. Ігнорується, якщо параметр “cursor” не порожній.
   */
  startTime?: string;
  /**
   * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
   * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
   * значення поля "cursor" з попередньої порції.
   */
  cursor?: string;
  /** Максимум записів, що видаються за один раз, за замовчуванням 50. */
  limit?: number;
}

/** SuppressionListRequest */
export declare class SuppressionListRequest {
  constructor(data?: SuppressionListRequestInit);
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /**
   * Дата у форматі РРРР-ММ-ДД гг:хх:сс, щоб отримати список блокування з "start_time" по сьогоднішній
   * день. Ігнорується, якщо параметр “cursor” не порожній.
   */
  startTime?: string;
  /**
   * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
   * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
   * значення поля "cursor" з попередньої порції.
   */
  cursor?: string;
  /** Максимум записів, що видаються за один раз, за замовчуванням 50. */
  limit?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionListRequestJSON;
}

/** SuppressionListResponse in the API format: the object sent and received as JSON. */
export interface SuppressionListResponseJSON {
  "status"?: string;
  "suppressions"?: Array<SuppressionListObjectJSON>;
  "cursor"?: string;
}

/** Fields of new SuppressionListResponse(): a nested model may be a plain object in the API format. */
export interface SuppressionListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з інформацією про недоступність. */
  suppressions?: Array<SuppressionListObject | SuppressionListObjectJSON>;
  /**
   * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
   * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
   * значення поля "cursor" з попередньої порції.
   */
  cursor?: string;
}

/** SuppressionListResponse */
export declare class SuppressionListResponse {
  constructor(data?: SuppressionListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів з інформацією про недоступність. */
  suppressions?: Array<SuppressionListObject>;
  /**
   * Параметр указує, з якої позиції починати вибірку. Має бути порожнім або відсутнім для отримання
   * першої порції даних; для отримання другої та наступних порцій його необхідно задавати, підставляючи
   * значення поля "cursor" з попередньої порції.
   */
  cursor?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionListResponseJSON;
}

/** SuppressionListObject in the API format: the object sent and received as JSON. */
export interface SuppressionListObjectJSON {
  "email"?: string;
  "cause"?: string;
  "source"?: string;
  "is_deletable"?: boolean;
  "created"?: string;
}

/** Fields of new SuppressionListObject(): a nested model may be a plain object in the API format. */
export interface SuppressionListObjectInit {
  /** Email-адреса, яка знаходиться в списку недоступних. */
  email?: string;
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /** Чи можна видалити запис за допомогою виклику suppression/delete. */
  isDeletable?: boolean;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
}

/** Об'єкт з даними про блокування email. */
export declare class SuppressionListObject {
  constructor(data?: SuppressionListObjectInit);
  /** Email-адреса, яка знаходиться в списку недоступних. */
  email?: string;
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
   */
  cause?: string;
  /**
   * Джерело потрапляння до списку недоступних. Одне з таких:
   *
   * - __user__ - дії користувача за допомогою методу [suppression/set](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set);
   * - __system__ - надсилання на цю адресу заборонено системою, наприклад через багаторазові недоставки;
   * - __subscriber__ - у зв'язку з діями отримувача. В одному з попередніх листів адресат натиснув “Це спам” або відписався.
   */
  source?: string;
  /** Чи можна видалити запис за допомогою виклику suppression/delete. */
  isDeletable?: boolean;
  /** Коли було встановлено недоступність, у часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  created?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionListObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionListObjectJSON;
}

/** SuppressionDeleteRequest in the API format: the object sent and received as JSON. */
export interface SuppressionDeleteRequestJSON {
  "email": string;
}

/** Fields of new SuppressionDeleteRequest(): a nested model may be a plain object in the API format. */
export interface SuppressionDeleteRequestInit {
  /** Email-адреса, яку потрібно видалити зі списку недоступних. */
  email: string;
}

/** SuppressionDeleteRequest */
export declare class SuppressionDeleteRequest {
  constructor(data: SuppressionDeleteRequestInit);
  /** Email-адреса, яку потрібно видалити зі списку недоступних. */
  email: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SuppressionDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SuppressionDeleteRequestJSON;
}
