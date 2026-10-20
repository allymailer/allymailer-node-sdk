// Types of the models of the EmailValidation section.

/** EmailValidationSingleRequest in the API format: the object sent and received as JSON. */
export interface EmailValidationSingleRequestJSON {
  "email": string;
}

/** Fields of new EmailValidationSingleRequest(): a nested model may be a plain object in the API format. */
export interface EmailValidationSingleRequestInit {
  /** Email-адреса, яку необхідно перевірити. */
  email: string;
}

/** EmailValidationSingleRequest */
export declare class EmailValidationSingleRequest {
  constructor(data: EmailValidationSingleRequestInit);
  /** Email-адреса, яку необхідно перевірити. */
  email: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EmailValidationSingleRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EmailValidationSingleRequestJSON;
}

/** EmailValidationSingleResponse in the API format: the object sent and received as JSON. */
export interface EmailValidationSingleResponseJSON {
  "status"?: string;
  "email"?: string;
  "result"?: string;
  "cause"?: string;
  "validity"?: number;
  "local_part"?: string;
  "domain"?: string;
  "mx_found"?: boolean;
  "mx_record"?: string;
  "did_you_mean"?: string;
  "processed_at"?: string;
}

/** Fields of new EmailValidationSingleResponse(): a nested model may be a plain object in the API format. */
export interface EmailValidationSingleResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email, що перевіряється. */
  email?: string;
  /**
   * Можливі статуси:
   *
   * - "valid" - email-адреса дійсна,
   * - "invalid" - email-адреса недійсна,
   * - "suspicious" - email-адреса підозріла,
   * - "unknown" - адресу не вдалося перевірити. Приймаючий сервер не відповів у межах припустимого часу перевірки.
   */
  result?: string;
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
   */
  cause?: string;
  /** Імовірність того, що адреса дійсна. Від 0 до 100 (100 - дійсна, 0 - недійсна). */
  validity?: number;
  /** Локальна частина email-адреси (усе, що перед знаком "@"). */
  localPart?: string;
  /** Доменна частина email-адреси. */
  domain?: string;
  /** Чи є у домену MX-запис? true якщо є, false якщо відсутній. */
  mxFound?: boolean;
  /** Бажана MX-запис домену. */
  mxRecord?: string;
  /** Можлива адреса, отримана після виправлення помилки (для cause=possible_typo). */
  didYouMean?: string;
  /** Дата й час перевірки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC. */
  processedAt?: string;
}

/** EmailValidationSingleResponse */
export declare class EmailValidationSingleResponse {
  constructor(data?: EmailValidationSingleResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Email, що перевіряється. */
  email?: string;
  /**
   * Можливі статуси:
   *
   * - "valid" - email-адреса дійсна,
   * - "invalid" - email-адреса недійсна,
   * - "suspicious" - email-адреса підозріла,
   * - "unknown" - адресу не вдалося перевірити. Приймаючий сервер не відповів у межах припустимого часу перевірки.
   */
  result?: string;
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
   */
  cause?: string;
  /** Імовірність того, що адреса дійсна. Від 0 до 100 (100 - дійсна, 0 - недійсна). */
  validity?: number;
  /** Локальна частина email-адреси (усе, що перед знаком "@"). */
  localPart?: string;
  /** Доменна частина email-адреси. */
  domain?: string;
  /** Чи є у домену MX-запис? true якщо є, false якщо відсутній. */
  mxFound?: boolean;
  /** Бажана MX-запис домену. */
  mxRecord?: string;
  /** Можлива адреса, отримана після виправлення помилки (для cause=possible_typo). */
  didYouMean?: string;
  /** Дата й час перевірки адреси у форматі РРРР-ММ-ДД гг:хх:сс у часовому поясі UTC. */
  processedAt?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EmailValidationSingleResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EmailValidationSingleResponseJSON;
}
