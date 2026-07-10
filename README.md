# @puddle/storefront

> 🇿🇦 Puddle is upgrading the South African headless e-commerce landscape! The waitlist is available at [puddle.co.za](https://puddle.co.za).

The official TypeScript SDK for the Puddle Storefront API. Built with full type safety and modern web standards.

## Installation

```sh
npm install @puddle/storefront
```

## Initialization

You can initialize the Storefront API client by providing your `storefrontPublicKey`. This key will automatically be passed as a Bearer token in the `Authorization` header for all requests.

```ts
import { PuddleStorefrontApi } from "@puddle/storefront";

const storefront = new PuddleStorefrontApi({
  storefrontPublicKey: "pk_storefront_test_...",
});
```

You can also pass additional default headers or configuration for the fetch client:

```ts
const storefront = new PuddleStorefrontApi({
  storefrontPublicKey: "pk_storefront_test_...",
  headers: {
    "x-puddle-storefront-host": "shop.example.com",
  },
});
```

## Usage Examples

The SDK is grouped by top-level resources like `accounts`, `cart`, `collections`, `products`, `content`, and `wishlist`.

Here are some common examples of how to use it:

### Get the current customer

```ts
const { data: customer } = await storefront.accounts.get({
  throwOnError: true,
});

console.log(customer);
```

### Update the current customer

```ts
const { data } = await storefront.accounts.update({
  body: {
    firstName: "Jane",
    lastName: "Doe",
    phone: "+27123456789",
  },
  throwOnError: true,
});
```

### List trending products

```ts
const { data: products } = await storefront.products.getTrendingProducts({
  throwOnError: true,
});
```

### Get the current cart

```ts
const { data: cart } = await storefront.cart.get({
  throwOnError: true,
});
```

### Add an item to the cart

```ts
const { data: updatedCart } = await storefront.cart.add({
  body: {
    productId: "product_123",
    productVariantId: "variant_123",
    quantity: 1,
  },
  throwOnError: true,
});
```

### Request an OTP

```ts
await storefront.accounts.authRequestOtp({
  body: {
    email: "jane@example.com",
  },
  throwOnError: true,
});
```

## Error Handling

By default, the SDK returns a response object containing `data` and `error`. We highly recommend using the `throwOnError: true` option to automatically throw exceptions for non-2xx HTTP responses, which makes integration much simpler in modern frameworks.

```ts
try {
  const { data } = await storefront.cart.add({
    body: { productId: "invalid_123", quantity: 1 },
    throwOnError: true,
  });
} catch (error) {
  console.error("Failed to add to cart:", error);
}
```
