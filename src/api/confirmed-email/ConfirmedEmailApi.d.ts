// ConfirmedEmailApi: API methods of the ConfirmedEmail section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { ConfirmedEmailCreateResponse, ConfirmedEmailDeleteResponse, ConfirmedEmailListResponse, ConfirmedEmailRequest, ConfirmedEmailRequestJSON } from "./models.js";

/**
 * Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з
 * API-ключем основного облікового запису.
 */
export declare class ConfirmedEmailApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Adds an email address and sends a confirmation link.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-create
   * @throws {ApiError}
   */
  create(request: ConfirmedEmailRequest | ConfirmedEmailRequestJSON): Promise<ConfirmedEmailCreateResponse>;

  /**
   * Lists confirmed and unconfirmed email addresses for the account.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-list
   * @throws {ApiError}
   */
  list(): Promise<ConfirmedEmailListResponse>;

  /**
   * Deletes an email address from the account's confirmed email list.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-delete
   * @throws {ApiError}
   */
  delete(request: ConfirmedEmailRequest | ConfirmedEmailRequestJSON): Promise<ConfirmedEmailDeleteResponse>;
}
