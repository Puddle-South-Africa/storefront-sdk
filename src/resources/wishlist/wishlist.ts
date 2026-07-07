// File generated from our OpenAPI spec. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Items2, type ItemWishlistAddParams, type ItemWishlistRemoveParams } from "./items";

export class Wishlist extends APIResource {
  items: Items2 = new Items2(this._client);

  /**
   * Retrieves the current wishlist contents. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.wishlist.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<string> {
    return this._client.get("/wishlist", options);
  }
}

Wishlist.Items2 = Items2;

export declare namespace Wishlist {
  export {
    Items2 as Items2,
    type ItemWishlistAddParams as ItemWishlistAddParams,
    type ItemWishlistRemoveParams as ItemWishlistRemoveParams,
  };
}
export { Wishlist as WishlistResource };
