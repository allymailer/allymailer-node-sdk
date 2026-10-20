// Types of the models of the System section.
import type { EmailCounterMode } from "../../common/models.js";

/** SystemPingResponse in the API format: the object sent and received as JSON. */
export interface SystemPingResponseJSON {
  "status"?: string;
  "user_id"?: number;
}

/** Fields of new SystemPingResponse(): a nested model may be a plain object in the API format. */
export interface SystemPingResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
}

/** SystemPingResponse */
export declare class SystemPingResponse {
  constructor(data?: SystemPingResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SystemPingResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SystemPingResponseJSON;
}

/** SystemInfoResponse in the API format: the object sent and received as JSON. */
export interface SystemInfoResponseJSON {
  "status"?: string;
  "user_id"?: number;
  "email"?: string;
  "project_id"?: string;
  "project_name"?: string;
  "project_accounting"?: ProjectAccountingObjectJSON;
  "accounting"?: SystemInfoResponseAccountingJSON;
}

/** Fields of new SystemInfoResponse(): a nested model may be a plain object in the API format. */
export interface SystemInfoResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Email користувача. */
  email?: string;
  /**
   * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. Присутній лише якщо
   * API-ключ, використаний для запиту, був API-ключем проєкту.
   */
  projectId?: string;
  /**
   * Назва проєкту, унікальна в межах облікового запису користувача. Присутня лише якщо API-ключ,
   * використаний для запиту, був API-ключем проєкту.
   */
  projectName?: string;
  /**
   * Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту,
   * був API-ключем проєкту.
   */
  projectAccounting?: ProjectAccountingObject | ProjectAccountingObjectJSON;
  /**
   * Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був
   * API-ключем користувача.
   */
  accounting?: SystemInfoResponseAccounting | SystemInfoResponseAccountingJSON;
}

/** SystemInfoResponse */
export declare class SystemInfoResponse {
  constructor(data?: SystemInfoResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Унікальний ідентифікатор користувача. */
  userId?: number;
  /** Email користувача. */
  email?: string;
  /**
   * Унікальний ідентифікатор проєкту, ASCII-рядок до 36 символів завдовжки. Присутній лише якщо
   * API-ключ, використаний для запиту, був API-ключем проєкту.
   */
  projectId?: string;
  /**
   * Назва проєкту, унікальна в межах облікового запису користувача. Присутня лише якщо API-ключ,
   * використаний для запиту, був API-ключем проєкту.
   */
  projectName?: string;
  /**
   * Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту,
   * був API-ключем проєкту.
   */
  projectAccounting?: ProjectAccountingObject;
  /**
   * Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був
   * API-ключем користувача.
   */
  accounting?: SystemInfoResponseAccounting;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SystemInfoResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SystemInfoResponseJSON;
}

/** ProjectAccountingObject in the API format: the object sent and received as JSON. */
export interface ProjectAccountingObjectJSON {
  "email_counter"?: number;
  "email_counter_limit"?: number;
  "email_counter_mode"?: EmailCounterMode;
}

/** Fields of new ProjectAccountingObject(): a nested model may be a plain object in the API format. */
export interface ProjectAccountingObjectInit {
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
}

/**
 * Об'єкт із властивостями лічильника листів. Присутній лише якщо API-ключ, використаний для запиту,
 * був API-ключем проєкту.
 */
export declare class ProjectAccountingObject {
  constructor(data?: ProjectAccountingObjectInit);
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
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): ProjectAccountingObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): ProjectAccountingObjectJSON;
}

/** SystemInfoResponseAccounting in the API format: the object sent and received as JSON. */
export interface SystemInfoResponseAccountingJSON {
  "period_start"?: string;
  "period_end"?: string;
  "emails_included"?: number;
  "emails_sent"?: number;
}

/** Fields of new SystemInfoResponseAccounting(): a nested model may be a plain object in the API format. */
export interface SystemInfoResponseAccountingInit {
  /** Дата й час початку періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  periodStart?: string;
  /** Дата й час кінця періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  periodEnd?: string;
  /** Кількість листів, включених в обліковий період. */
  emailsIncluded?: number;
  /**
   * Кількість листів, надісланих за обліковий період. Може бути більшою за emails_included у разі
   * перевищення.
   */
  emailsSent?: number;
}

/**
 * Об'єкт з властивостями періоду обліку. Присутній лише якщо API-ключ, використаний для запиту, був
 * API-ключем користувача.
 */
export declare class SystemInfoResponseAccounting {
  constructor(data?: SystemInfoResponseAccountingInit);
  /** Дата й час початку періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  periodStart?: string;
  /** Дата й час кінця періоду обліку в часовому поясі UTC у форматі "РРРР-ММ-ДД гг:хх:сс". */
  periodEnd?: string;
  /** Кількість листів, включених в обліковий період. */
  emailsIncluded?: number;
  /**
   * Кількість листів, надісланих за обліковий період. Може бути більшою за emails_included у разі
   * перевищення.
   */
  emailsSent?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): SystemInfoResponseAccounting;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): SystemInfoResponseAccountingJSON;
}
