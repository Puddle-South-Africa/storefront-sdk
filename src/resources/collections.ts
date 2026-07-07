// File generated from our OpenAPI spec. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __path } from "../internal/utils/path";

export class Collections extends APIResource {
  /**
   * Retrieves a list of all collections for the storefront. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionListResponse>} Successful response
   *
   * @example
   * ```ts
   * const list = await client.collections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CollectionListResponse> {
    return this._client.get("/collections", options);
  }

  /**
   * Retrieves a single collection by its ID. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} collectionID
   * @param {CollectionRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CollectionRetrieveResponse>} Successful response
   *
   * @example
   * ```ts
   * const retrieve = await client.collections.retrieve("collectionId");
   * ```
   */
  retrieve(collectionID: string, params?: CollectionRetrieveParams, options?: RequestOptions): APIPromise<CollectionRetrieveResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get(__path`/collections/${collectionID}`, { ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves products that belong to a specific collection. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} collectionID
   * @param {CollectionListProductsParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.collections.listProducts("collectionId");
   * ```
   */
  listProducts(collectionID: string, params?: CollectionListProductsParams, options?: RequestOptions): APIPromise<string> {
    const { sort, "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get(__path`/collections/${collectionID}/products`, { query: { sort: sort }, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
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
  }

  export namespace CollectionListResponseItem {
    export interface RuleSet {
      field: string;
      operator: string;
      value: string;
    }
  }
}

export interface CollectionRetrieveParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
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
   * Query param
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
    type CollectionRetrieveParams as CollectionRetrieveParams,
    type CollectionListProductsParams as CollectionListProductsParams,
  };
}
export { Collections as CollectionResource };
