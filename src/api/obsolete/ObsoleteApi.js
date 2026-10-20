// ObsoleteApi: API methods of the Obsolete section.
import { ObsoleteUnsubscribedCheckRequest, ObsoleteUnsubscribedCheckResponse, ObsoleteUnsubscribedListRequest, ObsoleteUnsubscribedListResponse, ObsoleteUnsubscribedSetRequest, ObsoleteUnsubscribedSetResponse } from "./models.js";

/**
 * Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами
 * [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову
 * підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням
 * повторної підписки за допомогою методу email/subscribe.
 */
export class ObsoleteApi {
  /** @param {import("../../client/ApiClient.js").ApiClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * Внести email до списку відписаних.
   *
   * Після внесення email до списку відписаних усі майбутні спроби надіслати на нього повідомлення будуть
   * відхилятися. Зауважте, що видалити email зі списку відписаних безпосередньо за допомогою API не
   * можна. Але можна надіслати йому повідомлення з посиланням повторної підписки за допомогою методу
   * [email/subscribe](https://docs.allymailer.com.ua/ua/web-api-ref#email-subscribe) або видалити його
   * зі списку відписаних вручну на сторінці [Пошук email](https://cp.allymailer.com/ua/user/email) у
   * панелі керування (але кількість таких видалень на день сильно обмежена).
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#unsubscribed-set
   * @param {ObsoleteUnsubscribedSetRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ObsoleteUnsubscribedSetResponse>}
   * @throws {ApiError}
   */
  async unsubscribedSet(request) {
    return ObsoleteUnsubscribedSetResponse.fromJSON(await this.client.call("/unsubscribed/set.json", request));
  }

  /**
   * Перевіряє, чи відписано email.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#unsubscribed-check
   * @param {ObsoleteUnsubscribedCheckRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ObsoleteUnsubscribedCheckResponse>}
   * @throws {ApiError}
   */
  async unsubscribedCheck(request) {
    return ObsoleteUnsubscribedCheckResponse.fromJSON(await this.client.call("/unsubscribed/check.json", request));
  }

  /**
   * Повертає список адрес, відписаних починаючи з указаної дати.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#unsubscribed-list
   * @param {ObsoleteUnsubscribedListRequest|Record<string, any>} request Request model or plain object in the API format.
   * @returns {Promise<ObsoleteUnsubscribedListResponse>}
   * @throws {ApiError}
   */
  async unsubscribedList(request) {
    return ObsoleteUnsubscribedListResponse.fromJSON(await this.client.call("/unsubscribed/list.json", request));
  }
}
