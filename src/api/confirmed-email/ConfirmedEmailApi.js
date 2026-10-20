// ConfirmedEmailApi: API methods of the ConfirmedEmail section.
import { ConfirmedEmailCreateResponse, ConfirmedEmailDeleteResponse, ConfirmedEmailListResponse, ConfirmedEmailRequest } from "./models.js";

/**
 * Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з
 * API-ключем основного облікового запису.
 */
export class ConfirmedEmailApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Adds an email address and sends a confirmation link.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-create
   * @param {ConfirmedEmailRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ConfirmedEmailCreateResponse>}
   * @throws {ApiError}
   */
  async create(request) {
    return ConfirmedEmailCreateResponse.fromJSON(await this.client.call("/confirmed-email/create.json", request));
  }

  /**
   * Lists confirmed and unconfirmed email addresses for the account.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-list
   * @returns {Promise<ConfirmedEmailListResponse>}
   * @throws {ApiError}
   */
  async list() {
    return ConfirmedEmailListResponse.fromJSON(await this.client.call("/confirmed-email/list.json"));
  }

  /**
   * Deletes an email address from the account's confirmed email list.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#confirmed-email-delete
   * @param {ConfirmedEmailRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ConfirmedEmailDeleteResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return ConfirmedEmailDeleteResponse.fromJSON(await this.client.call("/confirmed-email/delete.json", request));
  }
}
