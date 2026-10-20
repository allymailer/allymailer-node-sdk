// TagApi: API methods of the Tag section.
import { SuccessResponse } from "../../common/models.js";
import { TagDeleteRequest, TagListResponse } from "./models.js";

/**
 * Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за
 * потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням
 * реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне
 * повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання
 * міток.
 */
export class TagApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Метод без параметрів, повертає список усіх користувацьких міток.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#tag-list
   * @returns {Promise<TagListResponse>}
   * @throws {ApiError}
   */
  async list() {
    return TagListResponse.fromJSON(await this.client.call("/tag/list.json"));
  }

  /**
   * Видаляє мітку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#tag-delete
   * @param {TagDeleteRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return SuccessResponse.fromJSON(await this.client.call("/tag/delete.json", request));
  }
}
