// File generated from our OpenAPI spec. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __path } from "../internal/utils/path";

export class Content extends APIResource {
  /**
   * Retrieves all configured storefront content blocks for the current store. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentBlocksResponse>} Successful response
   *
   * @example
   * ```ts
   * const blocks = await client.content.blocks();
   * ```
   */
  blocks(options?: RequestOptions): APIPromise<ContentBlocksResponse> {
    return this._client.get("/content/blocks", options);
  }

  /**
   * Retrieves a single storefront content block by its id. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} blockID
   * @param {ContentBlockParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentBlockResponse>} Successful response
   *
   * @example
   * ```ts
   * const block = await client.content.block("blockId");
   * ```
   */
  block(blockID: string, params?: ContentBlockParams, options?: RequestOptions): APIPromise<ContentBlockResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get(__path`/content/blocks/${blockID}`, {
      ...options,
      headers: buildHeaders([
        xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {},
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the active banner text for the storefront if enabled. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContentBannerTextResponse>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.content.bannerText();
   * ```
   */
  bannerText(options?: RequestOptions): APIPromise<ContentBannerTextResponse> {
    return this._client.get("/content/banner-text", options);
  }
}

export type ContentBlocksResponse = Array<ContentBlock>;
export type ContentBlockResponse = ContentBlock | null;

export interface ContentBlockParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export type ContentBannerTextResponse = string | null;

export interface ContentBlock {
  id: string;
  label: string;
  mode: "single" | "list";
  fieldSchema: Array<ContentBlock.FieldSchema>;
  items: Array<ContentBlock.Item>;
  description?: string | null;
}

export namespace ContentBlock {
  export interface FieldSchema {
    id: string;
    label: string;
    type: "text" | "textarea" | "number" | "select" | "boolean" | "image";
    required: boolean;
    options: Array<FieldSchema.Option>;
    description?: string | null;
  }

  export namespace FieldSchema {
    export interface Option {
      label: string;
      value: string;
    }
  }

  export interface Item {
    entryKey: string;
    [key: string]: ContentBlock.ItemValue;
  }

  export type ItemValue = string | number | boolean | null | ImageValue;

  export interface ImageValue {
    imageId: string | null;
    imageUrl: string | null;
  }
}

export declare namespace Content {
  export {
    type ContentBlocksResponse as ContentBlocksResponse,
    type ContentBlockResponse as ContentBlockResponse,
    type ContentBlockParams as ContentBlockParams,
    type ContentBannerTextResponse as ContentBannerTextResponse,
    type ContentBlock as ContentBlock,
  };
}
export { Content as ContentResource };
