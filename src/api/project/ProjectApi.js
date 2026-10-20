// ProjectApi: API methods of the Project section.
import { SuccessResponse } from "../../common/models.js";
import { ProjectCreateRequest, ProjectCreateResponse, ProjectDeleteRequest, ProjectListRequest, ProjectListResponse, ProjectUpdateRequest, ProjectUpdateResponse } from "./models.js";

/**
 * Проєкти дозволяють об'єднати кілька незалежних доменів із webhook, шаблонами та списками відписки.
 * Це дуже корисно, якщо у вас є власні клієнти і ви керуєте їхніми даними з одного облікового запису
 * AllyMailer. Кожен проєкт отримує власний ключ API, а виклики методів API з цим ключем обробляють
 * лише дані цього проєкту. Таким чином, ви можете призначити окремий проєкт для кожного користувача і
 * бути впевненими, що вони не конфліктуватимуть: наприклад, відписка від одного проєкту не вплине на
 * інший.
 *
 * Методи проєктів за замовчуванням вимкнено через заходи захисту від спаму. Щоб їх увімкнути, вам
 * необхідно звернутися до [служби підтримки](https://cp.allymailer.com/ua/support).
 *
 * Зверніть увагу: за замовчуванням домени для надсилання підтверджуються та використовуються незалежно
 * для основного облікового запису й кожного з проєктів. Але є можливість увімкнути для проєктів
 * використання доменів, підтверджених в основному обліковому записі. Просто попросіть про це
 * [техпідтримку](https://cp.allymailer.com/ua/support).
 */
export class ProjectApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Створити новий проєкт.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-create
   * @param {ProjectCreateRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ProjectCreateResponse>}
   * @throws {ApiError}
   */
  async create(request) {
    return ProjectCreateResponse.fromJSON(await this.client.call("/project/create.json", request));
  }

  /**
   * Змінити властивості проєкту.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-update
   * @param {ProjectUpdateRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ProjectUpdateResponse>}
   * @throws {ApiError}
   */
  async update(request) {
    return ProjectUpdateResponse.fromJSON(await this.client.call("/project/update.json", request));
  }

  /**
   * Повертає список проєктів.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-list
   * @param {ProjectListRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ProjectListResponse>}
   * @throws {ApiError}
   */
  async list(request) {
    return ProjectListResponse.fromJSON(await this.client.call("/project/list.json", request));
  }

  /**
   * Видалити проєкт.
   *
   * Деякий час проєкт не видаляється остаточно, і його ще можна відновити — для цього необхідно
   * звернутися в техпідтримку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-delete
   * @param {ProjectDeleteRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<SuccessResponse>}
   * @throws {ApiError}
   */
  async delete(request) {
    return SuccessResponse.fromJSON(await this.client.call("/project/delete.json", request));
  }
}
