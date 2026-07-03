# @puddle/storefront

TypeScript SDK for Puddle Storefront API.
The Puddle Storefront API provides endpoints for integrating the Puddle platform with external online stores, enabling seamless product management, order processing, and customer interactions.

<br />

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](./api.md)
- [Authentication](#authentication)
- [Errors](#errors)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Retries and Timeouts](#retries-and-timeouts)
- [Helpers](#helpers)
- [Logging](#logging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @puddle/storefront
```

<br />

## Usage

```ts
import PuddleStorefront from "@puddle/storefront";

const client = new PuddleStorefront({
  storefrontPublicKey: "pk_storefront_...",
});

const products = await client.products.listTrending();
console.log(products);

const account = await client.accounts.list();
console.log(account);
```

The examples in the following sections assume a `client` configured as shown above.

See the [API reference](./api.md) for every available operation.

<br />

## Authentication

Pass the storefront public key once when you create the client. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `storefrontPublicKey` | `string \| provider` | - | Use the storefront public key as the bearer token in the Authorization header. Defaults to STOREFRONT_PUBLIC_KEY. |

Declared schemes:

- `storefrontPublicKey` bearer token

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from "@puddle/storefront";

try {
  const list = await client.accounts.list();
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

Documented error statuses: `400`, `401`, `403`, `404`, `500`.

<br />

## Client Options

Configure the generated client by setting any of these options when you create it.

```ts
import PuddleStorefront from "@puddle/storefront";

const client = new PuddleStorefront({
  storefrontPublicKey: "pk_storefront_...",
  timeout: 60000,
  maxRetries: 2,
  logLevel: "debug",
});
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `storefrontPublicKey` | `string \| AuthTokenProvider` | `process.env["STOREFRONT_PUBLIC_KEY"]` | Use the storefront public key as the bearer token in the Authorization header. |
| `baseURL` | `string \| null` | `process.env["PUDDLE_STOREFRONT_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["PUDDLE_STOREFRONT_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. |

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present. Tune the retry and timeout client options shown above, or override them per request.

<br />

## Helpers

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Every operation returns an `APIPromise`, so you can `await` it directly or chain `.withResponse()`.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.


## Contributions

This SDK is generated programmatically. Manual edits to generated files will be
overwritten on the next build.

### SDK created by [Scalar](https://www.scalar.com/?utm_source=puddle-storefront-api-typescript&utm_campaign=sdk)
