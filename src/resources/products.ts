// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";

export class Products extends APIResource {
  /**
   * Retrieves a list of products suitable for search. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProductSearchResponse>} Successful response
   *
   * @example
   * ```ts
   * const search = await client.products.search();
   * ```
   */
  search(options?: RequestOptions): APIPromise<ProductSearchResponse> {
    return this._client.get("/products/search", options);
  }

  /**
   * Retrieves a single product by its ID. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} productID
   * @param {ProductRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProductRetrieveResponse>} Successful response
   *
   * @example
   * ```ts
   * const retrieve = await client.products.retrieve("productId");
   * ```
   */
  retrieve(productID: string, params?: ProductRetrieveParams, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get(__scalarPath`/products/${productID}`, { ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves a paginated list of products for a category, collection, or all. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {ProductListInfiniteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.products.listInfinite({
   *   type: "ALL",
   * });
   * ```
   */
  listInfinite(params?: ProductListInfiniteParams, options?: RequestOptions): APIPromise<string> {
    const { type, id, "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get("/products/infinite", { query: { type: type, id: id }, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves a list of trending products. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ProductListTrendingResponse>} Successful response
   *
   * @example
   * ```ts
   * const listTrending = await client.products.listTrending();
   * ```
   */
  listTrending(options?: RequestOptions): APIPromise<ProductListTrendingResponse> {
    return this._client.get("/products/trending", options);
  }
}

export type ProductSearchResponse = Array<ProductSearchResponse.ProductSearchResponseItem>;

export namespace ProductSearchResponse {
  export interface ProductSearchResponseItem {
    id: string;
    name: string;
    storeId?: string | null;
    primaryImageId?: string | null;
    primaryImageUrl?: string | null;
    primaryImageSrcSet?: string | null;
  }
}

export interface ProductRetrieveParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export interface ProductRetrieveResponse {
  id: string;
  name: string;
  type: string;
  price: number;
  stockCount: number;
  trackInventory: boolean;
  description?: string | null;
  status?: string | null;
  options?: string | null;
  primaryImageId?: string | null;
  primaryImageUrl?: string | null;
  primaryImageSrcSet?: string | null;
  customTextFields?: Array<string> | null;
}

export interface ProductListInfiniteParams {
  /**
   * Query param
   * @default ALL
   */
  type?: "COLLECTION" | "ALL";
  /**
   * Query param
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  id?: string;
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export type ProductListTrendingResponse = Array<ProductListTrendingResponse.ProductListTrendingResponseItem>;

export namespace ProductListTrendingResponse {
  export interface ProductListTrendingResponseItem {
    id: string;
    name: string;
    storeId?: string | null;
    primaryImageId?: string | null;
    primaryImageUrl?: string | null;
    primaryImageSrcSet?: string | null;
  }
}
export declare namespace Products {
  export {
    type ProductSearchResponse as ProductSearchResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListTrendingResponse as ProductListTrendingResponse,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductListInfiniteParams as ProductListInfiniteParams,
  };
}
export { Products as ProductResource };
