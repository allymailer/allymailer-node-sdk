// Models of the Tag section.
import { compact, toModel, toPlain } from "../../client/ApiClient.js";

/** TagListResponse */
export class TagListResponse {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {string} [data.status] Рядок "success".
   * @param {TagsResponseObject[]} [data.tags] Масив об'єктів з даними користувацьких міток.
   */
  constructor({ status, tags } = {}) {
    /**
     * Рядок "success".
     * Допустимі значення: `success`.
     * @type {string|undefined}
     */
    this.status = status;
    /**
     * Масив об'єктів з даними користувацьких міток.
     * @type {TagsResponseObject[]|undefined}
     */
    this.tags = tags == null ? tags : tags.map((item0) => toModel(item0, TagsResponseObject));
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TagListResponse}
   */
  static fromJSON(data) {
    return new TagListResponse({
      status: data["status"],
      tags: data["tags"] == null ? undefined : data["tags"].map((item0) => toModel(item0, TagsResponseObject)),
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "status": this.status,
      "tags": this.tags == null ? undefined : this.tags.map((item0) => toPlain(item0)),
    });
  }
}

/** Об'єкт із властивостями користувацьких міток. */
export class TagsResponseObject {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} [data.tagId] Унікальний id мітки.
   * @param {string} [data.tag] Назва мітки.
   */
  constructor({ tagId, tag } = {}) {
    /**
     * Унікальний id мітки.
     * @type {number|undefined}
     */
    this.tagId = tagId;
    /**
     * Назва мітки.
     * @type {string|undefined}
     */
    this.tag = tag;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TagsResponseObject}
   */
  static fromJSON(data) {
    return new TagsResponseObject({
      tagId: data["tag_id"],
      tag: data["tag"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "tag_id": this.tagId,
      "tag": this.tag,
    });
  }
}

/** TagDeleteRequest */
export class TagDeleteRequest {
  /**
   * @param {object} [data] Fields; a nested model may be a plain object in the API format.
   * @param {number} data.tagId Унікальний id мітки.
   */
  constructor({ tagId } = {}) {
    /**
     * Унікальний id мітки.
     * @type {number|undefined}
     */
    this.tagId = tagId;
  }

  /**
   * Builds the object from decoded JSON.
   * @param {Record<string, any>} data
   * @returns {TagDeleteRequest}
   */
  static fromJSON(data) {
    return new TagDeleteRequest({
      tagId: data["tag_id"],
    });
  }

  /**
   * JSON-ready object in the API format, empty fields are omitted.
   * @returns {Record<string, any>}
   */
  toJSON() {
    return compact({
      "tag_id": this.tagId,
    });
  }
}
