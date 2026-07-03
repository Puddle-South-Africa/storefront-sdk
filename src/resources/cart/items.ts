// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";
import { path as __scalarPath } from "../../internal/utils/path";

export class Items extends APIResource {
  /**
   * Adds a product or product variant to the current cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {ItemCartAddParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.cart.items.cartAdd({
   *   authorization: "authorization",
   *   productId: "",
   *   quantity: 0,
   * });
   * ```
   */
  cartAdd(params: ItemCartAddParams, options?: RequestOptions): APIPromise<string> {
    const { authorization, "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/cart/items", { body: body, ...options, headers: buildHeaders([{ "authorization": authorization, ...(xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}) }, options?.headers]) });
  }

  /**
   * Removes a cart item from the current cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} cartProductID
   * @param {ItemCartRemoveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.cart.items.cartRemove("cartProductId", {
   *   authorization: "authorization",
   * });
   * ```
   */
  cartRemove(cartProductID: string, params: ItemCartRemoveParams, options?: RequestOptions): APIPromise<string> {
    const { authorization, "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.delete(__scalarPath`/cart/items/${cartProductID}`, { ...options, headers: buildHeaders([{ "authorization": authorization, ...(xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}) }, options?.headers]) });
  }

  /**
   * Updates the quantity of an existing cart item. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {string} cartProductID
   * @param {ItemCartUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.cart.items.cartUpdate("cartProductId", {
   *   authorization: "authorization",
   *   quantity: 0,
   * });
   * ```
   */
  cartUpdate(cartProductID: string, params: ItemCartUpdateParams, options?: RequestOptions): APIPromise<string> {
    const { authorization, "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.put(__scalarPath`/cart/items/${cartProductID}`, { body: body, ...options, headers: buildHeaders([{ "authorization": authorization, ...(xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}) }, options?.headers]) });
  }
}

export interface ItemCartAddParams {
  /**
   * Header param: Bearer <storefront-public-key>
   * @minLength 1
   */
  authorization: string;
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
  /**
   * Body param
   * @minimum 1
   * @maximum 9007199254740991
   */
  quantity: number;
  /**
   * Body param
   */
  customText?: Record<string, string>;
}

export interface ItemCartRemoveParams {
  /**
   * Bearer <storefront-public-key>
   * @minLength 1
   */
  authorization: string;
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export interface ItemCartUpdateParams {
  /**
   * Header param: Bearer <storefront-public-key>
   * @minLength 1
   */
  authorization: string;
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @minimum -9007199254740991
   * @maximum 9007199254740991
   */
  quantity: number;
}
export declare namespace Items {
  export {
    type ItemCartAddParams as ItemCartAddParams,
    type ItemCartRemoveParams as ItemCartRemoveParams,
    type ItemCartUpdateParams as ItemCartUpdateParams,
  };
}
export { Items as ItemResource };
