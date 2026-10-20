// TagApi: API methods of the Tag section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { SuccessResponse } from "../../common/models.js";
import type { TagDeleteRequest, TagDeleteRequestJSON, TagListResponse } from "./models.js";

/**
 * Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за
 * потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням
 * реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне
 * повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання
 * міток.
 */
export declare class TagApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Метод без параметрів, повертає список усіх користувацьких міток.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#tag-list
   * @throws {ApiError}
   */
  list(): Promise<TagListResponse>;

  /**
   * Видаляє мітку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#tag-delete
   * @throws {ApiError}
   */
  delete(request: TagDeleteRequest | TagDeleteRequestJSON): Promise<SuccessResponse>;
}
