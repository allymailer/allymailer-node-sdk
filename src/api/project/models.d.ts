// Types of the models of the Project section.
import type { EmailCounterMode } from "../../common/models.js";

/** ProjectCreateRequest in the API format: the object sent and received as JSON. */
export interface ProjectCreateRequestJSON {
  "project": ProjectObjectJSON;
}

/** Fields of new ProjectCreateRequest(): a nested model may be a plain object in the API format. */
export interface ProjectCreateRequestInit {
  /** Об'єкт із властивостями проєкту. */
  project: ProjectObject | ProjectObjectJSON;
}

/** ProjectCreateRequest */
export declare class ProjectCreateRequest {
  constructor(data: ProjectCreateRequestInit);
  /** Об'єкт із властивостями проєкту. */
  project: ProjectObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectCreateRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectCreateRequestJSON;
}

/** ProjectObject in the API format: the object sent and received as JSON. */
export interface ProjectObjectJSON {
  "name": string;
  "country"?: string;
  "send_enabled"?: boolean;
  "custom_unsubscribe_url_enabled"?: boolean;
  "backend_domain_id"?: number;
  "unsubscribe_page_id"?: number;
}

/** Fields of new ProjectObject(): a nested model may be a plain object in the API format. */
export interface ProjectObjectInit {
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
}

/** Об'єкт із властивостями проєкту. */
export declare class ProjectObject {
  constructor(data: ProjectObjectInit);
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectObjectJSON;
}

/** ProjectCreateResponse in the API format: the object sent and received as JSON. */
export interface ProjectCreateResponseJSON {
  "status"?: string;
  "project_id"?: string;
  "project_api_key"?: string;
}

/** Fields of new ProjectCreateResponse(): a nested model may be a plain object in the API format. */
export interface ProjectCreateResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
  /**
   * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
   * крім project-методів.
   */
  projectApiKey?: string;
}

