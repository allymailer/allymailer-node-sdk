// SuppressionApi: API methods of the Suppression section.
import { SuccessResponse } from "../../common/models.js";
import { SuppressionDeleteRequest, SuppressionGetRequest, SuppressionGetResponse, SuppressionListRequest, SuppressionListResponse, SuppressionSetRequest } from "./models.js";

/**
 * Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка,
 * недоступність, скарги.
 */
export class SuppressionApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Додає email-адресу до списку недоступних. Ви завжди зможете пізніше видалити цю адресу зі списку
   * недоступних методом
   * [suppression/delete](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-delete).
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set
   * @param {SuppressionSetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async set(request) {
    return SuccessResponse.fromJSON(await this.client.call("/suppression/set.json", request));
  }

  /**
   * Повертає причину й дату блокування email-адреси.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-get
   * @param {SuppressionGetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuppressionGetResponse>}
   * @throws {ApiError}
   */
  async get(request) {
    return SuppressionGetResponse.fromJSON(await this.client.call("/suppression/get.json", request));
  }

  /**
   * Повертає список недоступних, починаючи з указаної дати.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-list
   * @param {SuppressionListRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuppressionListResponse>}
   * @throws {ApiError}
   */
  async list(request) {
    return SuppressionListResponse.fromJSON(await this.client.call("/suppression/list.json", request));
  }

  /**
   * Видаляє email-адресу зі списку недоступних (лише записи з is_deletable=true). Якщо жодного запису
   * для email не знайдено, повертається помилка API 3003. Якщо записи про недоступність знайдено, але
   * жодну з них видалити не можна, повертається помилка API 3004. Якщо перевищено ліміт видалень на
   * добу, повертається помилка API 906.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-delete
   * @param {SuppressionDeleteRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return SuccessResponse.fromJSON(await this.client.call("/suppression/delete.json", request));
  }
}
