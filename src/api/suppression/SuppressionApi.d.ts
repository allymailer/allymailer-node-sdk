// SuppressionApi: API methods of the Suppression section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { SuccessResponse } from "../../common/models.js";
import type { SuppressionDeleteRequest, SuppressionDeleteRequestJSON, SuppressionGetRequest, SuppressionGetRequestJSON, SuppressionGetResponse, SuppressionListRequest, SuppressionListRequestJSON, SuppressionListResponse, SuppressionSetRequest, SuppressionSetRequestJSON } from "./models.js";

/**
 * Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка,
 * недоступність, скарги.
 */
export declare class SuppressionApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Додає email-адресу до списку недоступних. Ви завжди зможете пізніше видалити цю адресу зі списку
   * недоступних методом
   * [suppression/delete](https://docs.allymailer.com.ua/ua/web-api-ref#suppression-delete).
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-set
   * @throws {ApiError}
   */
  set(request: SuppressionSetRequest | SuppressionSetRequestJSON): Promise<SuccessResponse>;

  /**
   * Повертає причину й дату блокування email-адреси.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-get
   * @throws {ApiError}
   */
  get(request: SuppressionGetRequest | SuppressionGetRequestJSON): Promise<SuppressionGetResponse>;

  /**
   * Повертає список недоступних, починаючи з указаної дати.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-list
   * @throws {ApiError}
   */
  list(request?: SuppressionListRequest | SuppressionListRequestJSON): Promise<SuppressionListResponse>;

  /**
   * Видаляє email-адресу зі списку недоступних (лише записи з is_deletable=true). Якщо жодного запису
   * для email не знайдено, повертається помилка API 3003. Якщо записи про недоступність знайдено, але
   * жодну з них видалити не можна, повертається помилка API 3004. Якщо перевищено ліміт видалень на
   * добу, повертається помилка API 906.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#suppression-delete
   * @throws {ApiError}
   */
  delete(request: SuppressionDeleteRequest | SuppressionDeleteRequestJSON): Promise<SuccessResponse>;
}