/** ProjectCreateResponse */
export declare class ProjectCreateResponse {
  constructor(data?: ProjectCreateResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  projectId?: string;
  /**
   * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
   * крім project-методів.
   */
  projectApiKey?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectCreateResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectCreateResponseJSON;
}

/** ProjectUpdateRequest in the API format: the object sent and received as JSON. */
export interface ProjectUpdateRequestJSON {
  "project_id"?: string;
  "project_api_key"?: string;
  "project": ProjectUpdateObjectJSON;
}

/** Fields of new ProjectUpdateRequest(): a nested model may be a plain object in the API format. */
export interface ProjectUpdateRequestInit {
  /**
   * Ідентифікатор проєкту, що оновлюється. Проєкт має бути ідентифіковано або цим полем project_id, або
   * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectId?: string;
  /**
   * Необов'язковий API-ключ проєкту, що оновлюється. Проєкт має бути ідентифіковано або полем
   * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectApiKey?: string;
  /** Об'єкт із властивостями проєкту. */
  project: ProjectUpdateObject | ProjectUpdateObjectJSON;
}

/** ProjectUpdateRequest */
export declare class ProjectUpdateRequest {
  constructor(data: ProjectUpdateRequestInit);
  /**
   * Ідентифікатор проєкту, що оновлюється. Проєкт має бути ідентифіковано або цим полем project_id, або
   * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectId?: string;
  /**
   * Необов'язковий API-ключ проєкту, що оновлюється. Проєкт має бути ідентифіковано або полем
   * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectApiKey?: string;
  /** Об'єкт із властивостями проєкту. */
  project: ProjectUpdateObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectUpdateRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectUpdateRequestJSON;
}

/** ProjectUpdateObject in the API format: the object sent and received as JSON. */
export interface ProjectUpdateObjectJSON {
  "name": string;
  "country"?: string;
  "send_enabled"?: boolean;
  "custom_unsubscribe_url_enabled"?: boolean;
  "backend_domain_id"?: number;
  "unsubscribe_page_id"?: number;
  "email_counter"?: number;
  "email_counter_limit"?: number;
  "email_counter_mode"?: EmailCounterMode;
}

/** Fields of new ProjectUpdateObject(): a nested model may be a plain object in the API format. */
export interface ProjectUpdateObjectInit {
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
  /**
   * Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. Приймає лише
   * значення 0 (тобто скидання лічильника в нуль) або оновлюється автоматично, залежно від режиму роботи
   * лічильника, заданого параметром 'email_counter_mode'. Якщо поле не передано в запиті або передано
   * null, то значення лічильника не змінюється.
   */
  emailCounter?: number;
  /**
   * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
   * припиняється. Приймається будь-яке невід'ємне 64-бітне ціле число. Значення 0 означає відсутність
   * ліміту. Якщо поле не передано в запиті або передано null, то значення ліміту не змінюється.
   * За замовчуванням: `0`.
   */
  emailCounterLimit?: number;
  /**
   * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
   * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
   * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
   * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
   * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
   * змінюється.
   * За замовчуванням: `default`.
   */
  emailCounterMode?: EmailCounterMode;
}

/** Об'єкт із властивостями проєкту. */
export declare class ProjectUpdateObject {
  constructor(data: ProjectUpdateObjectInit);
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
  /**
   * Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. Приймає лише
   * значення 0 (тобто скидання лічильника в нуль) або оновлюється автоматично, залежно від режиму роботи
   * лічильника, заданого параметром 'email_counter_mode'. Якщо поле не передано в запиті або передано
   * null, то значення лічильника не змінюється.
   */
  emailCounter?: number;
  /**
   * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
   * припиняється. Приймається будь-яке невід'ємне 64-бітне ціле число. Значення 0 означає відсутність
   * ліміту. Якщо поле не передано в запиті або передано null, то значення ліміту не змінюється.
   * За замовчуванням: `0`.
   */
  emailCounterLimit?: number;
  /**
   * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
   * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
   * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
   * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
   * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
   * змінюється.
   * За замовчуванням: `default`.
   */
  emailCounterMode?: EmailCounterMode;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectUpdateObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectUpdateObjectJSON;
}

/** ProjectUpdateResponse in the API format: the object sent and received as JSON. */
export interface ProjectUpdateResponseJSON {
  "status"?: string;
  "project_api_key"?: string;
}

/** Fields of new ProjectUpdateResponse(): a nested model may be a plain object in the API format. */
export interface ProjectUpdateResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * API-ключ проєкту. Повертається лише в разі, якщо в параметрі запиту був project_api_key. Якщо ж
   * проєкт було ідентифіковано через project_id, то не повертається.
   */
  projectApiKey?: string;
}

/** ProjectUpdateResponse */
export declare class ProjectUpdateResponse {
  constructor(data?: ProjectUpdateResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * API-ключ проєкту. Повертається лише в разі, якщо в параметрі запиту був project_api_key. Якщо ж
   * проєкт було ідентифіковано через project_id, то не повертається.
   */
  projectApiKey?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectUpdateResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectUpdateResponseJSON;
}

/** ProjectListRequest in the API format: the object sent and received as JSON. */
export interface ProjectListRequestJSON {
  "project_id"?: string;
  "project_api_key"?: string;
}

/** Fields of new ProjectListRequest(): a nested model may be a plain object in the API format. */
export interface ProjectListRequestInit {
  /** Опціональна можливість указати project_id для включення до списку лише вказаного проєкту. */
  projectId?: string;
  /** Опціональна можливість указати project_api_key для включення до списку лише вказаного проєкту. */
  projectApiKey?: string;
}

/** ProjectListRequest */
export declare class ProjectListRequest {
  constructor(data?: ProjectListRequestInit);
  /** Опціональна можливість указати project_id для включення до списку лише вказаного проєкту. */
  projectId?: string;
  /** Опціональна можливість указати project_api_key для включення до списку лише вказаного проєкту. */
  projectApiKey?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectListRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectListRequestJSON;
}

/** ProjectListResponse in the API format: the object sent and received as JSON. */
export interface ProjectListResponseJSON {
  "status"?: string;
  "projects"?: Array<ProjectListObjectJSON>;
}

/** Fields of new ProjectListResponse(): a nested model may be a plain object in the API format. */
export interface ProjectListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів, де кожен об'єкт відповідає окремому проєкту. */
  projects?: Array<ProjectListObject | ProjectListObjectJSON>;
}

