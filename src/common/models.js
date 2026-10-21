// Models of the Common section.
import { compact, extraFields, toModel, toPlain } from "../client/ApiClient.js";

/**
 * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/ua/template-engines) — або
 * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
 */
export const TemplateEngine = Object.freeze({
  SIMPLE: "simple",
  VELOCITY: "velocity",
  LIQUID: "liquid",
  NONE: "none",
});

/** EmailStatus */
export const EmailStatus = Object.freeze({
  SENT: "sent",
  DELIVERED: "delivered",
  OPENED: "opened",
  CLICKED: "clicked",
  UNSUBSCRIBED: "unsubscribed",
  SUBSCRIBED: "subscribed",
  SOFT_BOUNCED: "soft_bounced",
  HARD_BOUNCED: "hard_bounced",
  SPAM: "spam",
});

/**
 * Лише домени зі статусом "confirmed" запису про володіння доменом можуть використовуватися для
 * надсилання листів.
 */
export const VerificationRecordStatus = Object.freeze({
  CONFIRMED: "confirmed",
  UNCONFIRMED: "unconfirmed",
});

/**
 * Встановлює режим роботи лічильника листів. Дозволяє вибрати, як має поводитися лічильник:
 * автоматично скидатися чи залишатися постійним. Припустимі значення: default - лічильник автоматично
 * скидається в нуль на початку кожного облікового періоду, permanent - лічильник ніколи не скидається
 * автоматично. Скидання може бути виконане лише вручну користувачем, передавши значення 0 у полі
 * 'email_counter'. Якщо поле не передано в запиті або передано значення null, значення режиму не
 * змінюється.
 */
export const EmailCounterMode = Object.freeze({
  DEFAULT: "default",
  PERMANENT: "permanent",
});

/**
 * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
 * має бути присутня обов'язково.
 */
export class BodyObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.html] HTML-частина листа
   * @param {string} [data.plaintext] Plaintext-частина листа.
   * @param {string} [data.amp] Необов'язкова [AMP](http://amp.dev/documentation/guides-and-tutorials/learn/email_fundamentals/)-частина листа.
   */
  constructor({ html, plaintext, amp } = {}) {
    /**
     * HTML-частина листа
     * @type {string|undefined}
     */
    this.html = html;
    /**
     * Plaintext-частина листа.
     * @type {string|undefined}
     */
    this.plaintext = plaintext;
    /**
     * Необов'язкова
     * [AMP](http://amp.dev/documentation/guides-and-tutorials/learn/email_fundamentals/)-частина листа.
     * @type {string|undefined}
     */
    this.amp = amp;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {BodyObject}
   */
  static fromJSON(data) {
    return new BodyObject({
      html: data["html"],
      plaintext: data["plaintext"],
      amp: data["amp"],
    });
  }

  /**
   * An HTML body, with an optional plain-text part.
   * @param {string} html
   * @param {string} [plaintext]
   * @returns {BodyObject}
   */
  static html(html, plaintext) {
    return new BodyObject({ html: html, plaintext: plaintext });
  }

  /**
   * A plain-text body.
   * @param {string} plaintext
   * @returns {BodyObject}
   */
  static text(plaintext) {
    return new BodyObject({ plaintext: plaintext });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "html": this.html,
      "plaintext": this.plaintext,
      "amp": this.amp,
    });
  }
}

/**
 * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
 * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
 * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
 * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
 * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
 * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
 * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
 */
