// Models of the EventDump section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** EventDumpCreateRequest */
export class EventDumpCreateRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.startTime Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, починаючи з якої необхідно отримати події. Дані зберігаються до 45 днів, залежно від вашого тарифу.
   * @param {string} [data.endTime] Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, до якої (не включно) запитуються події.
   * @param {number} [data.limit] Максимальна кількість подій, що повертаються, за замовчуванням 50. Якщо це значення перевищує 100 000, буде створено декілька файлів, кожен з яких містить максимум 100 000 подій.
   * @param {boolean} [data.allProjects] Якщо у користувача увімкнено проєкти, all_projects=true дозволить отримати дані всіх проєктів.
   * @param {FilterObject} [data.filter] Об'єкт із властивостями фільтра дампа подій.
   * @param {string[]} [data.dumpFields] Масив із рядків з переліком назв стовпців, які необхідно отримати у вивантаженні (у порядку переліку). Якщо 'dump_fields' відсутній або порожній — застосовується набір і порядок полів за замовчуванням. Припустимі значення (у порядку за замовчуванням): 'project_id', 'event_time', 'job_id', 'from_email', 'email', 'status', 'delivery_status', 'metadata', 'destination_response', 'user_agent', 'url', 'ip', 'tags'. З метою більшої конфіденційності поле 'subject' не входить до набору полів за замовчуванням, але ви можете додати його, вказавши в параметрі 'dump_fields'.
   * @param {string} [data.aggregate] Дозволяє отримати агреговану статистику за вказаний період. Може набувати одного з двох значень:  - __day_status__ - отримати агреговану статистику; за такого значення параметр filter має бути відсутнім або порожнім об'єктом (фільтри неприпустимі); - __порожній рядок__ - значення за замовчуванням, еквівалентне відсутності параметра aggregate, і метод event_dump/create у цьому разі працює як раніше.
   * @param {string} [data.delimiter] Роздільник полів, за замовчуванням ','. Припустимі значення ',' і ';'.
   * @param {string} [data.format] Формат отримуваного файлу “csv” (за замовчуванням) або “csv_gzip”.
   */
  constructor({ startTime, endTime, limit, allProjects, filter, dumpFields, aggregate, delimiter, format } = {}) {
    /**
     * Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, починаючи з якої необхідно отримати події. Дані
     * зберігаються до 45 днів, залежно від вашого тарифу.
     * @type {string|undefined}
     */
    this.startTime = startTime;
    /**
     * Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, до якої (не включно) запитуються події.
     * @type {string|undefined}
     */
    this.endTime = endTime;
    /**
     * Максимальна кількість подій, що повертаються, за замовчуванням 50. Якщо це значення перевищує 100
     * 000, буде створено декілька файлів, кожен з яких містить максимум 100 000 подій.
     * @type {number|undefined}
     */
    this.limit = limit;
    /**
     * Якщо у користувача увімкнено проєкти, all_projects=true дозволить отримати дані всіх проєктів.
     * За замовчуванням: `False`.
     * @type {boolean|undefined}
     */
    this.allProjects = allProjects;
    /**
     * Об'єкт із властивостями фільтра дампа подій.
     * @type {FilterObject|undefined}
     */
    this.filter = filter == null ? filter : toModel(filter, FilterObject);
    /**
     * Масив із рядків з переліком назв стовпців, які необхідно отримати у вивантаженні (у порядку
     * переліку). Якщо 'dump_fields' відсутній або порожній — застосовується набір і порядок полів за
     * замовчуванням. Припустимі значення (у порядку за замовчуванням): 'project_id', 'event_time',
     * 'job_id', 'from_email', 'email', 'status', 'delivery_status', 'metadata', 'destination_response',
     * 'user_agent', 'url', 'ip', 'tags'. З метою більшої конфіденційності поле 'subject' не входить до
     * набору полів за замовчуванням, але ви можете додати його, вказавши в параметрі 'dump_fields'.
     * @type {string[]|undefined}
     */
    this.dumpFields = dumpFields;
    /**
     * Дозволяє отримати агреговану статистику за вказаний період. Може набувати одного з двох значень:
     *
     * - __day_status__ - отримати агреговану статистику; за такого значення параметр filter має бути відсутнім або порожнім об'єктом (фільтри неприпустимі);
     * - __порожній рядок__ - значення за замовчуванням, еквівалентне відсутності параметра aggregate, і метод event_dump/create у цьому разі працює як раніше.
     * @type {string|undefined}
     */
    this.aggregate = aggregate;
    /**
     * Роздільник полів, за замовчуванням ','. Припустимі значення ',' і ';'.
     * @type {string|undefined}
     */
    this.delimiter = delimiter;
    /**
     * Формат отримуваного файлу “csv” (за замовчуванням) або “csv_gzip”.
     * За замовчуванням: `csv`.
     * @type {string|undefined}
     */
    this.format = format;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpCreateRequest}
   */
  static fromJSON(data) {
    return new EventDumpCreateRequest({
      startTime: data["start_time"],
      endTime: data["end_time"],
      limit: data["limit"],
      allProjects: data["all_projects"],
      filter: data["filter"] == null ? undefined : toModel(data["filter"], FilterObject),
      dumpFields: data["dump_fields"],
      aggregate: data["aggregate"],
      delimiter: data["delimiter"],
      format: data["format"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "start_time": this.startTime,
      "end_time": this.endTime,
      "limit": this.limit,
      "all_projects": this.allProjects,
      "filter": this.filter == null ? undefined : toPlain(this.filter),
      "dump_fields": this.dumpFields,
      "aggregate": this.aggregate,
      "delimiter": this.delimiter,
      "format": this.format,
    });
  }
}

