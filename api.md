# Puddle Storefront TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Accounts`](#accounts)
  - [Get current customer](#get-current-customer)
  - [Update customer profile](#update-customer-profile)
  - [Get marketing consent](#get-marketing-consent)
  - [Update marketing consent](#update-marketing-consent)
  - [List customer orders](#list-customer-orders)
  - [Get order](#get-order)
- [`Auth`](#auth)
  - [Request OTP](#request-otp)
  - [Verify OTP](#verify-otp)
  - [Get session](#get-session)
  - [Sign out](#sign-out)
- [`Cart`](#cart)
  - [Initialise checkout](#initialise-checkout)
  - [Get cart count](#get-cart-count)
  - [Migrate cart](#migrate-cart)
  - [Get cart](#get-cart)
  - [`Cart Items`](#cart-items)
    - [Add cart item](#add-cart-item)
    - [Remove cart item](#remove-cart-item)
    - [Update cart item quantity](#update-cart-item-quantity)
- [`Collections`](#collections)
  - [Get all collections](#get-all-collections)
  - [Get collection](#get-collection)
  - [Get collection products](#get-collection-products)
- [`Products`](#products)
  - [Get search products](#get-search-products)
  - [Get product](#get-product)
  - [Get infinite products](#get-infinite-products)
  - [Get trending products](#get-trending-products)
- [`Content`](#content)
  - [Get content blocks](#get-content-blocks)
  - [Get content block](#get-content-block)
  - [Get banner text](#get-banner-text)
- [`Wishlist`](#wishlist)
  - [Get wishlist](#get-wishlist)
  - [`Wishlist Items`](#wishlist-items)
    - [Add wishlist item](#add-wishlist-item)
    - [Clear wishlist](#clear-wishlist)
    - [Remove wishlist item](#remove-wishlist-item)

## Setup

```ts
import PuddleStorefrontAPI from "@puddle/storefront";

const client = new PuddleStorefrontAPI({
  storefrontPublicKey: "pk_storefront_...",
});
```

## `Accounts`

### Get current customer

Retrieves the currently authenticated customer session profile. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`AccountListParams`](./src/resources/accounts.ts) |
| Response | [`AccountListResponse`](./src/resources/accounts.ts) |

```ts
const list = await client.accounts.list();
```

### Update customer profile

Updates the profile details for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.

| Direction | Type |
| --- | --- |
| Request | [`AccountUpdateParams`](./src/resources/accounts.ts) |

```ts
const string_ = await client.accounts.update({
  firstName: "",
  lastName: "",
});
```

### Get marketing consent

Retrieves the marketing consent status for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.

| Direction | Type |
| --- | --- |
| Response | [`AccountMarketingGetResponse`](./src/resources/accounts.ts) |

```ts
const marketingGet = await client.accounts.marketingGet();
```

### Update marketing consent

Updates the marketing consent status for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.

| Direction | Type |
| --- | --- |
| Request | [`AccountMarketingUpdateParams`](./src/resources/accounts.ts) |
| Response | [`AccountMarketingUpdateResponse`](./src/resources/accounts.ts) |

```ts
const marketingUpdate = await client.accounts.marketingUpdate({
  consent: false,
});
```

### List customer orders

Retrieves a list of orders for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.

```ts
const string_ = await client.accounts.ordersList();
```

### Get order

Retrieves details of a specific order for the authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable. Requires a valid customer session cookie for the resolved storefront.

| Direction | Type |
| --- | --- |
| Request | [`AccountOrdersGetParams`](./src/resources/accounts.ts) |

```ts
const string_ = await client.accounts.ordersGet("orderId");
```

## `Auth`

### Request OTP

Requests a one-time password (OTP) for customer authentication. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`AuthAccountsRequestOtpParams`](./src/resources/auth.ts) |
| Response | [`AuthAccountsRequestOtpResponse`](./src/resources/auth.ts) |

```ts
const accountsRequestOtp = await client.auth.accountsRequestOtp({
  email: "",
});
```

### Verify OTP

Verifies the one-time password (OTP) to authenticate the customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`AuthAccountsVerifyOtpParams`](./src/resources/auth.ts) |
| Response | [`AuthAccountsVerifyOtpResponse`](./src/resources/auth.ts) |

```ts
const accountsVerifyOtp = await client.auth.accountsVerifyOtp({
  email: "",
  otp: "",
});
```

### Get session

Retrieves the current customer session details. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`AuthAccountsGetSessionResponse`](./src/resources/auth.ts) |

```ts
const accountsGetSession = await client.auth.accountsGetSession();
```

### Sign out

Signs out the currently authenticated customer. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`AuthAccountsSignOutResponse`](./src/resources/auth.ts) |

```ts
const accountsSignOut = await client.auth.accountsSignOut();
```

## `Cart`

### Initialise checkout

Initialises checkout for the current cart and returns the checkout session details. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`CartCheckoutParams`](./src/resources/cart/cart.ts) |
| Response | [`CartCheckoutResponse`](./src/resources/cart/cart.ts) |

```ts
const checkout = await client.cart.checkout();
```

### Get cart count

Retrieves the current number of items in the cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

```ts
const number_ = await client.cart.count();
```

### Migrate cart

Migrates a guest cart into the authenticated customer cart when both are present. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

```ts
const string_ = await client.cart.migrate();
```

### Get cart

Retrieves the current cart contents. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

```ts
const string_ = await client.cart.list();
```

### `Cart Items`

#### Add cart item

Adds a product or product variant to the current cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ItemCartAddParams`](./src/resources/cart/items.ts) |

```ts
const string_ = await client.cart.items.cartAdd({
  productId: "",
  quantity: 0,
});
```

#### Remove cart item

Removes a cart item from the current cart. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ItemCartRemoveParams`](./src/resources/cart/items.ts) |

```ts
const string_ = await client.cart.items.cartRemove("cartProductId");
```

#### Update cart item quantity

Updates the quantity of an existing cart item. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ItemCartUpdateParams`](./src/resources/cart/items.ts) |

```ts
const string_ = await client.cart.items.cartUpdate("cartProductId", {
  quantity: 0,
});
```

## `Collections`

### Get all collections

Retrieves a list of all collections for the storefront. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`CollectionListResponse`](./src/resources/collections.ts) |

```ts
const list = await client.collections.list();
```

### Get collection

Retrieves a single collection by its slug. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`CollectionRetrieveParams`](./src/resources/collections.ts) |
| Response | [`CollectionRetrieveResponse`](./src/resources/collections.ts) |

```ts
const retrieve = await client.collections.retrieve({
  slug: "example-collection",
});
```

### Get collection products

Retrieves products that belong to a specific collection. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`CollectionListProductsParams`](./src/resources/collections.ts) |

```ts
const string_ = await client.collections.listProducts({
  slug: "example-collection",
});
```

## `Products`

### Get search products

Retrieves a list of products suitable for search. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`ProductSearchResponse`](./src/resources/products.ts) |

```ts
const search = await client.products.search();
```

### Get product

Retrieves a single product by its slug. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ProductRetrieveParams`](./src/resources/products.ts) |
| Response | [`ProductRetrieveResponse`](./src/resources/products.ts) |

```ts
const retrieve = await client.products.retrieve({
  slug: "example-product",
});
```

### Get infinite products

Retrieves a paginated list of products for a category, collection, or all. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ProductListInfiniteParams`](./src/resources/products.ts) |

```ts
const string_ = await client.products.listInfinite({
  type: "ALL",
});
```

### Get trending products

Retrieves a list of trending products. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`ProductListTrendingResponse`](./src/resources/products.ts) |

```ts
const listTrending = await client.products.listTrending();
```

## `Content`

### Get content blocks

Retrieves all configured storefront content blocks for the current store. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`ContentBlocksResponse`](./src/resources/content.ts) |

```ts
const blocks = await client.content.blocks();
```

### Get content block

Retrieves a single storefront content block by its id. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ContentBlockParams`](./src/resources/content.ts) |
| Response | [`ContentBlockResponse`](./src/resources/content.ts) |

```ts
const block = await client.content.block("blockId");
```

### Get banner text

Retrieves the active banner text for the storefront if enabled. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Response | [`ContentBannerTextResponse`](./src/resources/content.ts) |

```ts
const string_ = await client.content.bannerText();
```

## `Wishlist`

### Get wishlist

Retrieves the current wishlist contents. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

```ts
const string_ = await client.wishlist.list();
```

### `Wishlist Items`

#### Add wishlist item

Adds a product or product variant to the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ItemWishlistAddParams`](./src/resources/wishlist/items.ts) |

```ts
const string_ = await client.wishlist.items.wishlistAdd({
  productId: "",
});
```

#### Clear wishlist

Removes all wishlist items from the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

```ts
const string_ = await client.wishlist.items.wishlistClear();
```

#### Remove wishlist item

Removes a wishlist item from the current wishlist. Requires `Authorization: Bearer <storefront-public-key>`. Server-side callers must include `x-puddle-storefront-host` when `Origin`/`Referer` is unavailable.

| Direction | Type |
| --- | --- |
| Request | [`ItemWishlistRemoveParams`](./src/resources/wishlist/items.ts) |

```ts
const string_ = await client.wishlist.items.wishlistRemove("wishlistProductId");
```
