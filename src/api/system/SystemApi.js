// SystemApi: API methods of the System section.
import { SystemInfoResponse, SystemPingResponse } from "./models.js";

/** Системні методи. */
export class SystemApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Перевіряє валідність API-ключа та повертає ідентифікатор користувача.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#system-ping
   * @returns {Promise<SystemPingResponse>}
   * @throws {ApiError}
   */
  async ping() {
    return SystemPingResponse.fromJSON(await this.client.call("/system/ping.json"));
  }

  /**
   * Повертає інформацію про користувача або проєкт за API-ключем.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#system-info
   * @returns {Promise<SystemInfoResponse>}
   * @throws {ApiError}
   */
  async info() {
    return SystemInfoResponse.fromJSON(await this.client.call("/system/info.json"));
  }
}
