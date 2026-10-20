// Types of the models of the EventDump section.
import type { EmailStatus } from "../../common/models.js";

/** EventDumpCreateRequest in the API format: the object sent and received as JSON. */
export interface EventDumpCreateRequestJSON {
  "start_time": string;
  "end_time"?: string;
  "limit"?: number;
  "all_projects"?: boolean;
  "filter"?: FilterObjectJSON;
  "dump_fields"?: Array<string>;
  "aggregate"?: string;
  "delimiter"?: string;
  "format"?: string;
}

/** Fields of new EventDumpCreateRequest(): a nested model may be a plain object in the API format. */
export interface EventDumpCreateRequestInit {
  /**
   * Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, починаючи з якої необхідно отримати події. Дані
   * зберігаються до 45 днів, залежно від вашого тарифу.
   */
  startTime: string;
  /** Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, до якої (не включно) запитуються події. */
  endTime?: string;
  /**
   * Максимальна кількість подій, що повертаються, за замовчуванням 50. Якщо це значення перевищує 100
   * 000, буде створено декілька файлів, кожен з яких містить максимум 100 000 подій.
   */
  limit?: number;
  /**
   * Якщо у користувача увімкнено проєкти, all_projects=true дозволить отримати дані всіх проєктів.
   * За замовчуванням: `False`.
   */
  allProjects?: boolean;
  /** Об'єкт із властивостями фільтра дампа подій. */
  filter?: FilterObject | FilterObjectJSON;
  /**
   * Масив із рядків з переліком назв стовпців, які необхідно отримати у вивантаженні (у порядку
   * переліку). Якщо 'dump_fields' відсутній або порожній — застосовується набір і порядок полів за
   * замовчуванням. Припустимі значення (у порядку за замовчуванням): 'project_id', 'event_time',
   * 'job_id', 'from_email', 'email', 'status', 'delivery_status', 'metadata', 'destination_response',
   * 'user_agent', 'url', 'ip', 'tags'. З метою більшої конфіденційності поле 'subject' не входить до
   * набору полів за замовчуванням, але ви можете додати його, вказавши в параметрі 'dump_fields'.
   */
  dumpFields?: Array<string>;
  /**
   * Дозволяє отримати агреговану статистику за вказаний період. Може набувати одного з двох значень:
   *
   * - __day_status__ - отримати агреговану статистику; за такого значення параметр filter має бути відсутнім або порожнім об'єктом (фільтри неприпустимі);
   * - __порожній рядок__ - значення за замовчуванням, еквівалентне відсутності параметра aggregate, і метод event_dump/create у цьому разі працює як раніше.
   */
  aggregate?: string;
  /** Роздільник полів, за замовчуванням ','. Припустимі значення ',' і ';'. */
  delimiter?: string;
  /**
   * Формат отримуваного файлу “csv” (за замовчуванням) або “csv_gzip”.
   * За замовчуванням: `csv`.
   */
  format?: string;
}

/** EventDumpCreateRequest */
export declare class EventDumpCreateRequest {
  constructor(data: EventDumpCreateRequestInit);
  /**
   * Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, починаючи з якої необхідно отримати події. Дані
   * зберігаються до 45 днів, залежно від вашого тарифу.
   */
  startTime: string;
  /** Дата й час у форматі РРРР-ММ-ДД гг:хх:сс, до якої (не включно) запитуються події. */
  endTime?: string;
  /**
   * Максимальна кількість подій, що повертаються, за замовчуванням 50. Якщо це значення перевищує 100
   * 000, буде створено декілька файлів, кожен з яких містить максимум 100 000 подій.
   */
  limit?: number;
  /**
   * Якщо у користувача увімкнено проєкти, all_projects=true дозволить отримати дані всіх проєктів.
   * За замовчуванням: `False`.
   */
  allProjects?: boolean;
  /** Об'єкт із властивостями фільтра дампа подій. */
  filter?: FilterObject;
  /**
   * Масив із рядків з переліком назв стовпців, які необхідно отримати у вивантаженні (у порядку
   * переліку). Якщо 'dump_fields' відсутній або порожній — застосовується набір і порядок полів за
   * замовчуванням. Припустимі значення (у порядку за замовчуванням): 'project_id', 'event_time',
   * 'job_id', 'from_email', 'email', 'status', 'delivery_status', 'metadata', 'destination_response',
   * 'user_agent', 'url', 'ip', 'tags'. З метою більшої конфіденційності поле 'subject' не входить до
   * набору полів за замовчуванням, але ви можете додати його, вказавши в параметрі 'dump_fields'.
   */
  dumpFields?: Array<string>;
  /**
   * Дозволяє отримати агреговану статистику за вказаний період. Може набувати одного з двох значень:
   *
   * - __day_status__ - отримати агреговану статистику; за такого значення параметр filter має бути відсутнім або порожнім об'єктом (фільтри неприпустимі);
   * - __порожній рядок__ - значення за замовчуванням, еквівалентне відсутності параметра aggregate, і метод event_dump/create у цьому разі працює як раніше.
   */
  aggregate?: string;
  /** Роздільник полів, за замовчуванням ','. Припустимі значення ',' і ';'. */
  delimiter?: string;
  /**
   * Формат отримуваного файлу “csv” (за замовчуванням) або “csv_gzip”.
   * За замовчуванням: `csv`.
   */
  format?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpCreateRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpCreateRequestJSON;
}

