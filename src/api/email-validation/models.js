// Models of the EmailValidation section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** EmailValidationSingleRequest */
export class EmailValidationSingleRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.email Email-адреса, яку необхідно перевірити.
   */
  constructor({ email } = {}) {
    /**
     * Email-адреса, яку необхідно перевірити.
     * @type {string|undefined}
     */
    this.email = email;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EmailValidationSingleRequest}
   */
  static fromJSON(data) {
    return new EmailValidationSingleRequest({
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

/** EmailValidationSingleResponse */
export class EmailValidationSingleResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.email] Email, що перевіряється.
   * @param {string} [data.result] Можливі статуси:  - "valid" - email-адреса дійсна, - "invalid" - email-адреса недійсна, - "suspicious" - email-адреса підозріла, - "unknown" - адресу не вдалося перевірити. Приймаючий сервер не відповів у межах припустимого часу перевірки.
   * @param {string} [data.cause] Можливі статуси:  - "no_mx_record" - у домену відсутні MX-записи, - "syntax_error" - адреса не відповідає стандартам email, - "possible_typo" - можливо, адресу введено з помилкою, - "mailbox_not_found" - адреса не існує, - "global_suppression" - адреса перманентно недоступна в сервісі через багаторазові недоставки, - "disposable" - одноразовий email, зазвичай такі адреси приймають пошту лише декілька хвилин, - "role" - загальна адреса електронної пошти, найчастіше використовується групою людей і не належить конкретній особі, - "abuse" - адреси, з яких надходить велика кількість скарг і натискань на "спам", іноді навіть в автоматичному режимі, - "spamtrap" - адреси-спам-пастки, зазвичай розміщуються поштовими провайдерами у відкритому доступі, але ніколи не використовуються для підписки. Надсилання листів на такі адреси сильно шкодить репутації відправника, - "smtp_connection_failed" - SMTP-сервер недоступний — можливо, адресу введено з помилкою.
   * @param {number} [data.validity] Імовірність того, що адреса дійсна. Від 0 до 100 (100 - дійсна, 0 - недійсна).
   * @param {string} [data.localPart] Локальна частина email-адреси (усе, що перед знаком "@").
   * @param {string} [data.domain] Доменна частина email-адреси.
   * @param {boolean} [data.mxFound] Чи є у домену MX-запис? true якщо є, false якщо відсутній.
   * @param {string} [data.mxRecord] Бажана MX-запис домену.
   * @param {string} [data.didYouMean] Можлива адреса, отримана після виправлення помилки (для cause=possible_typo).
   * @param {string} [data.processedAt] Дата й час перевірки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC.
   */
  constructor({ status, email, result, cause, validity, localPart, domain, mxFound, mxRecord, didYouMean, processedAt } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Email, що перевіряється.
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Можливі статуси:
     *
     * - "valid" - email-адреса дійсна,
     * - "invalid" - email-адреса недійсна,
     * - "suspicious" - email-адреса підозріла,
     * - "unknown" - адресу не вдалося перевірити. Приймаючий сервер не відповів у межах припустимого часу перевірки.
     * @type {string|undefined}
     */
    this.result = result;
    /**
     * Можливі статуси:
     *
     * - "no_mx_record" - у домену відсутні MX-записи,
     * - "syntax_error" - адреса не відповідає стандартам email,
     * - "possible_typo" - можливо, адресу введено з помилкою,
     * - "mailbox_not_found" - адреса не існує,
     * - "global_suppression" - адреса перманентно недоступна в сервісі через багаторазові недоставки,
     * - "disposable" - одноразовий email, зазвичай такі адреси приймають пошту лише декілька хвилин,
     * - "role" - загальна адреса електронної пошти, найчастіше використовується групою людей і не належить конкретній особі,
     * - "abuse" - адреси, з яких надходить велика кількість скарг і натискань на "спам", іноді навіть в автоматичному режимі,
     * - "spamtrap" - адреси-спам-пастки, зазвичай розміщуються поштовими провайдерами у відкритому доступі, але ніколи не використовуються для підписки. Надсилання листів на такі адреси сильно шкодить репутації відправника,
     * - "smtp_connection_failed" - SMTP-сервер недоступний — можливо, адресу введено з помилкою.
     * @type {string|undefined}
     */
    this.cause = cause;
    /**
     * Імовірність того, що адреса дійсна. Від 0 до 100 (100 - дійсна, 0 - недійсна).
     * @type {number|undefined}
     */
    this.validity = validity;
    /**
     * Локальна частина email-адреси (усе, що перед знаком "@").
     * @type {string|undefined}
     */
    this.localPart = localPart;
    /**
     * Доменна частина email-адреси.
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Чи є у домену MX-запис? true якщо є, false якщо відсутній.
     * @type {boolean|undefined}
     */
    this.mxFound = mxFound;
    /**
     * Бажана MX-запис домену.
     * @type {string|undefined}
     */
    this.mxRecord = mxRecord;
    /**
     * Можлива адреса, отримана після виправлення помилки (для cause=possible_typo).
     * @type {string|undefined}
     */
    this.didYouMean = didYouMean;
    /**
     * Дата й час перевірки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC.
     * @type {string|undefined}
     */
    this.processedAt = processedAt;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EmailValidationSingleResponse}
   */
  static fromJSON(data) {
    return new EmailValidationSingleResponse({
      status: data["status"],
      email: data["email"],
      result: data["result"],
      cause: data["cause"],
      validity: data["validity"],
      localPart: data["local_part"],
      domain: data["domain"],
      mxFound: data["mx_found"],
      mxRecord: data["mx_record"],
      didYouMean: data["did_you_mean"],
      processedAt: data["processed_at"],
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
      "result": this.result,
      "cause": this.cause,
      "validity": this.validity,
      "local_part": this.localPart,
      "domain": this.domain,
      "mx_found": this.mxFound,
      "mx_record": this.mxRecord,
      "did_you_mean": this.didYouMean,
      "processed_at": this.processedAt,
    });
  }
}
