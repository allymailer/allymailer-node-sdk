// AllyMailer API client.
import type { ApiClient } from "./client/ApiClient.js";
import type { ConfigurationOptions } from "./client/Configuration.js";
import type { EmailApi } from "./api/email/EmailApi.js";
import type { EmailValidationApi } from "./api/email-validation/EmailValidationApi.js";
import type { ConfirmedEmailApi } from "./api/confirmed-email/ConfirmedEmailApi.js";
import type { TemplateApi } from "./api/template/TemplateApi.js";
import type { WebhookApi } from "./api/webhook/WebhookApi.js";
import type { SuppressionApi } from "./api/suppression/SuppressionApi.js";
import type { DomainApi } from "./api/domain/DomainApi.js";
import type { EventDumpApi } from "./api/event-dump/EventDumpApi.js";
import type { TagApi } from "./api/tag/TagApi.js";
import type { ProjectApi } from "./api/project/ProjectApi.js";
import type { SystemApi } from "./api/system/SystemApi.js";
import type { ObsoleteApi } from "./api/obsolete/ObsoleteApi.js";

/** Options of new AllyMailerClient(). */
export interface AllyMailerClientOptions extends ConfigurationOptions {
  /** API host (Host.CP, "cp.allymailer.com") or a full base URL. */
  host?: string;
}

/** Entry point of the AllyMailer API: one property per section. */
export declare class AllyMailerClient {
  /**
   * @param apiKey User or project API key.
   * @param hostOrOptions API host or a full base URL, or options.
   * @param options Options when the second argument is a host.
   */
  constructor(apiKey: string, hostOrOptions?: string | AllyMailerClientOptions, options?: ConfigurationOptions);
  apiClient: ApiClient;
  /** Ця група методів пов'язана з надсиланням email. */
  email: EmailApi;
  /**
   * Методи перевірки email-адрес. Перевірка адреси електронної пошти надає докладну інформацію про
   * працездатність email. Це дозволить виключити з надсилання неіснуючі email, знизити показник скарг,
   * очистити список підписників і врешті-решт покращити вашу репутацію як відправника. Наприклад, ви
   * можете інтегрувати процес перевірки у форму реєстрації вашого сайту і вже на етапі введення адреси
   * повідомляти користувачам, що адреса, яку вони ввели у форму, недійсна.
   */
  emailValidation: EmailValidationApi;
  /**
   * Керування email-адресами, підтвердженими для надсилання із sandbox-домену. Методи доступні лише з
   * API-ключем основного облікового запису.
   */
  confirmedEmail: ConfirmedEmailApi;
  /**
   * Ви можете зберегти шаблон на боці AllyMailer і потім посилатися на нього за ідентифікатором. Це не
   * обов'язково, але вкрай рекомендовано у разі повторюваних email-повідомлень або за великих обсягів
   * надсилання. AllyMailer підтримує два різні синтаксиси для шаблонів, докладніше читайте
   * [тут](https://docs.allymailer.com.ua/ua/template-engines).
   */
  template: TemplateApi;
  /**
   * AllyMailer дозволяє вам отримувати сповіщення про зміну статусу доставки листа або спам-блокування.
   * Ви надаєте URL, і в разі виникнення події, що вас цікавить, ми сповіщаємо вас, передаючи на цей URL
   * JSON-дані про подію.
   */
  webhook: WebhookApi;
  /**
   * Методи для керування адресами, надсилання на які заблоковано з різних причин — відписка,
   * недоступність, скарги.
   */
  suppression: SuppressionApi;
  /**
   * Методи для налаштування доменів надсилання та перевірки їх статусів. Корисні, якщо вам недостатньо
   * додавання доменів через вебінтерфейс AllyMailer і, наприклад, хочеться автоматизувати додавання
   * доменів для ваших власних клієнтів.
   */
  domain: DomainApi;
  /**
   * Методи для отримання списку подій, що сталися, за певний період. Дані зберігаються до 45 днів,
   * залежно від вашого тарифу. Це означає, що можна запросити події, починаючи з 00:00:00 45-го дня тому
   * і до поточного моменту часу. Для індивідуальних тарифів з великими обсягами за замовчуванням події
   * доступні лише за останні 7 днів.
   */
  eventDump: EventDumpApi;
  /**
   * Методи керування користувацькими мітками. За допомогою міток ви можете класифікувати листи за
   * потрібними критеріями. Відокремити маркетингові листи від транзакційних або листи з підтвердженням
   * реєстрації від сповіщень про замовлення. AllyMailer дозволяє позначати мітками кожне вихідне
   * повідомлення, а потім сегментувати й аналізувати статистику на основі зазначених під час надсилання
   * міток.
   */
  tag: TagApi;
  /**
   * Проєкти дозволяють об'єднати кілька незалежних доменів із webhook, шаблонами та списками відписки.
   * Це дуже корисно, якщо у вас є власні клієнти і ви керуєте їхніми даними з одного облікового запису
   * AllyMailer. Кожен проєкт отримує власний ключ API, а виклики методів API з цим ключем обробляють
   * лише дані цього проєкту. Таким чином, ви можете призначити окремий проєкт для кожного користувача і
   * бути впевненими, що вони не конфліктуватимуть: наприклад, відписка від одного проєкту не вплине на
   * інший.
   */
  project: ProjectApi;
  /** Системні методи. */
  system: SystemApi;
  /**
   * Застарілі методи роботи з відписками. Ми рекомендуємо користуватися замість них гнучкішими методами
   * [suppression](https://docs.allymailer.com.ua/ua/web-api-ref#suppression). Зверніть увагу, що знову
   * підписати відписаного адресата через WebAPI не можна. Можна лише надіслати йому email із посиланням
   * повторної підписки за допомогою методу email/subscribe.
   */
  obsolete: ObsoleteApi;
}
