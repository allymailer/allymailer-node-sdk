// TemplateApi: API methods of the Template section.
import { SuccessResponse } from "../../common/models.js";
import { TemplateDeleteRequest, TemplateGetRequest, TemplateGetResponse, TemplateListRequest, TemplateListResponse, TemplateSetRequest, TemplateSetResponse } from "./models.js";

/**
 * Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не
 * обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів
 * надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте
 * [тут](https://docs.allymailer.com.ua/ua/template-engines).
 */
export class TemplateApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Створити або оновити шаблон.
   *
   * Обмеження:
   * * Максимальний розмір запиту — 10 MB.
   * * Кількість шаблонів обмежено 10000.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-set
   * @param {TemplateSetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<TemplateSetResponse>}
   * @throws {ApiError}
   */
  async set(request) {
    return TemplateSetResponse.fromJSON(await this.client.call("/template/set.json", request));
  }

  /**
   * Повертає властивості шаблону за його ідентифікатором.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-get
   * @param {TemplateGetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<TemplateGetResponse>}
   * @throws {ApiError}
   */
  async get(request) {
    return TemplateGetResponse.fromJSON(await this.client.call("/template/get.json", request));
  }

  /**
   * Повертає повний список або частину списку всіх шаблонів.
   *
   * Ви можете переглядати великий список частинами, використовуючи параметри "offset" і "limit". Якщо
   * повернуто менше ніж "limit" шаблонів — значить, ви досягли кінця списку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-list
   * @param {TemplateListRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<TemplateListResponse>}
   * @throws {ApiError}
   */
  async list(request) {
    return TemplateListResponse.fromJSON(await this.client.call("/template/list.json", request));
  }

  /**
   * Видаляє шаблон за ідентифікатором.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-delete
   * @param {TemplateDeleteRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return SuccessResponse.fromJSON(await this.client.call("/template/delete.json", request));
  }
}
