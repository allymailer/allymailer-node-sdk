// Models of the System section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** SystemPingResponse */
export class SystemPingResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {number} [data.userId] Унікальний ідентифікатор користувача.
   */
  constructor({ status, userId } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Унікальний ідентифікатор користувача.
     * @type {number|undefined}
     */
    this.userId = userId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SystemPingResponse}
   */
  static fromJSON(data) {
    return new SystemPingResponse({
      status: data["status"],
      userId: data["user_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "user_id": this.userId,
    });
  }
}

/** SystemInfoResponse */
export class SystemInfoResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {number} [data.userId] Унікальний ідентифікатор користувача.
   * @param {string} [data.email] Email користувача.
   * @param {string} [data.projectId] Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем проєкту.
   * @param {string} [data.projectName] Назва проєкту, унікальна в межах облікового запису користувача. Присутня лише якщо API-ключ, використаний для запиту, був API-ключем проєкту.
   * @param {ProjectAccountingObject} [data.projectAccounting] Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем проєкту.
   * @param {SystemInfoResponseAccounting} [data.accounting] Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був API-ключем користувача.
   */
  constructor({ status, userId, email, projectId, projectName, projectAccounting, accounting } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Унікальний ідентифікатор користувача.
     * @type {number|undefined}
     */
    this.userId = userId;
    /**
     * Email користувача.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. Присутній лише якщо
     * API-ключ, використаний для запиту, був API-ключем проєкту.
     * @type {string|undefined}
     */
    this.projectId = projectId;
    /**
     * Назва проєкту, унікальна в межах облікового запису користувача. Присутня лише якщо API-ключ,
     * використаний для запиту, був API-ключем проєкту.
     * @type {string|undefined}
     */
    this.projectName = projectName;
    /**
     * Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту,
     * був API-ключем проєкту.
     * @type {ProjectAccountingObject|undefined}
     */
    this.projectAccounting = projectAccounting == null ? projectAccounting : toModel(projectAccounting, ProjectAccountingObject);
    /**
     * Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був
     * API-ключем користувача.
     * @type {SystemInfoResponseAccounting|undefined}
     */
    this.accounting = accounting == null ? accounting : toModel(accounting, SystemInfoResponseAccounting);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SystemInfoResponse}
   */
  static fromJSON(data) {
    return new SystemInfoResponse({
      status: data["status"],
      userId: data["user_id"],
      email: data["email"],
      projectId: data["project_id"],
      projectName: data["project_name"],
      projectAccounting: data["project_accounting"] == null ? undefined : toModel(data["project_accounting"], ProjectAccountingObject),
      accounting: data["accounting"] == null ? undefined : toModel(data["accounting"], SystemInfoResponseAccounting),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "user_id": this.userId,
      "email": this.email,
      "project_id": this.projectId,
      "project_name": this.projectName,
      "project_accounting": this.projectAccounting == null ? undefined : toPlain(this.projectAccounting),
      "accounting": this.accounting == null ? undefined : toPlain(this.accounting),
    });
  }
}

/**
 * Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту,
 * був API-ключем проєкту.
 */
export class ProjectAccountingObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.emailCounter] Значення лічильника листів для проєкту, збільшується під час надсилання кожного листа.
   * @param {number} [data.emailCounterLimit] Дозволяє обмежити кількість надісланих проєктом листів. У разі досягнення цього ліміту надсилання припиняється. Значення 0 (за замовчуванням) означає відсутність ліміту.
   * @param {"default"|"permanent"} [data.emailCounterMode] 'default' - лічильник автоматично скидається в нуль на початку кожного облікового періоду, 'permanent' - лічильник ніколи не скидається автоматично.
   */
  constructor({ emailCounter, emailCounterLimit, emailCounterMode } = {}) {
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
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {ProjectAccountingObject}
   */
  static fromJSON(data) {
    return new ProjectAccountingObject({
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
      "email_counter": this.emailCounter,
      "email_counter_limit": this.emailCounterLimit,
      "email_counter_mode": this.emailCounterMode,
    });
  }
}

/**
 * Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був
 * API-ключем користувача.
 */
export class SystemInfoResponseAccounting {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.periodStart] Дата й час початку періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   * @param {string} [data.periodEnd] Дата й час кінця періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
   * @param {number} [data.emailsIncluded] Кількість листів, включених в обліковий період.
   * @param {number} [data.emailsSent] Кількість листів, надісланих за обліковий період. Може бути більшою за emails_included у разі перевищення.
   */
  constructor({ periodStart, periodEnd, emailsIncluded, emailsSent } = {}) {
    /**
     * Дата й час початку періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.periodStart = periodStart;
    /**
     * Дата й час кінця періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс".
     * @type {string|undefined}
     */
    this.periodEnd = periodEnd;
    /**
     * Кількість листів, включених в обліковий період.
     * @type {number|undefined}
     */
    this.emailsIncluded = emailsIncluded;
    /**
     * Кількість листів, надісланих за обліковий період. Може бути більшою за emails_included у разі
     * перевищення.
     * @type {number|undefined}
     */
    this.emailsSent = emailsSent;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SystemInfoResponseAccounting}
   */
  static fromJSON(data) {
    return new SystemInfoResponseAccounting({
      periodStart: data["period_start"],
      periodEnd: data["period_end"],
      emailsIncluded: data["emails_included"],
      emailsSent: data["emails_sent"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "period_start": this.periodStart,
      "period_end": this.periodEnd,
      "emails_included": this.emailsIncluded,
      "emails_sent": this.emailsSent,
    });
  }
}