/** FilterObject in the API format: the object sent and received as JSON. */
export interface FilterObjectJSON {
  "job_id"?: string;
  "status"?: EmailStatus;
  "delivery_status"?: string;
  "email"?: string;
  "email_from"?: string;
  "domain"?: string;
  "campaign_id"?: string;
}

/** Fields of new FilterObject(): a nested model may be a plain object in the API format. */
export interface FilterObjectInit {
  /**
   * Ідентифікатор завдання, раніше повернутий методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send).
   */
  jobId?: string;
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
   */
  status?: EmailStatus;
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
   */
  deliveryStatus?: string;
  /** Адреса отримувача */
  email?: string;
  /** Адреса відправника */
  emailFrom?: string;
  /** Домен отримувача */
  domain?: string;
  /**
   * Ідентифікатор розсилки, невід'ємне десяткове ціле або UUID до 128 біт, передане в метаданих у полі з
   * іменем "campaign_id" (ім'я можна налаштувати через техпідтримку).
   */
  campaignId?: string;
}

/** Об'єкт із властивостями фільтра дампа подій. */
export declare class FilterObject {
  constructor(data?: FilterObjectInit);
  /**
   * Ідентифікатор завдання, раніше повернутий методом
   * [email/send](https://docs.allymailer.com.ua/ua/web-api-ref#email-send).
   */
  jobId?: string;
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
   */
  status?: EmailStatus;
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
   */
  deliveryStatus?: string;
  /** Адреса отримувача */
  email?: string;
  /** Адреса відправника */
  emailFrom?: string;
  /** Домен отримувача */
  domain?: string;
  /**
   * Ідентифікатор розсилки, невід'ємне десяткове ціле або UUID до 128 біт, передане в метаданих у полі з
   * іменем "campaign_id" (ім'я можна налаштувати через техпідтримку).
   */
  campaignId?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): FilterObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): FilterObjectJSON;
}

/** EventDumpCreateResponse in the API format: the object sent and received as JSON. */
export interface EventDumpCreateResponseJSON {
  "status"?: string;
  "dump_id"?: string;
}

/** Fields of new EventDumpCreateResponse(): a nested model may be a plain object in the API format. */
export interface EventDumpCreateResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * Ідентифікатор дампа. Використовується для виклику методу
   * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  dumpId?: string;
}

/** EventDumpCreateResponse */
export declare class EventDumpCreateResponse {
  constructor(data?: EventDumpCreateResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * Ідентифікатор дампа. Використовується для виклику методу
   * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  dumpId?: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpCreateResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpCreateResponseJSON;
}

/** EventDumpGetRequest in the API format: the object sent and received as JSON. */
export interface EventDumpGetRequestJSON {
  "dump_id": string;
}

/** Fields of new EventDumpGetRequest(): a nested model may be a plain object in the API format. */
export interface EventDumpGetRequestInit {
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId: string;
}

/** EventDumpGetRequest */
export declare class EventDumpGetRequest {
  constructor(data: EventDumpGetRequestInit);
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpGetRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpGetRequestJSON;
}

/** EventDumpGetResponse in the API format: the object sent and received as JSON. */
export interface EventDumpGetResponseJSON {
  "status"?: string;
  "event_dump"?: EventDumpObjectJSON;
}

/** Fields of new EventDumpGetResponse(): a nested model may be a plain object in the API format. */
export interface EventDumpGetResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт із властивостями дампа подій. */
  eventDump?: EventDumpObject | EventDumpObjectJSON;
}

