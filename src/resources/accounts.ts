// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";
import { path as __scalarPath } from "../internal/utils/path";

export class Accounts extends APIResource {
  /**
   * Retrieves the currently authenticated customer session profile. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {AccountListParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountListResponse>} Successful response
   *
   * @example
   * ```ts
   * const list = await client.accounts.list();
   * ```
   */
  list(params?: AccountListParams, options?: RequestOptions): APIPromise<AccountListResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get("/account", { ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Updates the profile details for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.
   *
   * @param {AccountUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.accounts.update({
   *   firstName: "",
   *   lastName: "",
   * });
   * ```
   */
  update(params: AccountUpdateParams, options?: RequestOptions): APIPromise<string> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.put("/account", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves the marketing consent status for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountMarketingGetResponse>} Successful response
   *
   * @example
   * ```ts
   * const marketingGet = await client.accounts.marketingGet();
   * ```
   */
  marketingGet(options?: RequestOptions): APIPromise<AccountMarketingGetResponse> {
    return this._client.get("/account/marketing", options);
  }

  /**
   * Updates the marketing consent status for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.
   *
   * @param {AccountMarketingUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AccountMarketingUpdateResponse>} Successful response
   *
   * @example
   * ```ts
   * const marketingUpdate = await client.accounts.marketingUpdate({
   *   consent: false,
   * });
   * ```
   */
  marketingUpdate(params: AccountMarketingUpdateParams, options?: RequestOptions): APIPromise<AccountMarketingUpdateResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.put("/account/marketing", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves a list of orders for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.accounts.ordersList();
   * ```
   */
  ordersList(options?: RequestOptions): APIPromise<string> {
    return this._client.get("/account/orders", options);
  }

  /**
   * Retrieves details of a specific order for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.
   *
   * @param {string} orderID
   * @param {AccountOrdersGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<string>} Successful response
   *
   * @example
   * ```ts
   * const string_ = await client.accounts.ordersGet("orderId");
   * ```
   */
  ordersGet(orderID: string, params?: AccountOrdersGetParams, options?: RequestOptions): APIPromise<string> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost } = params ?? {};
    return this._client.get(__scalarPath`/account/orders/${orderID}`, { ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }
}

export interface AccountListParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}

export interface AccountListResponse {
  id: string;
  /**
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string;
  firstName: string;
  lastName: string;
  phone?: string | null;
}

export interface AccountUpdateParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @minLength 2
   * @maxLength 50
   */
  firstName: string;
  /**
   * Body param
   * @minLength 2
   * @maxLength 50
   */
  lastName: string;
  /**
   * Body param
   * @pattern ^\+?[0-9\s\-()]{10,20}$
   */
  phone?: string;
}

export interface AccountMarketingGetResponse {
  consent: boolean;
}

export interface AccountMarketingUpdateParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   */
  consent: boolean;
}

export interface AccountMarketingUpdateResponse {
  success: boolean;
}

export interface AccountOrdersGetParams {
  /**
   * Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
}
export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountMarketingGetResponse as AccountMarketingGetResponse,
    type AccountMarketingUpdateResponse as AccountMarketingUpdateResponse,
    type AccountListParams as AccountListParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountMarketingUpdateParams as AccountMarketingUpdateParams,
    type AccountOrdersGetParams as AccountOrdersGetParams,
  };
}
export { Accounts as AccountResource };