/** Об'єкт із властивостями фільтра дампа подій. */
export class FilterObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.jobId] Ідентифікатор завдання, раніше повернутий методом [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send).
   * @param {"sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam"} [data.status] Статус email. Можна вказати одне з таких значень:  __accepted__ — повідомлення прийнято, але ще не надіслано.  __sent__ — повідомлення надіслано, але ще не доставлено.  __delivered__ — повідомлення доставлено.  __opened__ — повідомлення доставлено й зареєстровано його прочитання.  __clicked__ — повідомлення доставлено, прочитано, було зареєстровано перехід за одним з посилань у листі.  __unsubscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався за посиланням у листі.  __subscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався, а потім знову підписався за посиланням у листі.  __soft_bounced__ — тимчасова недоставка повідомлення. AllyMailer продовжує спроби доставки протягом 2 діб.  __hard_bounced__ — доставка не вдалася, спроб доставки більше не буде.  __spam__ — повідомлення доставлено, але позначено як “спам” отримувачем.
   * @param {string} [data.deliveryStatus] Внутрішній детальний статус доставки AllyMailer. Можна вказати декілька статусів через кому. Ось деякі з можливих статусів:  __err_user_unknown__ -- адреса не існує (і невідомо, чи існувала колись);  __err_user_inactive__ -- адреса не використовується;  __err_will_retry__ -- лист було тимчасово відхилено, пізніше буде здійснено повторну спробу доставки;  __err_mailbox_discarded__ -- адресу видалено (тобто колись існувала, але тепер її немає);  __err_mailbox_full__ -- поштова скринька переповнена;  __err_spam_rejected__ -- лист відхилено як спам;  __err_blacklisted__ -- лист було відхилено через наявність IP-адреси або домену відправника в якомусь із чорних списків;  __err_too_large__ -- на думку сервера отримувача, лист перевищує допустимий розмір;  __err_unsubscribed__ -- адресат раніше відписався від ваших розсилок;  __err_unreachable__ -- адресу позначено як постійно недоступну через багаторазові помилки доставки на цю адресу;  __err_skip_letter__ -- надсилання скасовано, оскільки email-адреса тимчасово недоступна;  __err_domain_inactive__ -- домен не приймає пошту або не існує;  __err_destination_misconfigured__ -- домен не приймає пошту через неправильне налаштування на боці отримувача, причому відповідь сервера містить інформацію про усувну причину (наприклад, використовується непрацюючий блеклист тощо);  __err_delivery_failed__ -- доставка не вдалася з інших причин;  __err_spam_skipped__ -- надсилання скасовано через блокування розсилки як спаму;  __err_lost__ -- лист не було надіслано через неузгодженість його частин, або його було втрачено через збій на нашому боці. Відправник має повторно надіслати лист самостійно, оскільки оригінал не зберігся;  Ми залишаємо за собою право змінювати й додавати внутрішні статуси, тому решту використовуваних наразі статусів перелічимо лише довідково, без пояснень: ok_accepted, ok_sent, ok_delivered, ok_read, ok_link_visited, ok_unsubscribed, ok_resubscribed, ok_spam_folder, ok_fbl, not_sent, skip_dup_unreachable, skip_dup_temp_unreachable, skip_dup_mailbox_full, err_spam_removed, err_resend, err_unknown, err_retry_letter, err_src_invalid, err_dest_invalid, err_not_available, err_internal, err_no_dns, err_no_smtp, err_giveup.
   * @param {string} [data.email] Адреса отримувача
   * @param {string} [data.emailFrom] Адреса відправника
   * @param {string} [data.domain] Домен отримувача
   * @param {string} [data.campaignId] Ідентифікатор розсилки, невід'ємне десяткове ціле або UUID до 128 біт, передане в метаданих у полі з іменем "campaign_id" (ім'я можна налаштувати через техпідтримку).
   */
  constructor({ jobId, status, deliveryStatus, email, emailFrom, domain, campaignId } = {}) {
    /**
     * Ідентифікатор завдання, раніше повернутий методом
     * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send).
     * @type {string|undefined}
     */
    this.jobId = jobId;
    /**
     * Статус email. Можна вказати одне з таких значень:
     *
     * __accepted__ — повідомлення прийнято, але ще не надіслано.
     *
     * __sent__ — повідомлення надіслано, але ще не доставлено.
     *
     * __delivered__ — повідомлення доставлено.
     *
     * __opened__ — повідомлення доставлено й зареєстровано його прочитання.
     *
     * __clicked__ — повідомлення доставлено, прочитано, було зареєстровано перехід за одним з посилань у
     * листі.
     *
     * __unsubscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач
     * відписався за посиланням у листі.
     *
     * __subscribed__ — повідомлення було доставлено отримувачу й прочитано ним, але користувач відписався,
     * а потім знову підписався за посиланням у листі.
     *
     * __soft_bounced__ — тимчасова недоставка повідомлення. AllyMailer продовжує спроби доставки протягом
     * 2 діб.
     *
     * __hard_bounced__ — доставка не вдалася, спроб доставки більше не буде.
     *
     * __spam__ — повідомлення доставлено, але позначено як “спам” отримувачем.
     * @type {"sent"|"delivered"|"opened"|"clicked"|"unsubscribed"|"subscribed"|"soft_bounced"|"hard_bounced"|"spam"|undefined}
     */
    this.status = status;
    /**
     * Внутрішній детальний статус доставки AllyMailer. Можна вказати декілька статусів через кому. Ось
     * деякі з можливих статусів:
     *
     * __err_user_unknown__ -- адреса не існує (і невідомо, чи існувала колись);
     *
     * __err_user_inactive__ -- адреса не використовується;
     *
     * __err_will_retry__ -- лист було тимчасово відхилено, пізніше буде здійснено повторну спробу
     * доставки;
     *
     * __err_mailbox_discarded__ -- адресу видалено (тобто колись існувала, але тепер її немає);
     *
     * __err_mailbox_full__ -- поштова скринька переповнена;
     *
     * __err_spam_rejected__ -- лист відхилено як спам;
     *
     * __err_blacklisted__ -- лист було відхилено через наявність IP-адреси або домену відправника в
     * якомусь із чорних списків;
     *
     * __err_too_large__ -- на думку сервера отримувача, лист перевищує допустимий розмір;
     *
     * __err_unsubscribed__ -- адресат раніше відписався від ваших розсилок;
     *
     * __err_unreachable__ -- адресу позначено як постійно недоступну через багаторазові помилки доставки
     * на цю адресу;
     *
     * __err_skip_letter__ -- надсилання скасовано, оскільки email-адреса тимчасово недоступна;
     *
     * __err_domain_inactive__ -- домен не приймає пошту або не існує;
     *
     * __err_destination_misconfigured__ -- домен не приймає пошту через неправильне налаштування на боці
     * отримувача, причому відповідь сервера містить інформацію про усувну причину (наприклад,
     * використовується непрацюючий блеклист тощо);
     *
     * __err_delivery_failed__ -- доставка не вдалася з інших причин;
     *
     * __err_spam_skipped__ -- надсилання скасовано через блокування розсилки як спаму;
     *
     * __err_lost__ -- лист не було надіслано через неузгодженість його частин, або його було втрачено
     * через збій на нашому боці. Відправник має повторно надіслати лист самостійно, оскільки оригінал не
     * зберігся;
     *
     * Ми залишаємо за собою право змінювати й додавати внутрішні статуси, тому решту
     * використовуваних наразі статусів перелічимо лише довідково, без пояснень:
     * ok_accepted, ok_sent, ok_delivered, ok_read, ok_link_visited, ok_unsubscribed, ok_resubscribed,
     * ok_spam_folder, ok_fbl,
     * not_sent, skip_dup_unreachable, skip_dup_temp_unreachable, skip_dup_mailbox_full,
     * err_spam_removed, err_resend, err_unknown, err_retry_letter, err_src_invalid,
     * err_dest_invalid, err_not_available, err_internal, err_no_dns, err_no_smtp, err_giveup.
     * @type {string|undefined}
     */
    this.deliveryStatus = deliveryStatus;
    /**
     * Адреса отримувача
     * @type {string|undefined}
     */
    this.email = email;
    /**
     * Адреса відправника
     * @type {string|undefined}
     */
    this.emailFrom = emailFrom;
    /**
     * Домен отримувача
     * @type {string|undefined}
     */
    this.domain = domain;
    /**
     * Ідентифікатор розсилки, невід'ємне десяткове ціле або UUID до 128 біт, передане в метаданих у полі з
     * іменем "campaign_id" (ім'я можна налаштувати через техпідтримку).
     * @type {string|undefined}
     */
    this.campaignId = campaignId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {FilterObject}
   */
  static fromJSON(data) {
    return new FilterObject({
      jobId: data["job_id"],
      status: data["status"],
      deliveryStatus: data["delivery_status"],
      email: data["email"],
      emailFrom: data["email_from"],
      domain: data["domain"],
      campaignId: data["campaign_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "job_id": this.jobId,
      "status": this.status,
      "delivery_status": this.deliveryStatus,
      "email": this.email,
      "email_from": this.emailFrom,
      "domain": this.domain,
      "campaign_id": this.campaignId,
    });
  }
}

/** EventDumpCreateResponse */
export class EventDumpCreateResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {string} [data.dumpId] Ідентифікатор дампа. Використовується для виклику методу [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  constructor({ status, dumpId } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Ідентифікатор дампа. Використовується для виклику методу
     * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
     * @type {string|undefined}
     */
    this.dumpId = dumpId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpCreateResponse}
   */
  static fromJSON(data) {
    return new EventDumpCreateResponse({
      status: data["status"],
      dumpId: data["dump_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "dump_id": this.dumpId,
    });
  }
}

/** EventDumpGetRequest */
export class EventDumpGetRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.dumpId Ідентифікатор дампа, отриманий методом [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  constructor({ dumpId } = {}) {
    /**
     * Ідентифікатор дампа, отриманий методом
     * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
     * @type {string|undefined}
     */
    this.dumpId = dumpId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpGetRequest}
   */
  static fromJSON(data) {
    return new EventDumpGetRequest({
      dumpId: data["dump_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "dump_id": this.dumpId,
    });
  }
}

/** EventDumpGetResponse */
export class EventDumpGetResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {EventDumpObject} [data.eventDump] Об'єкт із властивостями дампа подій.
   */
  constructor({ status, eventDump } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Об'єкт із властивостями дампа подій.
     * @type {EventDumpObject|undefined}
     */
    this.eventDump = eventDump == null ? eventDump : toModel(eventDump, EventDumpObject);
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpGetResponse}
   */
  static fromJSON(data) {
    return new EventDumpGetResponse({
      status: data["status"],
      eventDump: data["event_dump"] == null ? undefined : toModel(data["event_dump"], EventDumpObject),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "event_dump": this.eventDump == null ? undefined : toPlain(this.eventDump),
    });
  }
}

/** Об'єкт із властивостями дампа подій. */
export class EventDumpObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.dumpId] Ідентифікатор дампа, отриманий методом [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   * @param {string} [data.dumpStatus] Статус задачі. Одне з чотирьох значень:  - __queued__ - очікує в черзі, обробка ще не починалася; - __in_process__ - триває обробка; - __ready__ - обробку завершено, файли доступні для завантаження; - __failed__ - обробку перервано з помилкою.
   * @param {EventDumpFilesObject[]} [data.files] Масив об'єктів, кожен з яких позначає готовий до завантаження файл. Навіть якщо "dump_status"="in_process", уже можна завантажувати ті файли, які вказані в "files". У разі відсутності подій за заданими параметрами буде повернуто порожній масив.
   */
  constructor({ dumpId, dumpStatus, files } = {}) {
    /**
     * Ідентифікатор дампа, отриманий методом
     * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
     * @type {string|undefined}
     */
    this.dumpId = dumpId;
    /**
     * Статус задачі. Одне з чотирьох значень:
     *
     * - __queued__ - очікує в черзі, обробка ще не починалася;
     * - __in_process__ - триває обробка;
     * - __ready__ - обробку завершено, файли доступні для завантаження;
     * - __failed__ - обробку перервано з помилкою.
     * @type {string|undefined}
     */
    this.dumpStatus = dumpStatus;
    /**
     * Масив об'єктів, кожен з яких позначає готовий до завантаження файл. Навіть якщо
     * "dump_status"="in_process", уже можна завантажувати ті файли, які вказані в "files". У разі
     * відсутності подій за заданими параметрами буде повернуто порожній масив.
     * @type {EventDumpFilesObject[]|undefined}
     */
    this.files = files == null ? files : files.map((item0) => toModel(item0, EventDumpFilesObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpObject}
   */
  static fromJSON(data) {
    return new EventDumpObject({
      dumpId: data["dump_id"],
      dumpStatus: data["dump_status"],
      files: data["files"] == null ? undefined : data["files"].map((item0) => toModel(item0, EventDumpFilesObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "dump_id": this.dumpId,
      "dump_status": this.dumpStatus,
      "files": this.files == null ? undefined : this.files.map((item0) => toPlain(item0)),
    });
  }
}

/** Об'єкт із властивостями файлу дампа подій. */
export class EventDumpFilesObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.url] Унікальний URL для завантаження файлу з розширенням .csv або .csv.gz, залежно від запитаного формату.
   * @param {number} [data.size] Розмір файлу.
   */
  constructor({ url, size } = {}) {
    /**
     * Унікальний URL для завантаження файлу з розширенням .csv або .csv.gz, залежно від запитаного
     * формату.
     * @type {string|undefined}
     */
    this.url = url;
    /**
     * Розмір файлу.
     * @type {number|undefined}
     */
    this.size = size;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpFilesObject}
   */
  static fromJSON(data) {
    return new EventDumpFilesObject({
      url: data["url"],
      size: data["size"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "url": this.url,
      "size": this.size,
    });
  }
}

/** EventDumpListResponse */
export class EventDumpListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {EventDumpObject[]} [data.eventDumps] Масив об'єктів, що описують дампи подій. Кожен об'єкт містить ті самі властивості, що й об'єкт 'event_dump', який повертає метод [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  constructor({ status, eventDumps } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів, що описують дампи подій. Кожен об'єкт містить ті самі властивості, що й об'єкт
     * 'event_dump', який повертає метод
     * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
     * @type {EventDumpObject[]|undefined}
     */
    this.eventDumps = eventDumps == null ? eventDumps : eventDumps.map((item0) => toModel(item0, EventDumpObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpListResponse}
   */
  static fromJSON(data) {
    return new EventDumpListResponse({
      status: data["status"],
      eventDumps: data["event_dumps"] == null ? undefined : data["event_dumps"].map((item0) => toModel(item0, EventDumpObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "event_dumps": this.eventDumps == null ? undefined : this.eventDumps.map((item0) => toPlain(item0)),
    });
  }
}

/** EventDumpDeleteRequest */
export class EventDumpDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} data.dumpId Ідентифікатор дампа, отриманий методом [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  constructor({ dumpId } = {}) {
    /**
     * Ідентифікатор дампа, отриманий методом
     * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
     * @type {string|undefined}
     */
    this.dumpId = dumpId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {EventDumpDeleteRequest}
   */
  static fromJSON(data) {
    return new EventDumpDeleteRequest({
      dumpId: data["dump_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "dump_id": this.dumpId,
    });
  }
}
