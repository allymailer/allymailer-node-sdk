// EventDumpApi: API methods of the EventDump section.
import { SuccessResponse } from "../../common/models.js";
import { EventDumpCreateRequest, EventDumpCreateResponse, EventDumpDeleteRequest, EventDumpGetRequest, EventDumpGetResponse, EventDumpListResponse } from "./models.js";

/**
 * Методи для отримання списку подій, що сталися, за певний період. Дані зберігаються до 45 днів,
 * залежно від вашого тарифу. Це означає, що можна запросити події, починаючи з 00:00:00 45-го дня тому
 * і до поточного моменту часу. Для індивідуальних тарифів з великими обсягами за замовчуванням події
 * доступні лише за останні 7 днів.
 */
export class EventDumpApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Асинхронний метод, який ініціює підготовку для завантаження файлів дампа у форматі CSV. Максимальна
   * кількість збережених/створюваних дампів обмежена десятьма. У разі досягнення ліміту для запиту на
   * підготовку нового дампа потрібно видалити старі. Час зберігання сформованого дампа — 8 годин, після
   * чого він автоматично видаляється. Якщо період запиту даних більший за добу або подій багато, буде
   * сформовано декілька файлів, у кожному з яких буде не більше ніж 100 000 подій. Файл містить колонки
   * з такою інформацією — 'event_time', 'job_id', 'from_email', 'email', 'status', 'delivery_status',
   * 'metadata', 'destination_response', 'user_agent', 'url', 'ip', 'tags' і 'project_id' (якщо у
   * користувача увімкнено проєкти). Ви можете відфільтрувати поля та змінити їх порядок, а також додати
   * поле 'subject' за допомогою параметра 'dump_fileds'.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-create
   * @param {EventDumpCreateRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<EventDumpCreateResponse>}
   * @throws {ApiError}
   */
  async create(request) {
    return EventDumpCreateResponse.fromJSON(await this.client.call("/event-dump/create.json", request));
  }

  /**
   * Повертає властивості дампа за його ідентифікатором.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-get
   * @param {EventDumpGetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<EventDumpGetResponse>}
   * @throws {ApiError}
   */
  async get(request) {
    return EventDumpGetResponse.fromJSON(await this.client.call("/event-dump/get.json", request));
  }

  /**
   * Метод без параметрів, повертає список усіх дампів подій.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-list
   * @returns {Promise<EventDumpListResponse>}
   * @throws {ApiError}
   */
  async list() {
    return EventDumpListResponse.fromJSON(await this.client.call("/event-dump/list.json"));
  }

  /**
   * Видаляє дамп із черги та/або зі сховища.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#event-dump-delete
   * @param {EventDumpDeleteRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return SuccessResponse.fromJSON(await this.client.call("/event-dump/delete.json", request));
  }
}
