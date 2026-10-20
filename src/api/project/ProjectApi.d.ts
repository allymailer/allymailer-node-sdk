// ProjectApi: API methods of the Project section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { SuccessResponse } from "../../common/models.js";
import type { ProjectCreateRequest, ProjectCreateRequestJSON, ProjectCreateResponse, ProjectDeleteRequest, ProjectDeleteRequestJSON, ProjectListRequest, ProjectListRequestJSON, ProjectListResponse, ProjectUpdateRequest, ProjectUpdateRequestJSON, ProjectUpdateResponse } from "./models.js";

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
export declare class ProjectApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Створити новий проєкт.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-create
   * @throws {ApiError}
   */
  create(request: ProjectCreateRequest | ProjectCreateRequestJSON): Promise<ProjectCreateResponse>;

  /**
   * Змінити властивості проєкту.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-update
   * @throws {ApiError}
   */
  update(request: ProjectUpdateRequest | ProjectUpdateRequestJSON): Promise<ProjectUpdateResponse>;

  /**
   * Повертає список проєктів.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-list
   * @throws {ApiError}
   */
  list(request?: ProjectListRequest | ProjectListRequestJSON): Promise<ProjectListResponse>;

  /**
   * Видалити проєкт.
   *
   * Деякий час проєкт не видаляється остаточно, і його ще можна відновити — для цього необхідно
   * звернутися в техпідтримку.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#project-delete
   * @throws {ApiError}
   */
  delete(request?: ProjectDeleteRequest | ProjectDeleteRequestJSON): Promise<SuccessResponse>;
}
