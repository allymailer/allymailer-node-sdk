// ObsoleteApi: API methods of the Obsolete section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { ObsoleteUnsubscribedCheckRequest, ObsoleteUnsubscribedCheckRequestJSON, ObsoleteUnsubscribedCheckResponse, ObsoleteUnsubscribedListRequest, ObsoleteUnsubscribedListRequestJSON, ObsoleteUnsubscribedListResponse, ObsoleteUnsubscribedSetRequest, ObsoleteUnsubscribedSetRequestJSON, ObsoleteUnsubscribedSetResponse } from "./models.js";

/**
 * Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами
 * [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову
 * підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням
 * повторної підписки за допомогою методу email/subscribe.
 */
export declare class ObsoleteApi {
  constructor(client: ApiClient);
  client: ApiClient;

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
   * @throws {ApiError}
   */
  unsubscribedSet(request: ObsoleteUnsubscribedSetRequest | ObsoleteUnsubscribedSetRequestJSON): Promise<ObsoleteUnsubscribedSetResponse>;

  /**
   * Перевіряє, чи відписано email.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#unsubscribed-check
   * @throws {ApiError}
   */
  unsubscribedCheck(request: ObsoleteUnsubscribedCheckRequest | ObsoleteUnsubscribedCheckRequestJSON): Promise<ObsoleteUnsubscribedCheckResponse>;

  /**
   * Повертає список адрес, відписаних починаючи з указаної дати.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#unsubscribed-list
   * @throws {ApiError}
   */
  unsubscribedList(request?: ObsoleteUnsubscribedListRequest | ObsoleteUnsubscribedListRequestJSON): Promise<ObsoleteUnsubscribedListResponse>;
}
