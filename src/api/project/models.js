// Models of the Project section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** ProjectCreateRequest */
export class ProjectCreateRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {ProjectObject} data.project Об'єкт із властивостями проєкту.
   */
  constructor({ project } = {}) {
    /**
     * Об'єкт із властивостями проєкту.
     * @type {ProjectObject|undefined}
     */
    this.project = project == null ? project : toModel(project, ProjectObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectCreateRequest}
   */
  static fromJSON(data) {
    return new ProjectCreateRequest({
      project: data["project"] == null ? undefined : toModel(data["project"], ProjectObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "project": this.project == null ? undefined : toPlain(this.project),
    });
  }
}

/** Об'єкт із властивостями проєкту. */
export class ProjectObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.name Назва проєкту, унікальна в межах облікового запису користувача.
   * @param {string} [data.country] Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для європейських країн.
   * @param {boolean} [data.sendEnabled] Чи дозволено надсилання листів для проєкту.
   * @param {boolean} [data.customUnsubscribeUrlEnabled] Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див. [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання відписки — то й у проєкту посилання відписки буде вимкнено).
   * @param {number} [data.backendDomainId] Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено дефолтний backend-домен за замовчуванням.
   * @param {number} [data.unsubscribePageId] Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  constructor({ name, country, sendEnabled, customUnsubscribeUrlEnabled, backendDomainId, unsubscribePageId } = {}) {
    /**
     * Назва проєкту, унікальна в межах облікового запису користувача.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
     * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
     * європейських країн.
     * @type {string|undefined}
     */
    this.country = country;
    /**
     * Чи дозволено надсилання листів для проєкту.
     * За замовчуванням: `True`.
     * @type {boolean|undefined}
     */
    this.sendEnabled = sendEnabled;
    /**
     * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
     * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
     * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
     * [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення
     * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
     * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
     * відписки — то й у проєкту посилання відписки буде вимкнено).
     * @type {boolean|undefined}
     */
    this.customUnsubscribeUrlEnabled = customUnsubscribeUrlEnabled;
    /**
     * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
     * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
     * буде призначено дефолтний backend-домен за замовчуванням.
     * @type {number|undefined}
     */
    this.backendDomainId = backendDomainId;
    /**
     * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
     * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
     * @type {number|undefined}
     */
    this.unsubscribePageId = unsubscribePageId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectObject}
   */
  static fromJSON(data) {
    return new ProjectObject({
      name: data["name"],
      country: data["country"],
      sendEnabled: data["send_enabled"],
      customUnsubscribeUrlEnabled: data["custom_unsubscribe_url_enabled"],
      backendDomainId: data["backend_domain_id"],
      unsubscribePageId: data["unsubscribe_page_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "name": this.name,
      "country": this.country,
      "send_enabled": this.sendEnabled,
      "custom_unsubscribe_url_enabled": this.customUnsubscribeUrlEnabled,
      "backend_domain_id": this.backendDomainId,
      "unsubscribe_page_id": this.unsubscribePageId,
    });
  }
}

/** ProjectCreateResponse */
export class ProjectCreateResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.projectId] Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
   * @param {string} [data.projectApiKey] API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах, крім project-методів.
   */
  constructor({ status, projectId, projectApiKey } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
     * крім project-методів.
     * @type {string|undefined}
     */
    this.projectApiKey = projectApiKey;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectCreateResponse}
   */
  static fromJSON(data) {
    return new ProjectCreateResponse({
      status: data["status"],
      projectId: data["project_id"],
      projectApiKey: data["project_api_key"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "project_id": this.projectId,
      "project_api_key": this.projectApiKey,
    });
  }
}

