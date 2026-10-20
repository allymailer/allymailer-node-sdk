// EmailValidationApi: API methods of the EmailValidation section.
import type { ApiClient } from "../../client/ApiClient.js";
import type { EmailValidationSingleRequest, EmailValidationSingleRequestJSON, EmailValidationSingleResponse } from "./models.js";

/**
 * Методи перевірки email-адрес. Перевірка адреси електронної пошти надає докладну інформацію про
 * працездатність email. Це дозволить виключити з надсилання неіснуючі email, знизити показник скарг,
 * очистити список підписників і врешті-решт покращити вашу репутацію як відправника. Наприклад, ви
 * можете інтегрувати процес перевірки у форму реєстрації вашого сайту і вже на етапі введення адреси
 * повідомляти користувачам, що адреса, яку вони ввели у форму, недійсна.
 */
export declare class EmailValidationApi {
  constructor(client: ApiClient);
  client: ApiClient;

  /**
   * Допускається не більше ніж два одночасні запити; у разі перевищення буде повернуто помилку. Оскільки
   * перевірка має бути швидкою, ми обмежуємо час, що витрачається на перевірку адреси електронної пошти.
   * Тому, якщо ми зіткнемося з повільним поштовим сервером, час відповіді якого перевищує 5 секунд,
   * результат перевірки може бути невідомим.
   *
   * Документація: https://docs.allymailer.com.ua/ua/web-api-ref#email-validation-single
   * @throws {ApiError}
   */
  single(request: EmailValidationSingleRequest | EmailValidationSingleRequestJSON): Promise<EmailValidationSingleResponse>;
}
