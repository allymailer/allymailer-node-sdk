// Models of the Email section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";
import { AttachmentsArrayItem, BodyObject, HeadersObject, InlineAttachmentsArrayItem } from "../../common/models.js";

/** EmailSendRequest */
export class EmailSendRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {MessageObject} data.message Об'єкт, що містить усі властивості повідомлення, яке надсилається.
   */
  constructor({ message } = {}) {
    /**
     * Об'єкт, що містить усі властивості повідомлення, яке надсилається.
     * @type {MessageObject|undefined}
     */
    this.message = message == null ? message : toModel(message, MessageObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EmailSendRequest}
   */
  static fromJSON(data) {
    return new EmailSendRequest({
      message: data["message"] == null ? undefined : toModel(data["message"], MessageObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "message": this.message == null ? undefined : toPlain(this.message),
    });
  }
}

/** Об'єкт, що містить усі властивості повідомлення, яке надсилається. */
export class MessageObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {MessageObjectRecipientsItem[]} data.recipients Масив об'єктів з email-адресами, підстановками та метаданими отримувачів.
   * @param {string} [data.templateId] Унікальний ідентифікатор шаблону, створеного раніше методом [template/set](https://docs.allymailer.com.ua/ua/web-api-ref#template-set). Якщо вказано, то поля шаблону підставляються замість пропущених полів email/send. Наприклад, якщо в email/send не вказано body — береться тіло листа із шаблону, а якщо не вказано subject — береться тема із шаблону.
   * @param {string[]} [data.tags] Масив із рядків, до 100 символів у кожному. Максимум 4 рядки в масиві, рядки мають бути унікальними. Для кожного облікового запису/проєкту дозволено не більше ніж 10 000 міток, у разі перевищення метод email/send повертатиме помилку. Мітки можуть використовуватися для категоризації листів за обраними вами критеріями. Мітки передаються методами event-dump.
   * @param {number} [data.skipUnsubscribe] Пропустити чи не пропускати додавання стандартного блока з посиланням відписки до HTML-частини листа. 1=пропустити, 0=додати, за замовчуванням 0. Для использования skip_unsubscribe=1 вам надо [попросить техподдержку](https://cp.allymailer.com/ru/support) включить такую возможность.
   * @param {string} [data.globalLanguage] Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en", "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
   * @param {"simple"|"velocity"|"liquid"|"none"} [data.templateEngine] Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/en/template-engines) — або "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
   * @param {Record<string, string>} [data.globalSubstitutions] Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з об'єкта "substitutions". Підстановки працюють у параметрах:  - body.html - body.plaintext - body.amp - subject - from_name - options.unsubscribe_url Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може бути лише літера, використання пробілів не допускається.
   * @param {Record<string, string>} [data.globalMetadata] Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа: 1024 символи. Метадані передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні значення будуть прирівняні до '0'
   * @param {BodyObject} data.body Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина має бути присутня обов'язково.
   * @param {string} data.subject Тема листа.
   * @param {string} [data.fromEmail] Email-адреса відправника. Обов'язковий лише за порожнього template_id.
   * @param {string} [data.fromName] Ім'я відправника.
   * @param {string} [data.replyTo] Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
   * @param {string} [data.replyToName] Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише цей email, але й ім'я)
   * @param {number} [data.trackLinks] 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для використання track_links = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {number} [data.trackRead] 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для використання track_read = 0 вам потрібно [попросити техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
   * @param {number} [data.bypassGlobal] (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список глобальної недоступності, під час надсилання не враховуватимуться дані про недоступність адрес або скарги, отримані під час надсилання іншими користувачами AllyMailer. Для деяких системних записів може бути заборонено
   * @param {number} [data.bypassUnavailable] (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список недоступних адрес поточного облікового запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1.
   * @param {number} [data.bypassUnsubscribed] (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список відписаних від розсилок поточного облікового запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр доступний лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вимкнення посилання відписки.
   * @param {number} [data.bypassComplained] (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список тих, хто поскаржився на обліковий запис/проєкт. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр доступний лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вимкнення посилання відписки.
   * @param {string} [data.idempotenceKey] Рядок до 64 символів завдовжки з унікальним ключем запиту. Може використовуватися для запобігання випадковому дублюванню листів. У разі повторного надсилання запиту з тим самим ключем протягом хвилини запит буде відхилено. Може створюватися автоматично для кожного листа; щоб увімкнути автоматичну генерацію ключа, зв'яжіться з [техпідтримкою](https://cp.allymailer.com/ua/support).
   * @param {HeadersObject} [data.headers] Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language, X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-", але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe, List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
   * @param {AttachmentsArrayItem[]} [data.attachments] Необов'язковий масив вкладень.
   * @param {InlineAttachmentsArrayItem[]} [data.inlineAttachments] Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження їх за посиланням.
   * @param {MessageObjectOptions} [data.options] Додаткові опції.
   */
  constructor({ recipients, templateId, tags, skipUnsubscribe, globalLanguage, templateEngine, globalSubstitutions, globalMetadata, body, subject, fromEmail, fromName, replyTo, replyToName, trackLinks, trackRead, bypassGlobal, bypassUnavailable, bypassUnsubscribed, bypassComplained, idempotenceKey, headers, attachments, inlineAttachments, options } = {}) {
    /**
     * Масив об'єктів з email-адресами, підстановками та метаданими отримувачів.
     * @type {MessageObjectRecipientsItem[]|undefined}
     */
    this.recipients = recipients == null ? recipients : recipients.map((item0) => toModel(item0, MessageObjectRecipientsItem));
    /**
     * Унікальний ідентифікатор шаблону, створеного раніше методом
     * [template/set](https://docs.allymailer.com.ua/ua/web-api-ref#template-set). Якщо вказано, то поля
     * шаблону підставляються замість пропущених полів email/send. Наприклад, якщо в email/send не вказано
     * body — береться тіло листа із шаблону, а якщо не вказано subject — береться тема із шаблону.
     * @type {string|undefined}
     */
    this.templateId = templateId;
    /**
     * Масив із рядків, до 100 символів у кожному. Максимум 4 рядки в масиві, рядки мають бути унікальними.
     * Для кожного облікового запису/проєкту дозволено не більше ніж 10 000 міток, у разі перевищення метод
     * email/send повертатиме помилку. Мітки можуть використовуватися для категоризації листів за обраними
     * вами критеріями. Мітки передаються методами event-dump.
     * @type {string[]|undefined}
     */
    this.tags = tags;
    /**
     * Пропустити чи не пропускати додавання стандартного блока з посиланням відписки до HTML-частини
     * листа. 1=пропустити, 0=додати, за замовчуванням 0. Для использования skip_unsubscribe=1 вам надо
     * [попросить техподдержку](https://cp.allymailer.com/ru/support) включить такую возможность.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.skipUnsubscribe = skipUnsubscribe;
    /**
     * Заголовок для вибору мови посилання та сторінки відписки. Припустимі значення "be", "de", "en",
     * "es", "fr", "it", "pl", "pt", "ru", "ua", "kz".
     * @type {string|undefined}
     */
    this.globalLanguage = globalLanguage;
    /**
     * Параметр для вибору [шаблонізатора](https://docs.allymailer.com.ua/en/template-engines) — або
     * "simple", або "velocity", або "liquid", або "none". За замовчуванням — "simple".
     * @type {"simple"|"velocity"|"liquid"|"none"|undefined}
     */
    this.templateEngine = templateEngine;
    /**
     * Об'єкт для передачі глобальних підстановок (наприклад, назва компанії). Якщо назви змінних
     * повторюються в об'єкті користувацьких підстановок "substitutions", значення змінних будуть взяті з
     * об'єкта "substitutions". Підстановки працюють у параметрах:
     *
     * - body.html
     * - body.plaintext
     * - body.amp
     * - subject
     * - from_name
     * - options.unsubscribe_url
     * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
     * бути лише літера, використання пробілів не допускається.
     * @type {Record<string, string>|undefined}
     */
    this.globalSubstitutions = globalSubstitutions;
    /**
     * Об'єкт для передачі метаданих, спільних для всіх отримувачів, у форматі: "key": "value". Максимальна
     * кількість ключів: 10; максимальна довжина ключа: 64 символи; максимальна довжина значення ключа:
     * 1024 символи. Метадані передаються під час виклику
     * [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook). Для групування листів в одну
     * розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного
     * десяткового цілого до 128 біт або UUID вигляду "c7703772-453e-4c77-a9ae-9a1b94051b5a". Неправильні
     * значення будуть прирівняні до '0'
     * @type {Record<string, string>|undefined}
     */
    this.globalMetadata = globalMetadata;
    /**
     * Об'єкт, що містить у собі html-, plaintext- і amp-частини листа. Або html-, або plaintext-частина
     * має бути присутня обов'язково.
     * @type {BodyObject|undefined}
     */
    this.body = body == null ? body : toModel(body, BodyObject);
    /**
     * Тема листа.
     * @type {string|undefined}
     */
    this.subject = subject;
    /**
     * Email-адреса відправника. Обов'язковий лише за порожнього template_id.
     * @type {string|undefined}
     */
    this.fromEmail = fromEmail;
    /**
     * Ім'я відправника.
     * @type {string|undefined}
     */
    this.fromName = fromName;
    /**
     * Необов'язкова email-адреса для відповідей (на випадок, якщо відрізняється від адреси відправника)
     * @type {string|undefined}
     */
    this.replyTo = replyTo;
    /**
     * Необов'язкове ім'я для відповідей (якщо вказано email reply_to і ви хочете, щоб відображався не лише
     * цей email, але й ім'я)
     * @type {string|undefined}
     */
    this.replyToName = replyToName;
    /**
     * 1 = відстеження переходів за посиланнями увімкнено (значення за замовчуванням), 0=вимкнено. Для
     * використання track_links = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackLinks = trackLinks;
    /**
     * 1 = відстеження прочитань листа увімкнено (значення за замовчуванням), 0 = вимкнено. Для
     * використання track_read = 0 вам потрібно [попросити
     * техпідтримку](https://cp.allymailer.com/ua/support) увімкнути таку можливість.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.trackRead = trackRead;
    /**
     * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список глобальної недоступності, під час
     * надсилання не враховуватимуться дані про недоступність адрес або скарги, отримані під час надсилання
     * іншими користувачами AllyMailer. Для деяких системних записів може бути заборонено
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.bypassGlobal = bypassGlobal;
    /**
     * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список недоступних адрес поточного облікового
     * запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.bypassUnavailable = bypassUnavailable;
    /**
     * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список відписаних від розсилок поточного
     * облікового запису/проєкту. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр
     * доступний лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила
     * вимкнення посилання відписки.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.bypassUnsubscribed = bypassUnsubscribed;
    /**
     * (0 або 1, за замовчуванням 0) Значення 1=ігнорувати список тих, хто поскаржився на обліковий
     * запис/проєкт. Указання 1 можливе лише за одночасного вказання bypass_global=1. Параметр доступний
     * лише тим користувачам, яким [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вимкнення
     * посилання відписки.
     * Допустимі значення: `0`, `1`.
     * @type {number|undefined}
     */
    this.bypassComplained = bypassComplained;
    /**
     * Рядок до 64 символів завдовжки з унікальним ключем запиту. Може використовуватися для запобігання
     * випадковому дублюванню листів. У разі повторного надсилання запиту з тим самим ключем протягом
     * хвилини запит буде відхилено. Може створюватися автоматично для кожного листа; щоб увімкнути
     * автоматичну генерацію ключа, зв'яжіться з [техпідтримкою](https://cp.allymailer.com/ua/support).
     * @type {string|undefined}
     */
    this.idempotenceKey = idempotenceKey;
    /**
     * Об'єкт, що містить додаткові заголовки листа, максимум 50 заголовків. Префікс “X-” в імені заголовка
     * обов'язковий, заголовки без нього будуть проігноровані, наприклад X-ALLYMAILER-Global-Language,
     * X-ALLYMAILER-Template-Engine. Стандартні заголовки "To", "CC", "BCC" передаються без префікса "X-",
     * але обробляються спеціальним чином, тому мають низку обмежень, докладніше про це можна прочитати
     * [тут](/cc-and-bcc). Також якщо [техпідтримка](https://cp.allymailer.com/ua/support) схвалила вам
     * вимкнення посилання відписки, то ви також можете передавати заголовки List-Unsubscribe,
     * List-Subscribe, List-Help, List-Owner, List-Archive, In-Reply-To і References.
     * @type {HeadersObject|undefined}
     */
    this.headers = headers == null ? headers : toModel(headers, HeadersObject);
    /**
     * Необов'язковий масив вкладень.
     * @type {AttachmentsArrayItem[]|undefined}
     */
    this.attachments = attachments == null ? attachments : attachments.map((item0) => toModel(item0, AttachmentsArrayItem));
    /**
     * Масив для передачі inline-вкладень, наприклад, для включення зображень у лист замість завантаження
     * їх за посиланням.
     * @type {InlineAttachmentsArrayItem[]|undefined}
     */
    this.inlineAttachments = inlineAttachments == null ? inlineAttachments : inlineAttachments.map((item0) => toModel(item0, InlineAttachmentsArrayItem));
    /**
     * Додаткові опції.
     * @type {MessageObjectOptions|undefined}
     */
    this.options = options == null ? options : toModel(options, MessageObjectOptions);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {MessageObject}
   */
  static fromJSON(data) {
    return new MessageObject({
      recipients: data["recipients"] == null ? undefined : data["recipients"].map((item0) => toModel(item0, MessageObjectRecipientsItem)),
      templateId: data["template_id"],
      tags: data["tags"],
      skipUnsubscribe: data["skip_unsubscribe"],
      globalLanguage: data["global_language"],
      templateEngine: data["template_engine"],
      globalSubstitutions: data["global_substitutions"],
      globalMetadata: data["global_metadata"],
      body: data["body"] == null ? undefined : toModel(data["body"], BodyObject),
      subject: data["subject"],
      fromEmail: data["from_email"],
      fromName: data["from_name"],
      replyTo: data["reply_to"],
      replyToName: data["reply_to_name"],
      trackLinks: data["track_links"],
      trackRead: data["track_read"],
      bypassGlobal: data["bypass_global"],
      bypassUnavailable: data["bypass_unavailable"],
      bypassUnsubscribed: data["bypass_unsubscribed"],
      bypassComplained: data["bypass_complained"],
      idempotenceKey: data["idempotence_key"],
      headers: data["headers"] == null ? undefined : toModel(data["headers"], HeadersObject),
      attachments: data["attachments"] == null ? undefined : data["attachments"].map((item0) => toModel(item0, AttachmentsArrayItem)),
      inlineAttachments: data["inline_attachments"] == null ? undefined : data["inline_attachments"].map((item0) => toModel(item0, InlineAttachmentsArrayItem)),
      options: data["options"] == null ? undefined : toModel(data["options"], MessageObjectOptions),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "recipients": this.recipients == null ? undefined : this.recipients.map((item0) => toPlain(item0)),
      "template_id": this.templateId,
      "tags": this.tags,
      "skip_unsubscribe": this.skipUnsubscribe,
      "global_language": this.globalLanguage,
      "template_engine": this.templateEngine,
      "global_substitutions": this.globalSubstitutions,
      "global_metadata": this.globalMetadata,
      "body": this.body == null ? undefined : toPlain(this.body),
      "subject": this.subject,
      "from_email": this.fromEmail,
      "from_name": this.fromName,
      "reply_to": this.replyTo,
      "reply_to_name": this.replyToName,
      "track_links": this.trackLinks,
      "track_read": this.trackRead,
      "bypass_global": this.bypassGlobal,
      "bypass_unavailable": this.bypassUnavailable,
      "bypass_unsubscribed": this.bypassUnsubscribed,
      "bypass_complained": this.bypassComplained,
      "idempotence_key": this.idempotenceKey,
      "headers": this.headers == null ? undefined : toPlain(this.headers),
      "attachments": this.attachments == null ? undefined : this.attachments.map((item0) => toPlain(item0)),
      "inline_attachments": this.inlineAttachments == null ? undefined : this.inlineAttachments.map((item0) => toPlain(item0)),
      "options": this.options == null ? undefined : toPlain(this.options),
    });
  }
}

/** MessageObjectRecipientsItem */
export class MessageObjectRecipientsItem {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.email Email-адреса отримувача
   * @param {Record<string, string>} [data.substitutions] Об'єкт, що описує підстановки для конкретного отримувача (наприклад, ім'я, товар для показу саме цьому отримувачу — див. [Шаблонізатори](https://docs.allymailer.com.ua/en/template-engines)). Підстановки працюють у параметрах:  - body.html - body.plaintext - body.amp - subject - from_name - headers["List-Unsubscribe"] - options.unsubscribe_url Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може бути лише літера, використання пробілів не допускається. Є спеціальна змінна "to_name", що дозволяє задати ім'я отримувача. У разі підстановки туди "Ім'я Прізвище" SMTP-заголовок “To” виглядатиме як "Ім'я Прізвище <email@example.com>". Довжина змінної "to_name" обмежена 78 символами.
   * @param {Record<string, string>} [data.metadata] Об'єкт для передачі метаданих, специфічних для окремого отримувача, де "key" — рядок до 64 символів завдовжки, "value" — рядок до 1024 символів завдовжки, максимальна кількість ключів — 10. Метадані передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook) і методів [event-dump](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump). Для групування листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді невід'ємного десяткового цілого або UUID до 128 біт.
   */
  constructor({ email, substitutions, metadata } = {}) {
    /**
     * Email-адреса отримувача
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Об'єкт, що описує підстановки для конкретного отримувача (наприклад, ім'я, товар для показу саме
     * цьому отримувачу — див. [Шаблонізатори](https://docs.allymailer.com.ua/en/template-engines)).
     * Підстановки працюють у параметрах:
     *
     * - body.html
     * - body.plaintext
     * - body.amp
     * - subject
     * - from_name
     * - headers["List-Unsubscribe"]
     * - options.unsubscribe_url
     * Назви змінних можуть містити літери латинського алфавіту, цифри, символ "_". Першим символом може
     * бути лише літера, використання пробілів не допускається. Є спеціальна змінна "to_name", що дозволяє
     * задати ім'я отримувача. У разі підстановки туди "Ім'я Прізвище" SMTP-заголовок “To” виглядатиме як
     * "Ім'я Прізвище <email@example.com>". Довжина змінної "to_name" обмежена 78 символами.
     * @type {Record<string, string>|undefined}
     */
    this.substitutions = substitutions;
    /**
     * Об'єкт для передачі метаданих, специфічних для окремого отримувача, де "key" — рядок до 64 символів
     * завдовжки, "value" — рядок до 1024 символів завдовжки, максимальна кількість ключів — 10. Метадані
     * передаються під час виклику [webhook](https://docs.allymailer.com.ua/ua/web-api-ref#webhook) і
     * методів [event-dump](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump). Для групування
     * листів в одну розсилку може використовуватися системний ключ "campaign_id" зі значенням у вигляді
     * невід'ємного десяткового цілого або UUID до 128 біт.
     * @type {Record<string, string>|undefined}
     */
    this.metadata = metadata;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {MessageObjectRecipientsItem}
   */
  static fromJSON(data) {
    return new MessageObjectRecipientsItem({
      email: data["email"],
      substitutions: data["substitutions"],
      metadata: data["metadata"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "email": this.email,
      "substitutions": this.substitutions,
      "metadata": this.metadata,
    });
  }
}

/** Додаткові опції. */
export class MessageObjectOptions {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.sendAt] Дата й час у форматі "РРРР-ММ-ДД гг:хх:сс" у часовому поясі UTC. Дозволяє запланувати час надсилання на майбутнє, у межах 24 годин від поточного часу.
   * @param {string} [data.unsubscribeUrl] Користувацьке посилання відписки. Докладніше [тут](https://docs.allymailer.com.ua/unsubscribe-link).
   * @param {number} [data.customBackendId] Ідентифікатор backend-домену, через який надсилається повідомлення. Якщо відсутній — надсилання буде від імені backend-домену, призначеного вашому обліковому запису/проєкту за замовчуванням. Ви можете придбати один або декілька виділених IP-адрес і використовувати цю опцію для вибору.
   * @param {string} [data.smtpPoolId] Ідентифікатор пулу SMTP, через який надсилається повідомлення. Зазвичай немає необхідності вказувати пул явно, оскільки він обирається автоматично або як пул за замовчуванням для вашого облікового запису/проєкту, або відповідно до переданого параметра custom_backend_id.
   */
  constructor({ sendAt, unsubscribeUrl, customBackendId, smtpPoolId } = {}) {
    /**
     * Дата й час у форматі "РРРР-ММ-ДД гг:хх:сс" у часовому поясі UTC. Дозволяє запланувати час надсилання
     * на майбутнє, у межах 24 годин від поточного часу.
     * @type {string|undefined}
     */
    this.sendAt = sendAt;
    /**
     * Користувацьке посилання відписки. Докладніше [тут](https://docs.allymailer.com.ua/unsubscribe-link).
     * @type {string|undefined}
     */
    this.unsubscribeUrl = unsubscribeUrl;
    /**
     * Ідентифікатор backend-домену, через який надсилається повідомлення. Якщо відсутній — надсилання буде
     * від імені backend-домену, призначеного вашому обліковому запису/проєкту за замовчуванням. Ви можете
     * придбати один або декілька виділених IP-адрес і використовувати цю опцію для вибору.
     * @type {number|undefined}
     */
    this.customBackendId = customBackendId;
    /**
     * Ідентифікатор пулу SMTP, через який надсилається повідомлення. Зазвичай немає необхідності вказувати
     * пул явно, оскільки він обирається автоматично або як пул за замовчуванням для вашого облікового
     * запису/проєкту, або відповідно до переданого параметра custom_backend_id.
     * @type {string|undefined}
     */
    this.smtpPoolId = smtpPoolId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {MessageObjectOptions}
   */
  static fromJSON(data) {
    return new MessageObjectOptions({
      sendAt: data["send_at"],
      unsubscribeUrl: data["unsubscribe_url"],
      customBackendId: data["custom_backend_id"],
      smtpPoolId: data["smtp_pool_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "send_at": this.sendAt,
      "unsubscribe_url": this.unsubscribeUrl,
      "custom_backend_id": this.customBackendId,
      "smtp_pool_id": this.smtpPoolId,
    });
  }
}

/** EmailSendResponse */
export class EmailSendResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.jobId] Ідентифікатор завдання з надсилання, може виявитися корисним під час з'ясування причин збоїв.
   * @param {string[]} [data.emails] Масив email-адрес, успішно прийнятих до надсилання.
   * @param {Record<string, string>} [data.failedEmails] Об'єкт із email-адресами, не прийнятими до надсилання. Email представлено іменем властивості, а його статус — значенням властивості, наприклад: {"email1@gmail.com": "temporary_unavailable"}. Можливі статуси адрес, на які не вдалося здійснити надсилання:  - __unsubscribed__ — зазначену адресу відписано; - __invalid__ — адреса не існує або введена некоректно; - __duplicate__ — адреса повторюється в запиті, повторне надсилання на той самий email запобігнуто; - __temporary_unavailable__ — адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:  - попереднє надсилання було відхилено сервером отримувача як спам; - поштова скринька отримувача переповнена або не використовується; - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин; - сервер відправника було відхилено через блеклистинг;  - __permanent_unavailable__ — адреса перманентно недоступна через багаторазові недоставки; - __complained__ — в одному з попередніх листів адресат натиснув “Це спам”; - __blocked__ — надсилання на цю адресу заборонено адміністрацією AllyMailer. У майбутньому можуть з'явитися й інші статуси.
   */
  constructor({ status, jobId, emails, failedEmails } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Ідентифікатор завдання з надсилання, може виявитися корисним під час з'ясування причин збоїв.
     * @type {string|undefined}
     */
    this.jobId = jobId;
    /**
     * Масив email-адрес, успішно прийнятих до надсилання.
     * @type {string[]|undefined}
     */
    this.emails = emails;
    /**
     * Об'єкт із email-адресами, не прийнятими до надсилання. Email представлено іменем властивості, а його
     * статус — значенням властивості, наприклад: {"email1@gmail.com": "temporary_unavailable"}. Можливі
     * статуси адрес, на які не вдалося здійснити надсилання:
     *
     * - __unsubscribed__ — зазначену адресу відписано;
     * - __invalid__ — адреса не існує або введена некоректно;
     * - __duplicate__ — адреса повторюється в запиті, повторне надсилання на той самий email запобігнуто;
     * - __temporary_unavailable__ — адреса тимчасово недоступна. Це означає, що протягом наступних трьох діб надсилання на цю адресу повертатиме помилку. Email може бути тимчасово недоступним з різних причин, наприклад:
     *
     * - попереднє надсилання було відхилено сервером отримувача як спам;
     * - поштова скринька отримувача переповнена або не використовується;
     * - домен не приймає пошту через неправильне налаштування на боці отримувача або з інших причин;
     * - сервер відправника було відхилено через блеклистинг;
     *
     * - __permanent_unavailable__ — адреса перманентно недоступна через багаторазові недоставки;
     * - __complained__ — в одному з попередніх листів адресат натиснув “Це спам”;
     * - __blocked__ — надсилання на цю адресу заборонено адміністрацією AllyMailer.
     * У майбутньому можуть з'явитися й інші статуси.
     * @type {Record<string, string>|undefined}
     */
    this.failedEmails = failedEmails;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EmailSendResponse}
   */
  static fromJSON(data) {
    return new EmailSendResponse({
      status: data["status"],
      jobId: data["job_id"],
      emails: data["emails"],
      failedEmails: data["failed_emails"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "job_id": this.jobId,
      "emails": this.emails,
      "failed_emails": this.failedEmails,
    });
  }
}

/** EmailSubscribeRequest */
export class EmailSubscribeRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.fromEmail Адреса відправника на підтвердженому домені. (Також підтримується іменування поля як "email_address_from").
   * @param {string} data.fromName Ім'я відправника. (Також підтримується іменування поля як "name_from").
   * @param {string} data.toEmail Адреса отримувача. (Також підтримується іменування поля як "email_address_to").
   */
  constructor({ fromEmail, fromName, toEmail } = {}) {
    /**
     * Адреса відправника на підтвердженому домені. (Також підтримується іменування поля як
     * "email_address_from").
     * @type {string|undefined}
     */
    this.fromEmail = fromEmail;
    /**
     * Ім'я відправника. (Також підтримується іменування поля як "name_from").
     * @type {string|undefined}
     */
    this.fromName = fromName;
    /**
     * Адреса отримувача. (Також підтримується іменування поля як "email_address_to").
     * @type {string|undefined}
     */
    this.toEmail = toEmail;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EmailSubscribeRequest}
   */
  static fromJSON(data) {
    return new EmailSubscribeRequest({
      fromEmail: data["from_email"],
      fromName: data["from_name"],
      toEmail: data["to_email"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "from_email": this.fromEmail,
      "from_name": this.fromName,
      "to_email": this.toEmail,
    });
  }
}
