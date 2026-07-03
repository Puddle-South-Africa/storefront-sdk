// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Content extends APIResource {
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

export type ContentBannerTextResponse = string | null;
export declare namespace Content {
  export {
    type ContentBannerTextResponse as ContentBannerTextResponse,
  };
}
export { Content as ContentResource };
