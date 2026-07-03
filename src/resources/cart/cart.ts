// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { buildHeaders } from "../../internal/headers";
import { Items, type ItemCartAddParams, type ItemCartRemoveParams, type ItemCartUpdateParams } from "./items";

export class Cart extends APIResource {
  items: Items = new Items(this._client);

  /**
   * Initialises checkout for the current cart and returns the checkout session details. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {CartCheckoutParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CartCheckoutResponse>} Successful response
   *
   * @example
   * ```ts
   * const checkout = await client.cart.checkout();
   * ```
   */
  checkout(params?: CartCheckoutParams, options?: RequestOptions): APIPromise<CartCheckoutResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/cart/checkout", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves the current number of items in the cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<number>} Successful response
   *
   * @example
   * ```ts
   * const number_ = await client.cart.count();
   * ```
   */
  count(options?: RequestOptions): APIPromise<number> {
    return this._client.get("/cart/count", options);
  }

  /**
   * Migrates a guest cart into the authenticated customer cart when both are present. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.cart.migrate();
   * ```
   */
  migrate(options?: RequestOptions): APIPromise<string> {
    return this._client.post("/cart/migrate", options);
  }

  /**
   * Retrieves the current cart contents. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.cart.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<string> {
    return this._client.get("/cart", options);
  }
}

export interface CartCheckoutParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @minLength 1
   */
  couponCode?: string | null;
  /**
   * Body param
   */
  giftCardCodes?: Array<string> | null;
  /**
   * Body param
   * @minLength 1
   */
  deliveryMethod?: string | null;
  /**
   * Body param
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  deliveryMethodId?: string | null;
  /**
   * Body param
   * @minLength 1
   */
  deliveryMethodCode?: string | null;
}

export interface CartCheckoutResponse {
  checkoutUrl: string;
  checkoutSessionId: string;
  expiresAt?: string | null;
}
Cart.Items = Items;

export declare namespace Cart {
  export {
    type CartCheckoutResponse as CartCheckoutResponse,
    type CartCheckoutParams as CartCheckoutParams,
  };

  export {
    Items as Items,
    type ItemCartAddParams as ItemCartAddParams,
    type ItemCartRemoveParams as ItemCartRemoveParams,
    type ItemCartUpdateParams as ItemCartUpdateParams,
  };
}
export { Cart as CartResource };