/** ProjectUpdateRequest */
export class ProjectUpdateRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.projectId] Ідентифікатор проєкту, що оновлюється. Проєкт має бути ідентифіковано або цим полем project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   * @param {string} [data.projectApiKey] Необов'язковий API-ключ проєкту, що оновлюється. Проєкт має бути ідентифіковано або полем project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   * @param {ProjectUpdateObject} data.project Об'єкт із властивостями проєкту.
   */
  constructor({ projectId, projectApiKey, project } = {}) {
    /**
     * Ідентифікатор проєкту, що оновлюється. Проєкт має бути ідентифіковано або цим полем project_id, або
     * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Необов'язковий API-ключ проєкту, що оновлюється. Проєкт має бути ідентифіковано або полем
     * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
     * @type {string|undefined}
     */
    this.projectApiKey = projectApiKey;
    /**
     * Об'єкт із властивостями проєкту.
     * @type {ProjectUpdateObject|undefined}
     */
    this.project = project == null ? project : toModel(project, ProjectUpdateObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectUpdateRequest}
   */
  static fromJSON(data) {
    return new ProjectUpdateRequest({
      projectId: data["project_id"],
      projectApiKey: data["project_api_key"],
      project: data["project"] == null ? undefined : toModel(data["project"], ProjectUpdateObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "project_id": this.projectId,
      "project_api_key": this.projectApiKey,
      "project": this.project == null ? undefined : toPlain(this.project),
    });
  }
}

/** Об'єкт із властивостями проєкту. */
export class ProjectUpdateObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.name Назва проєкту, унікальна в межах облікового запису користувача.
   * @param {string} [data.country] Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для європейських країн.
   * @param {boolean} [data.sendEnabled] Чи дозволено надсилання листів для проєкту.
   * @param {boolean} [data.customUnsubscribeUrlEnabled] Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див. [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання відписки — то й у проєкту посилання відписки буде вимкнено).
   * @param {number} [data.backendDomainId] Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено дефолтний backend-домен за замовчуванням.
   * @param {number} [data.unsubscribePageId] Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   * @param {number} [data.emailCounter] Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. Приймає лише значення 0 (тобто скидання лічильника в нуль) або оновлюється автоматично, залежно від режиму роботи лічильника, заданого параметром 'email_counter_mode'. Якщо поле не передано в запиті або передано null, то значення лічильника не змінюється.
   * @param {number} [data.emailCounterLimit] Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання припиняється. Приймається будь-яке невід'ємне 64-бітне ціле число. Значення 0 означає відсутність ліміту. Якщо поле не передано в запиті або передано null, то значення ліміту не змінюється.
   * @param {"default"|"permanent"} [data.emailCounterMode] Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник: автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не змінюється.
   */
  constructor({ name, country, sendEnabled, customUnsubscribeUrlEnabled, backendDomainId, unsubscribePageId, emailCounter, emailCounterLimit, emailCounterMode } = {}) {
    /**
     * Назва проєкту, унікальна в межах облікового запису користувача.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
     * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
     * європейських країн.
     * @type {string|undefined}
     */
    this.country = country;
    /**
     * Чи дозволено надсилання листів для проєкту.
     * За замовчуванням: `True`.
     * @type {boolean|undefined}
     */
    this.sendEnabled = sendEnabled;
    /**
     * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
     * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
     * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
     * [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення
     * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
     * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
     * відписки — то й у проєкту посилання відписки буде вимкнено).
     * @type {boolean|undefined}
     */
    this.customUnsubscribeUrlEnabled = customUnsubscribeUrlEnabled;
    /**
     * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
     * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
     * буде призначено дефолтний backend-домен за замовчуванням.
     * @type {number|undefined}
     */
    this.backendDomainId = backendDomainId;
    /**
     * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
     * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
     * @type {number|undefined}
     */
    this.unsubscribePageId = unsubscribePageId;
    /**
     * Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа. Приймає лише
     * значення 0 (тобто скидання лічильника в нуль) або оновлюється автоматично, залежно від режиму роботи
     * лічильника, заданого параметром 'email_counter_mode'. Якщо поле не передано в запиті або передано
     * null, то значення лічильника не змінюється.
     * @type {number|undefined}
     */
    this.emailCounter = emailCounter;
    /**
     * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
     * припиняється. Приймається будь-яке невід'ємне 64-бітне ціле число. Значення 0 означає відсутність
     * ліміту. Якщо поле не передано в запиті або передано null, то значення ліміту не змінюється.
     * За замовчуванням: `0`.
     * @type {number|undefined}
     */
    this.emailCounterLimit = emailCounterLimit;
    /**
     * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
     * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
     * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
     * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
     * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
     * змінюється.
     * За замовчуванням: `default`.
     * @type {"default"|"permanent"|undefined}
     */
    this.emailCounterMode = emailCounterMode;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectUpdateObject}
   */
  static fromJSON(data) {
    return new ProjectUpdateObject({
      name: data["name"],
      country: data["country"],
      sendEnabled: data["send_enabled"],
      customUnsubscribeUrlEnabled: data["custom_unsubscribe_url_enabled"],
      backendDomainId: data["backend_domain_id"],
      unsubscribePageId: data["unsubscribe_page_id"],
      emailCounter: data["email_counter"],
      emailCounterLimit: data["email_counter_limit"],
      emailCounterMode: data["email_counter_mode"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "name": this.name,
      "country": this.country,
      "send_enabled": this.sendEnabled,
      "custom_unsubscribe_url_enabled": this.customUnsubscribeUrlEnabled,
      "backend_domain_id": this.backendDomainId,
      "unsubscribe_page_id": this.unsubscribePageId,
      "email_counter": this.emailCounter,
      "email_counter_limit": this.emailCounterLimit,
      "email_counter_mode": this.emailCounterMode,
    });
  }
}

/** ProjectUpdateResponse */
export class ProjectUpdateResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.projectApiKey] API-ключ проєкту. Повертається лише в разі, якщо в параметрі запиту був project_api_key. Якщо ж проєкт було ідентифіковано через project_id, то не повертається.
   */
  constructor({ status, projectApiKey } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * API-ключ проєкту. Повертається лише в разі, якщо в параметрі запиту був project_api_key. Якщо ж
     * проєкт було ідентифіковано через project_id, то не повертається.
     * @type {string|undefined}
     */
    this.projectApiKey = projectApiKey;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectUpdateResponse}
   */
  static fromJSON(data) {
    return new ProjectUpdateResponse({
      status: data["status"],
      projectApiKey: data["project_api_key"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "project_api_key": this.projectApiKey,
    });
  }
}

