// SystemApi: API methods of the System section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { SystemInfoResponse, SystemPingResponse } from "./models.js";

/** Системні методи. */
export declare class SystemApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Перевіряє валідність API-ключа та повертає ідентифікатор користувача.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#system-ping
   * @throws {ApiError}
   */
  ping(): Promise<SystemPingResponse>;

  /**
   * Повертає інформацію про користувача або проєкт за API-ключем.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#system-info
   * @throws {ApiError}
   */
  info(): Promise<SystemInfoResponse>;
}