export class HeadersObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.xALLYMAILERGlobalLanguage] Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en", "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   * @param {string} [data.xALLYMAILERTemplateEngine] Заголовок для вибору шаблонізатора — або “simple”, або “velocity”, або “liquid”, або “none”. За замовчуванням — “simple”. Має пріоритет над значенням, що передається в параметрі “template_engine”.
   * @param {Record<string, string>} [data.extra] Keys besides the named fields, sent next to them (a named field wins over the same key here); keys of a response that are not named fields come here.
   */
  constructor({ xALLYMAILERGlobalLanguage, xALLYMAILERTemplateEngine, extra = {} } = {}) {
    /**
     * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
     * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
     * @type {string|undefined}
     */
    this.xALLYMAILERGlobalLanguage = xALLYMAILERGlobalLanguage;
    /**
     * Заголовок для вибору шаблонізатора — або “simple”, або “velocity”, або “liquid”, або “none”. За
     * замовчуванням — “simple”. Має пріоритет над значенням, що передається в параметрі “template_engine”.
     * @type {string|undefined}
     */
    this.xALLYMAILERTemplateEngine = xALLYMAILERTemplateEngine;
    /**
     * Keys besides the named fields, sent next to them (a named field wins over the same key here); keys
     * of a response that are not named fields come here.
     * @type {Record<string, string>}
     */
    this.extra = extra;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {HeadersObject}
   */
  static fromJSON(data) {
    return new HeadersObject({
      xALLYMAILERGlobalLanguage: data["X-ALLYMAILER-Global-Language"],
      xALLYMAILERTemplateEngine: data["X-ALLYMAILER-Template-Engine"],
      extra: extraFields(data, ["X-ALLYMAILER-Global-Language", "X-ALLYMAILER-Template-Engine"]),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return {
      ...compact(this.extra || {}),
      ...compact({
        "X-ALLYMAILER-Global-Language": this.xALLYMAILERGlobalLanguage,
        "X-ALLYMAILER-Template-Engine": this.xALLYMAILERTemplateEngine,
      }),
    };
  }
}

/** AttachmentsArrayItem */
export class AttachmentsArrayItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.type Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте "application/octet-stream".
   * @param {string} data.name Назва вкладення у форматі: "ім'я.розширення". У разі передачі кількох вкладень їхні назви мають бути унікальними. У назві вкладень заборонено символ ‘/’.
   * @param {string} data.content Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб (9786710 байт у base64).
   */
  constructor({ type, name, content } = {}) {
    /**
     * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
     * "application/octet-stream".
     * @type {string|undefined}
     */
    this.type = type;
    /**
     * Назва вкладення у форматі: "ім'я.розширення". У разі передачі кількох вкладень їхні назви мають бути
     * унікальними. У назві вкладень заборонено символ ‘/’.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
     * (9786710 байт у base64).
     * @type {string|undefined}
     */
    this.content = content;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {AttachmentsArrayItem}
   */
  static fromJSON(data) {
    return new AttachmentsArrayItem({
      type: data["type"],
      name: data["name"],
      content: data["content"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "type": this.type,
      "name": this.name,
      "content": this.content,
    });
  }
}

/** InlineAttachmentsArrayItem */
export class InlineAttachmentsArrayItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.type Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте "application/octet-stream".
   * @param {string} data.name Ідентифікатор вкладення. Якщо, наприклад, "name"="IMAGECID", то для виведення картинки з цього вкладення в HTML-тексті листа потрібно вказати <img src="cid:IMAGECID">.
   * @param {string} data.content Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб (9786710 байт у base64).
   */
  constructor({ type, name, content } = {}) {
    /**
     * Тип вкладення, див. [MIME](https://en.wikipedia.org/wiki/MIME). Якщо не впевнені, використовуйте
     * "application/octet-stream".
     * @type {string|undefined}
     */
    this.type = type;
    /**
     * Ідентифікатор вкладення. Якщо, наприклад, "name"="IMAGECID", то для виведення картинки з цього
     * вкладення в HTML-тексті листа потрібно вказати <img src="cid:IMAGECID">.
     * @type {string|undefined}
     */
    this.name = name;
    /**
     * Вміст файлу у [base64](https://en.wikipedia.org/wiki/Base64). Максимальний розмір файлу 7 Мб
     * (9786710 байт у base64).
     * @type {string|undefined}
     */
    this.content = content;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {InlineAttachmentsArrayItem}
   */
  static fromJSON(data) {
    return new InlineAttachmentsArrayItem({
      type: data["type"],
      name: data["name"],
      content: data["content"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "type": this.type,
      "name": this.name,
      "content": this.content,
    });
  }
}

/** SuccessResponse */
export class SuccessResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   */
  constructor({ status } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {SuccessResponse}
   */
  static fromJSON(data) {
    return new SuccessResponse({
      status: data["status"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
    });
  }
}
