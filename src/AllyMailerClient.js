// AllyMailer API client.
import { ApiClient } from "./client/ApiClient.js";
import { Configuration, baseUrlFor } from "./client/Configuration.js";
import { EmailApi } from "./api/email/EmailApi.js";
import { EmailValidationApi } from "./api/email-validation/EmailValidationApi.js";
import { ConfirmedEmailApi } from "./api/confirmed-email/ConfirmedEmailApi.js";
import { TemplateApi } from "./api/template/TemplateApi.js";
import { WebhookApi } from "./api/webhook/WebhookApi.js";
import { SuppressionApi } from "./api/suppression/SuppressionApi.js";
import { DomainApi } from "./api/domain/DomainApi.js";
import { EventDumpApi } from "./api/event-dump/EventDumpApi.js";
import { TagApi } from "./api/tag/TagApi.js";
import { ProjectApi } from "./api/project/ProjectApi.js";
import { SystemApi } from "./api/system/SystemApi.js";
import { ObsoleteApi } from "./api/obsolete/ObsoleteApi.js";

/**
 * Entry point of the AllyMailer API: one property per section.
 *
 *     const client = new AllyMailerClient("YOUR_API_KEY");
 *     await client.email.send(...);
 */
export class AllyMailerClient {
  /**
   * @param {string} apiKey
   * @param {string|{host?: string, baseUrl?: string} & {timeout?: number, platform?: string, headers?: Record<string, string>, fetch?: import("./client/Configuration.js").FetchFunction}} [hostOrOptions] API host (Host.CP, "cp.allymailer.com") or a full base URL, or options
   * @param {{timeout?: number, platform?: string, headers?: Record<string, string>, fetch?: import("./client/Configuration.js").FetchFunction}} [options]
   */
  constructor(apiKey, hostOrOptions = {}, options = {}) {
    const settings = typeof hostOrOptions === "string" ? { ...options, host: hostOrOptions } : hostOrOptions;
    const { host, ...rest } = settings;
    this.apiClient = new ApiClient(new Configuration(apiKey, host ? { ...rest, baseUrl: baseUrlFor(host) } : rest));
    /** Ця група методів пов'язана з надсиланням email. */
    this.email = new EmailApi(this.apiClient);
    /**
     * Методи перевірки email-адрес. Перевірка адреси електронної пошти надає докладну інформацію про
     * працездатність email. Це дозволить виключити з надсилання неіснуючі email, знизити показник скарг,
     * очистити список підписників і врешті-решт покращити вашу репутацію як відправника. Наприклад, ви
     * можете інтегрувати процес перевірки у форму реєстрації вашого сайту і вже на етапі введення адреси
     * повідомляти користувачам, що адреса, яку вони ввели у форму, недійсна.
     */
    this.emailValidation = new EmailValidationApi(this.apiClient);
    /**
     * Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з
     * API-ключем основного облікового запису.
     */
    this.confirmedEmail = new ConfirmedEmailApi(this.apiClient);
    /**
     * Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не
     * обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів
     * надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте
     * [тут](https://docs.allymailer.com.ua/en/template-engines).
     */
    this.template = new TemplateApi(this.apiClient);
    /**
     * AllyMailer дозволяє вам отримувати сповіщення про зміну статусу доставки листа або спам-блокування.
     * Ви надаєте URL, і в разі виникнення події, що вас цікавить, ми сповіщаємо вас, передаючи на цей URL
     * JSON-дані про подію.
     */
    this.webhook = new WebhookApi(this.apiClient);
    /**
     * Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка,
     * недоступність, скарги.
     */
    this.suppression = new SuppressionApi(this.apiClient);
    /**
     * Методи для налаштування доменів надсилання та перевірки їх статусів. Корисні, якщо вам недостатньо
     * додавання доменів через вебінтерфейс AllyMailer і, наприклад, хочеться автоматизувати додавання
     * доменів для ваших власних клієнтів.
     */
    this.domain = new DomainApi(this.apiClient);
    /**
     * Методи для отримання списку подій, що сталися, за певний період. Дані зберігаються до 45 днів,
     * залежно від вашого тарифу. Це означає, що можна запросити події, починаючи з 00:00:00 45-го дня тому
     * і до поточного моменту часу. Для індивідуальних тарифів з великими обсягами за замовчуванням події
     * доступні лише за останні 7 днів.
     */
    this.eventDump = new EventDumpApi(this.apiClient);
    /**
     * Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за
     * потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням
     * реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне
     * повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання
     * міток.
     */
    this.tag = new TagApi(this.apiClient);
    /**
     * Проєкти дозволяють об'єднати кілька незалежних доменів із webhook, шаблонами та списками відписки.
     * Це дуже корисно, якщо у вас є власні клієнти і ви керуєте їхніми даними з одного облікового запису
     * AllyMailer. Кожен проєкт отримує власний ключ API, а виклики методів API з цим ключем обробляють
     * лише дані цього проєкту. Таким чином, ви можете призначити окремий проєкт для кожного користувача і
     * бути впевненими, що вони не конфліктуватимуть: наприклад, відписка від одного проєкту не вплине на
     * інший.
     */
    this.project = new ProjectApi(this.apiClient);
    /** Системні методи. */
    this.system = new SystemApi(this.apiClient);
    /**
     * Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами
     * [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову
     * підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням
     * повторної підписки за допомогою методу email/subscribe.
     */
    this.obsolete = new ObsoleteApi(this.apiClient);
  }
}