/** EventDumpGetResponse */
export declare class EventDumpGetResponse {
  constructor(data?: EventDumpGetResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /** Об'єкт із властивостями дампа подій. */
  eventDump?: EventDumpObject;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpGetResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpGetResponseJSON;
}

/** EventDumpObject in the API format: the object sent and received as JSON. */
export interface EventDumpObjectJSON {
  "dump_id"?: string;
  "dump_status"?: string;
  "files"?: Array<EventDumpFilesObjectJSON>;
}

/** Fields of new EventDumpObject(): a nested model may be a plain object in the API format. */
export interface EventDumpObjectInit {
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId?: string;
  /**
   * Статус задачі. Одне з чотирьох значень:
   *
   * - __queued__ - очікує в черзі, обробка ще не починалася;
   * - __in_process__ - триває обробка;
   * - __ready__ - обробку завершено, файли доступні для завантаження;
   * - __failed__ - обробку перервано з помилкою.
   */
  dumpStatus?: string;
  /**
   * Масив об'єктів, кожен з яких позначає готовий до завантаження файл. Навіть якщо
   * "dump_status"="in_process", уже можна завантажувати ті файли, які вказані в "files". У разі
   * відсутності подій за заданими параметрами буде повернуто порожній масив.
   */
  files?: Array<EventDumpFilesObject | EventDumpFilesObjectJSON>;
}

/** Об'єкт із властивостями дампа подій. */
export declare class EventDumpObject {
  constructor(data?: EventDumpObjectInit);
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId?: string;
  /**
   * Статус задачі. Одне з чотирьох значень:
   *
   * - __queued__ - очікує в черзі, обробка ще не починалася;
   * - __in_process__ - триває обробка;
   * - __ready__ - обробку завершено, файли доступні для завантаження;
   * - __failed__ - обробку перервано з помилкою.
   */
  dumpStatus?: string;
  /**
   * Масив об'єктів, кожен з яких позначає готовий до завантаження файл. Навіть якщо
   * "dump_status"="in_process", уже можна завантажувати ті файли, які вказані в "files". У разі
   * відсутності подій за заданими параметрами буде повернуто порожній масив.
   */
  files?: Array<EventDumpFilesObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpObjectJSON;
}

/** EventDumpFilesObject in the API format: the object sent and received as JSON. */
export interface EventDumpFilesObjectJSON {
  "url"?: string;
  "size"?: number;
}

/** Fields of new EventDumpFilesObject(): a nested model may be a plain object in the API format. */
export interface EventDumpFilesObjectInit {
  /**
   * Унікальний URL для завантаження файлу з розширенням .csv або .csv.gz, залежно від запитаного
   * формату.
   */
  url?: string;
  /** Розмір файлу. */
  size?: number;
}

/** Об'єкт із властивостями файлу дампа подій. */
export declare class EventDumpFilesObject {
  constructor(data?: EventDumpFilesObjectInit);
  /**
   * Унікальний URL для завантаження файлу з розширенням .csv або .csv.gz, залежно від запитаного
   * формату.
   */
  url?: string;
  /** Розмір файлу. */
  size?: number;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpFilesObject;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpFilesObjectJSON;
}

/** EventDumpListResponse in the API format: the object sent and received as JSON. */
export interface EventDumpListResponseJSON {
  "status"?: string;
  "event_dumps"?: Array<EventDumpObjectJSON>;
}

/** Fields of new EventDumpListResponse(): a nested model may be a plain object in the API format. */
export interface EventDumpListResponseInit {
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * Масив об'єктів, що описують дампи подій. Кожен об'єкт містить ті самі властивості, що й об'єкт
   * 'event_dump', який повертає метод
   * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  eventDumps?: Array<EventDumpObject | EventDumpObjectJSON>;
}

/** EventDumpListResponse */
export declare class EventDumpListResponse {
  constructor(data?: EventDumpListResponseInit);
  /**
   * Рядок "success".
   * Допустимі значення: `success`.
   */
  status?: string;
  /**
   * Масив об'єктів, що описують дампи подій. Кожен об'єкт містить ті самі властивості, що й об'єкт
   * 'event_dump', який повертає метод
   * [event-dump/get](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get).
   */
  eventDumps?: Array<EventDumpObject>;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpListResponse;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpListResponseJSON;
}

/** EventDumpDeleteRequest in the API format: the object sent and received as JSON. */
export interface EventDumpDeleteRequestJSON {
  "dump_id": string;
}

/** Fields of new EventDumpDeleteRequest(): a nested model may be a plain object in the API format. */
export interface EventDumpDeleteRequestInit {
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId: string;
}

/** EventDumpDeleteRequest */
export declare class EventDumpDeleteRequest {
  constructor(data: EventDumpDeleteRequestInit);
  /**
   * Ідентифікатор дампа, отриманий методом
   * [event-dump/create](https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create).
   */
  dumpId: string;
  /** Builds the object from decoded JSON. */
  static fromJSON(data: Record<string, any>): EventDumpDeleteRequest;
  /** JSON-ready object in the API format, empty fields are omitted. */
  toJSON(): EventDumpDeleteRequestJSON;
}
