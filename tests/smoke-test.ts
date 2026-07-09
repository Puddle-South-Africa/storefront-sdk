// File generated from our OpenAPI spec. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs'

// The default export is the client class. The client reads the base URL from the
// environment and accepts the storefront public key once at construction time.
import PuddleStorefrontAPI from "@puddle/storefront"

// One shared client runs every case.
const client = new PuddleStorefrontAPI({
  storefrontPublicKey: process.env.STOREFRONT_PUBLIC_KEY ?? "pk_storefront_smoke_test",
})

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: "list",
    method: "GET",
    path: "/account",
    run: async () => {
      const list = await client.accounts.list({
      });
    },
  },

  {
    operation: "update",
    method: "PUT",
    path: "/account",
    run: async () => {
      const string_ = await client.accounts.update({
        firstName: "",
        lastName: "",
      });
    },
  },

  {
    operation: "marketingGet",
    method: "GET",
    path: "/account/marketing",
    run: async () => {
      const marketingGet = await client.accounts.marketingGet();
    },
  },

  {
    operation: "marketingUpdate",
    method: "PUT",
    path: "/account/marketing",
    run: async () => {
      const marketingUpdate = await client.accounts.marketingUpdate({
        consent: false,
      });
    },
  },

  {
    operation: "ordersList",
    method: "GET",
    path: "/account/orders",
    run: async () => {
      const string_ = await client.accounts.ordersList();
    },
  },

  {
    operation: "ordersGet",
    method: "GET",
    path: "/account/orders/{orderId}",
    run: async () => {
      const string_ = await client.accounts.ordersGet("orderId", {
      });
    },
  },

  {
    operation: "accountsRequestOtp",
    method: "POST",
    path: "/auth/request-otp",
    run: async () => {
      const accountsRequestOtp = await client.auth.accountsRequestOtp({
        email: "",
      });
    },
  },

  {
    operation: "accountsVerifyOtp",
    method: "POST",
    path: "/auth/verify-otp",
    run: async () => {
      const accountsVerifyOtp = await client.auth.accountsVerifyOtp({
        email: "",
        otp: "",
      });
    },
  },

  {
    operation: "accountsGetSession",
    method: "GET",
    path: "/auth/session",
    run: async () => {
      const accountsGetSession = await client.auth.accountsGetSession();
    },
  },

  {
    operation: "accountsSignOut",
    method: "POST",
    path: "/auth/sign-out",
    run: async () => {
      const accountsSignOut = await client.auth.accountsSignOut();
    },
  },

  {
    operation: "checkout",
    method: "POST",
    path: "/cart/checkout",
    run: async () => {
      const checkout = await client.cart.checkout({
      });
    },
  },

  {
    operation: "count",
    method: "GET",
    path: "/cart/count",
    run: async () => {
      const number_ = await client.cart.count();
    },
  },

  {
    operation: "migrate",
    method: "POST",
    path: "/cart/migrate",
    run: async () => {
      const string_ = await client.cart.migrate();
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/cart",
    run: async () => {
      const string_ = await client.cart.list();
    },
  },

  {
    operation: "cartAdd",
    method: "POST",
    path: "/cart/items",
    run: async () => {
      const string_ = await client.cart.items.cartAdd({
        productId: "",
        quantity: 0,
      });
    },
  },

  {
    operation: "cartRemove",
    method: "DELETE",
    path: "/cart/items/{cartProductId}",
    run: async () => {
      const string_ = await client.cart.items.cartRemove("cartProductId", {
      });
    },
  },

  {
    operation: "cartUpdate",
    method: "PUT",
    path: "/cart/items/{cartProductId}",
    run: async () => {
      const string_ = await client.cart.items.cartUpdate("cartProductId", {
        quantity: 0,
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/collections",
    run: async () => {
      const list = await client.collections.list();
    },
  },

  {
    operation: "retrieve",
    method: "POST",
    path: "/collection",
    run: async () => {
      const retrieve = await client.collections.retrieve({
        slug: "collection-slug",
      });
    },
  },

  {
    operation: "listProducts",
    method: "POST",
    path: "/collection/products",
    run: async () => {
      const string_ = await client.collections.listProducts({
        slug: "collection-slug",
      });
    },
  },

  {
    operation: "search",
    method: "GET",
    path: "/products/search",
    run: async () => {
      const search = await client.products.search();
    },
  },

  {
    operation: "retrieve",
    method: "POST",
    path: "/product",
    run: async () => {
      const retrieve = await client.products.retrieve({
        slug: "product-slug",
      });
    },
  },

  {
    operation: "listInfinite",
    method: "GET",
    path: "/products/infinite",
    run: async () => {
      const listInfinite = await client.products.listInfinite({
        type: "ALL",
      });
    },
  },

  {
    operation: "listTrending",
    method: "GET",
    path: "/products/trending",
    run: async () => {
      const listTrending = await client.products.listTrending();
    },
  },

  {
    operation: "bannerText",
    method: "GET",
    path: "/content/banner-text",
    run: async () => {
      const string_ = await client.content.bannerText();
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/wishlist",
    run: async () => {
      const string_ = await client.wishlist.list();
    },
  },

  {
    operation: "wishlistAdd",
    method: "POST",
    path: "/wishlist/items",
    run: async () => {
      const string_ = await client.wishlist.items.wishlistAdd({
        productId: "",
      });
    },
  },

  {
    operation: "wishlistClear",
    method: "DELETE",
    path: "/wishlist/items",
    run: async () => {
      const string_ = await client.wishlist.items.wishlistClear();
    },
  },

  {
    operation: "wishlistRemove",
    method: "DELETE",
    path: "/wishlist/items/{wishlistProductId}",
    run: async () => {
      const string_ = await client.wishlist.items.wishlistRemove("wishlistProductId", {
      });
    },
  },

]

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        await testCase.run()
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()