/** ProjectListResponse */
export declare class ProjectListResponse {
  constructor(data?: ProjectListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Масив об'єктів, де кожен об'єкт відповідає окремому проєкту. */
  projects?: Array<ProjectListObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectListResponseJSON;
}

/** ProjectListObject in the API format: the object sent and received as JSON. */
export interface ProjectListObjectJSON {
  "id"?: string;
  "api_key"?: string;
  "name"?: string;
  "country"?: string;
  "reg_time"?: string;
  "send_enabled"?: boolean;
  "custom_unsubscribe_url_enabled"?: boolean;
  "backend_domain_id"?: number;
  "email_counter"?: number;
  "email_counter_limit"?: number;
  "email_counter_mode"?: EmailCounterMode;
  "unsubscribe_page_id"?: number;
}

/** Fields of new ProjectListObject(): a nested model may be a plain object in the API format. */
export interface ProjectListObjectInit {
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  id?: string;
  /**
   * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
   * крім project-методів.
   */
  apiKey?: string;
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name?: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /** Дата й час створення проєкту в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  regTime?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /** Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. */
  emailCounter?: number;
  /**
   * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
   * припиняється. Значення 0 (за замовчуванням) означає відсутність ліміту.
   */
  emailCounterLimit?: number;
  /**
   * 'default' - лічильник автоматично скидається в нуль на початку кожного облікового періоду,
   * 'permanent' - лічильник ніколи не скидається автоматично.
   * За замовчуванням: `default`.
   */
  emailCounterMode?: EmailCounterMode;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
}

/** ProjectListObject */
export declare class ProjectListObject {
  constructor(data?: ProjectListObjectInit);
  /** Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. */
  id?: string;
  /**
   * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
   * крім project-методів.
   */
  apiKey?: string;
  /** Назва проєкту, унікальна в межах облікового запису користувача. */
  name?: string;
  /**
   * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
   * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
   * європейських країн.
   */
  country?: string;
  /** Дата й час створення проєкту в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  regTime?: string;
  /**
   * Чи дозволено надсилання листів для проєкту.
   * За замовчуванням: `True`.
   */
  sendEnabled?: boolean;
  /**
   * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
   * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
   * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
   * [тут](https://docs.allymailer.com.ua/ua/unsubscribe-link). Якщо ви не вказуєте значення
   * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
   * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
   * відписки — то й у проєкту посилання відписки буде вимкнено).
   */
  customUnsubscribeUrlEnabled?: boolean;
  /**
   * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
   * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
   * буде призначено дефолтний backend-домен за замовчуванням.
   */
  backendDomainId?: number;
  /** Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. */
  emailCounter?: number;
  /**
   * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
   * припиняється. Значення 0 (за замовчуванням) означає відсутність ліміту.
   */
  emailCounterLimit?: number;
  /**
   * 'default' - лічильник автоматично скидається в нуль на початку кожного облікового періоду,
   * 'permanent' - лічильник ніколи не скидається автоматично.
   * За замовчуванням: `default`.
   */
  emailCounterMode?: EmailCounterMode;
  /**
   * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
   * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  unsubscribePageId?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectListObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectListObjectJSON;
}

/** ProjectDeleteRequest in the API format: the object sent and received as JSON. */
export interface ProjectDeleteRequestJSON {
  "project_id"?: string;
  "project_api_key"?: string;
}

/** Fields of new ProjectDeleteRequest(): a nested model may be a plain object in the API format. */
export interface ProjectDeleteRequestInit {
  /**
   * Ідентифікатор проєкту, що видаляється. Проєкт має бути ідентифіковано або цим полем project_id, або
   * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectId?: string;
  /**
   * Необов'язковий API-ключ проєкту, що видаляється. Проєкт має бути ідентифіковано або полем
   * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectApiKey?: string;
}

/** ProjectDeleteRequest */
export declare class ProjectDeleteRequest {
  constructor(data?: ProjectDeleteRequestInit);
  /**
   * Ідентифікатор проєкту, що видаляється. Проєкт має бути ідентифіковано або цим полем project_id, або
   * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectId?: string;
  /**
   * Необов'язковий API-ключ проєкту, що видаляється. Проєкт має бути ідентифіковано або полем
   * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  projectApiKey?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectDeleteRequestJSON;
}
