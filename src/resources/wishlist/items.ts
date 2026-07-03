// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";
import { path as __scalarPath } from "../../internal/utils/path";

export class Items2 extends APIResource {
  /**
   * Adds a product or product variant to the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {ItemWishlistAddParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.wishlist.items.wishlistAdd({
   *   productId: "",
   * });
   * ```
   */
  wishlistAdd(params: ItemWishlistAddParams, options?: RequestOptions): APIPromise<string> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/wishlist/items", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Removes all wishlist items from the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.wishlist.items.wishlistClear();
   * ```
   */
  wishlistClear(options?: RequestOptions): APIPromise<string> {
    return this._client.delete("/wishlist/items", options);
  }

  /**
   * Removes a wishlist item from the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} wishlistProductID
   * @param {ItemWishlistRemoveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.wishlist.items.wishlistRemove("wishlistProductId");
   * ```
   */
  wishlistRemove(wishlistProductID: string, params?: ItemWishlistRemoveParams, options?: RequestOptions): APIPromise<string> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.delete(__scalarPath`/wishlist/items/${wishlistProductID}`, { ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }
}

export interface ItemWishlistAddParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  productId: string;
  /**
   * Body param
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  productVariantId?: string;
}

export interface ItemWishlistRemoveParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}
export declare namespace Items2 {
  export {
    type ItemWishlistAddParams as ItemWishlistAddParams,
    type ItemWishlistRemoveParams as ItemWishlistRemoveParams,
  };
}
export { Items2 as ItemResource };
