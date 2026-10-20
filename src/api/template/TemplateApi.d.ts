// TemplateApi: API methods of the Template section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { SuccessResponse } from "../../common/models.js";
import type { TemplateDeleteRequest, TemplateDeleteRequestJSON, TemplateGetRequest, TemplateGetRequestJSON, TemplateGetResponse, TemplateListRequest, TemplateListRequestJSON, TemplateListResponse, TemplateSetRequest, TemplateSetRequestJSON, TemplateSetResponse } from "./models.js";

/**
 * Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не
 * обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів
 * надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте
 * [тут](https://docs.allymailer.com.ua/en/template-engines).
 */
export declare class TemplateApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Створити або оновити шаблон.
   *
   * Обмеження:
   * * Максимальний розмір запиту — 10 MB.
   * * Кількість шаблонів обмежено 10000.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-set
   * @throws {ApiError}
   */
  set(request: TemplateSetRequest | TemplateSetRequestJSON): Promise<TemplateSetResponse>;

  /**
   * Повертає властивості шаблону за його ідентифікатором.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-get
   * @throws {ApiError}
   */
  get(request: TemplateGetRequest | TemplateGetRequestJSON): Promise<TemplateGetResponse>;

  /**
   * Повертає повний список або частину списку всіх шаблонів.
   *
   * Ви можете переглядати великий список частинами, використовуючи параметри "offset" і "limit". Якщо
   * повернуто менше ніж "limit" шаблонів — значить, ви досягли кінця списку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-list
   * @throws {ApiError}
   */
  list(request?: TemplateListRequest | TemplateListRequestJSON): Promise<TemplateListResponse>;

  /**
   * Видаляє шаблон за ідентифікатором.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#template-delete
   * @throws {ApiError}
   */
  delete(request: TemplateDeleteRequest | TemplateDeleteRequestJSON): Promise<SuccessResponse>;
}
