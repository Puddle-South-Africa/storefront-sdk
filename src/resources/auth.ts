// File generated from our OpenAPI spec. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { buildHeaders } from "../internal/headers";

export class Auth extends APIResource {
  /**
   * Requests a one-time password (OTP) for customer authentication. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {AuthAccountsRequestOtpParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthAccountsRequestOtpResponse>} Successful response
   *
   * @example
   * ```ts
   * const accountsRequestOtp = await client.auth.accountsRequestOtp({
   *   email: "",
   * });
   * ```
   */
  accountsRequestOtp(params: AuthAccountsRequestOtpParams, options?: RequestOptions): APIPromise<AuthAccountsRequestOtpResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/auth/request-otp", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Verifies the one-time password (OTP) to authenticate the customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {AuthAccountsVerifyOtpParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthAccountsVerifyOtpResponse>} Successful response
   *
   * @example
   * ```ts
   * const accountsVerifyOtp = await client.auth.accountsVerifyOtp({
   *   email: "",
   *   otp: "",
   * });
   * ```
   */
  accountsVerifyOtp(params: AuthAccountsVerifyOtpParams, options?: RequestOptions): APIPromise<AuthAccountsVerifyOtpResponse> {
    const { "x-puddle-storefront-host": xPuddleStorefrontHost, ...body } = params ?? {};
    return this._client.post("/auth/verify-otp", { body: body, ...options, headers: buildHeaders([xPuddleStorefrontHost !== undefined ? { "x-puddle-storefront-host": xPuddleStorefrontHost } : {}, options?.headers]) });
  }

  /**
   * Retrieves the current customer session details. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthAccountsGetSessionResponse>} Successful response
   *
   * @example
   * ```ts
   * const accountsGetSession = await client.auth.accountsGetSession();
   * ```
   */
  accountsGetSession(options?: RequestOptions): APIPromise<AuthAccountsGetSessionResponse> {
    return this._client.get("/auth/session", options);
  }

  /**
   * Signs out the currently authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AuthAccountsSignOutResponse>} Successful response
   *
   * @example
   * ```ts
   * const accountsSignOut = await client.auth.accountsSignOut();
   * ```
   */
  accountsSignOut(options?: RequestOptions): APIPromise<AuthAccountsSignOutResponse> {
    return this._client.post("/auth/sign-out", options);
  }
}

export interface AuthAccountsRequestOtpParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string;
}

export interface AuthAccountsRequestOtpResponse {
  success: boolean;
}

export interface AuthAccountsVerifyOtpParams {
  /**
   * Header param: Required for server-side callers when Origin/Referer is unavailable.
   * @minLength 1
   */
  "x-puddle-storefront-host"?: string;
  /**
   * Body param
   * @format email
   * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
   */
  email: string;
  /**
   * Body param
   * @minLength 6
   * @maxLength 6
   */
  otp: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 80
   */
  firstName?: string;
  /**
   * Body param
   * @minLength 1
   * @maxLength 80
   */
  lastName?: string;
  /**
   * Body param
   * @minLength 5
   * @maxLength 30
   */
  phone?: string;
}

export interface AuthAccountsVerifyOtpResponse {
  success: boolean;
  session: string;
}

export interface AuthAccountsGetSessionResponse {
  session: string;
}

export interface AuthAccountsSignOutResponse {
  success: boolean;
}
export declare namespace Auth {
  export {
    type AuthAccountsRequestOtpResponse as AuthAccountsRequestOtpResponse,
    type AuthAccountsVerifyOtpResponse as AuthAccountsVerifyOtpResponse,
    type AuthAccountsGetSessionResponse as AuthAccountsGetSessionResponse,
    type AuthAccountsSignOutResponse as AuthAccountsSignOutResponse,
    type AuthAccountsRequestOtpParams as AuthAccountsRequestOtpParams,
    type AuthAccountsVerifyOtpParams as AuthAccountsVerifyOtpParams,
  };
}
export { Auth as AuthResource };