/** ProjectListRequest */
export class ProjectListRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.projectId] Опціональна можливість указати project_id для включення до списку лише вказаного проєкту.
   * @param {string} [data.projectApiKey] Опціональна можливість указати project_api_key для включення до списку лише вказаного проєкту.
   */
  constructor({ projectId, projectApiKey } = {}) {
    /**
     * Опціональна можливість указати project_id для включення до списку лише вказаного проєкту.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Опціональна можливість указати project_api_key для включення до списку лише вказаного проєкту.
     * @type {string|undefined}
     */
    this.projectApiKey = projectApiKey;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectListRequest}
   */
  static fromJSON(data) {
    return new ProjectListRequest({
      projectId: data["project_id"],
      projectApiKey: data["project_api_key"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "project_id": this.projectId,
      "project_api_key": this.projectApiKey,
    });
  }
}

/** ProjectListResponse */
export class ProjectListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {ProjectListObject[]} [data.projects] Масив об'єктів, де кожен об'єкт відповідає окремому проєкту.
   */
  constructor({ status, projects } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів, де кожен об'єкт відповідає окремому проєкту.
     * @type {ProjectListObject[]|undefined}
     */
    this.projects = projects == null ? projects : projects.map((item0) => toModel(item0, ProjectListObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectListResponse}
   */
  static fromJSON(data) {
    return new ProjectListResponse({
      status: data["status"],
      projects: data["projects"] == null ? undefined : data["projects"].map((item0) => toModel(item0, ProjectListObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "projects": this.projects == null ? undefined : this.projects.map((item0) => toPlain(item0)),
    });
  }
}

/** ProjectListObject */
export class ProjectListObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.id] Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
   * @param {string} [data.apiKey] API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах, крім project-методів.
   * @param {string} [data.name] Назва проєкту, унікальна в межах облікового запису користувача.
   * @param {string} [data.country] Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для європейських країн.
   * @param {string} [data.regTime] Дата й час створення проєкту в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   * @param {boolean} [data.sendEnabled] Чи дозволено надсилання листів для проєкту.
   * @param {boolean} [data.customUnsubscribeUrlEnabled] Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див. [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання відписки — то й у проєкту посилання відписки буде вимкнено).
   * @param {number} [data.backendDomainId] Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено дефолтний backend-домен за замовчуванням.
   * @param {number} [data.emailCounter] Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа.
   * @param {number} [data.emailCounterLimit] Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання припиняється. Значення 0 (за замовчуванням) означає відсутність ліміту.
   * @param {"default"|"permanent"} [data.emailCounterMode] 'default' - лічильник автоматично скидається в нуль на початку кожного облікового періоду, 'permanent' - лічильник ніколи не скидається автоматично.
   * @param {number} [data.unsubscribePageId] Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній — обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
   */
  constructor({ id, apiKey, name, country, regTime, sendEnabled, customUnsubscribeUrlEnabled, backendDomainId, emailCounter, emailCounterLimit, emailCounterMode, unsubscribePageId } = {}) {
    /**
     * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки.
     * @type {string|undefined}
     */
    this.id = id;
    /**
     * API-ключ проєкту. Ви можете використовувати цей ключ замість користувацького api_key у всіх методах,
     * крім project-методів.
     * @type {string|undefined}
     */
    this.apiKey = apiKey;
    /**
     * Назва проєкту, унікальна в межах облікового запису користувача.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Двобуквений код країни за правилами ISO-3166 alpha-2. Якщо задано, то AllyMailer обробляє
     * персональні дані проєкту відповідно до законів заданої країни — наприклад, відповідно до GDPR для
     * європейських країн.
     * @type {string|undefined}
     */
    this.country = country;
    /**
     * Дата й час створення проєкту в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.regTime = regTime;
    /**
     * Чи дозволено надсилання листів для проєкту.
     * За замовчуванням: `True`.
     * @type {boolean|undefined}
     */
    this.sendEnabled = sendEnabled;
    /**
     * Якщо false, то AllyMailer додає в кінець кожного листа системне посилання відписки. Значення true
     * вимикає автоматичне додавання системою посилання відписки в кінець листа й дозволяє використовувати
     * власне посилання відписки або надсилати листи зовсім без посилання відписки. Докладніше див.
     * [тут](https://docs.allymailer.com.ua/en/unsubscribe-link). Якщо ви не вказуєте значення
     * custom_unsubscribe_url_enabled під час створення проєкту — то це значення копіюється з головного
     * облікового запису (якщо в головному обліковому записі було встановлено примусове вимкнення посилання
     * відписки — то й у проєкту посилання відписки буде вимкнено).
     * @type {boolean|undefined}
     */
    this.customUnsubscribeUrlEnabled = customUnsubscribeUrlEnabled;
    /**
     * Унікальний ідентифікатор backend-домену, який визначає [домен посилань](/tracking-domains) або пул
     * [виділених IP-адрес](/dedicated-ip) за замовчуванням. Якщо відсутній — обліковому запису/проєкту
     * буде призначено дефолтний backend-домен за замовчуванням.
     * @type {number|undefined}
     */
    this.backendDomainId = backendDomainId;
    /**
     * Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа.
     * @type {number|undefined}
     */
    this.emailCounter = emailCounter;
    /**
     * Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання
     * припиняється. Значення 0 (за замовчуванням) означає відсутність ліміту.
     * @type {number|undefined}
     */
    this.emailCounterLimit = emailCounterLimit;
    /**
     * 'default' - лічильник автоматично скидається в нуль на початку кожного облікового періоду,
     * 'permanent' - лічильник ніколи не скидається автоматично.
     * За замовчуванням: `default`.
     * @type {"default"|"permanent"|undefined}
     */
    this.emailCounterMode = emailCounterMode;
    /**
     * Унікальний ідентифікатор, який визначає сторінку відписки за замовчуванням. Якщо відсутній —
     * обліковому запису/проєкту буде призначено системну сторінку відписки за замовчуванням.
     * @type {number|undefined}
     */
    this.unsubscribePageId = unsubscribePageId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectListObject}
   */
  static fromJSON(data) {
    return new ProjectListObject({
      id: data["id"],
      apiKey: data["api_key"],
      name: data["name"],
      country: data["country"],
      regTime: data["reg_time"],
      sendEnabled: data["send_enabled"],
      customUnsubscribeUrlEnabled: data["custom_unsubscribe_url_enabled"],
      backendDomainId: data["backend_domain_id"],
      emailCounter: data["email_counter"],
      emailCounterLimit: data["email_counter_limit"],
      emailCounterMode: data["email_counter_mode"],
      unsubscribePageId: data["unsubscribe_page_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "id": this.id,
      "api_key": this.apiKey,
      "name": this.name,
      "country": this.country,
      "reg_time": this.regTime,
      "send_enabled": this.sendEnabled,
      "custom_unsubscribe_url_enabled": this.customUnsubscribeUrlEnabled,
      "backend_domain_id": this.backendDomainId,
      "email_counter": this.emailCounter,
      "email_counter_limit": this.emailCounterLimit,
      "email_counter_mode": this.emailCounterMode,
      "unsubscribe_page_id": this.unsubscribePageId,
    });
  }
}

/** ProjectDeleteRequest */
export class ProjectDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.projectId] Ідентифікатор проєкту, що видаляється. Проєкт має бути ідентифіковано або цим полем project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   * @param {string} [data.projectApiKey] Необов'язковий API-ключ проєкту, що видаляється. Проєкт має бути ідентифіковано або полем project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
   */
  constructor({ projectId, projectApiKey } = {}) {
    /**
     * Ідентифікатор проєкту, що видаляється. Проєкт має бути ідентифіковано або цим полем project_id, або
     * полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Необов'язковий API-ключ проєкту, що видаляється. Проєкт має бути ідентифіковано або полем
     * project_id, або полем project_api_key. Ми рекомендуємо використовувати project_id, це безпечніше.
     * @type {string|undefined}
     */
    this.projectApiKey = projectApiKey;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectDeleteRequest}
   */
  static fromJSON(data) {
    return new ProjectDeleteRequest({
      projectId: data["project_id"],
      projectApiKey: data["project_api_key"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "project_id": this.projectId,
      "project_api_key": this.projectApiKey,
    });
  }
}
