// File generated from our OpenAPI spec. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";

export class Collections extends APIResource {
  /**
   * Retrieves a list of all collections for the storefront. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {CollectionListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionListResponse>} Successful response
   *
   * @example
   * ```ts
   * const list = await client.collections.list();
   * ```
   */
  list(params?: CollectionListParams, options?: RequestOptions): APIPromise<CollectionListResponse> {
    const { structure, "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get("/collections", { query: { structure: structure }, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves a single collection by its slug. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {CollectionRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionRetrieveResponse>} Successful response
   *
   * @example
   * ```ts
   * const retrieve = await client.collections.retrieve({
   *   slug: "example-collection",
   * });
   * ```
   */
  retrieve(params: CollectionRetrieveParams, options?: RequestOptions): APIPromise<CollectionRetrieveResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/collection", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves products that belong to a specific collection. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {CollectionListProductsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.collections.listProducts({
   *   slug: "example-collection",
   * });
   * ```
   */
  listProducts(params: CollectionListProductsParams, options?: RequestOptions): APIPromise<string> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/collection/products", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }
}

export type CollectionListResponse = Array<CollectionListResponse.CollectionListResponseItem>;

export namespace CollectionListResponse {
  export interface CollectionListResponseItem {
    id: string;
    name: string;
    slug: string;
    type: string;
    storeId?: string | null;
    description?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    ruleSet?: Array<CollectionListResponseItem.RuleSet> | null;
    imageId?: string | null;
    imageUrl?: string | null;
    imageUrlSet?: string | null;
    hidden?: boolean | null;
    children?: Array<CollectionListResponseItem>;
  }

  export namespace CollectionListResponseItem {
    export interface RuleSet {
      field: string;
      operator: string;
      value: string;
    }
  }
}

export interface CollectionListParams {
  /**
   * Query param
   * @default flat
   */
  structure?: "flat" | "tree";
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export interface CollectionRetrieveParams {
  /**
   * Body param
   * @minLength 1
   */
  slug: string;
  /**
   * Body param
   */
  includeChildren?: boolean;
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export interface CollectionRetrieveResponse {
  id: string;
  name: string;
  slug: string;
  type: string;
  storeId?: string | null;
  description?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  ruleSet?: Array<CollectionRetrieveResponse.RuleSet> | null;
  imageId?: string | null;
  imageUrl?: string | null;
  imageUrlSet?: string | null;
  hidden?: boolean | null;
  children?: Array<CollectionRetrieveResponse>;
}

export namespace CollectionRetrieveResponse {
  export interface RuleSet {
    field: string;
    operator: string;
    value: string;
  }
}

export interface CollectionListProductsParams {
  /**
   * Body param
   * @minLength 1
   */
  slug: string;
  /**
   * Body param
   */
  sort?: "PRICE_ASC" | "PRICE_DESC" | "NAME_ASC" | "NAME_DESC" | "NEWEST" | "OLDEST";
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}
export declare namespace Collections {
  export {
    type CollectionListResponse as CollectionListResponse,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionListParams as CollectionListParams,
    type CollectionRetrieveParams as CollectionRetrieveParams,
    type CollectionListProductsParams as CollectionListProductsParams,
  };
}
export { Collections as CollectionResource };
