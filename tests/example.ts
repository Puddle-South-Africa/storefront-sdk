import { PuddleStorefrontApi } from "@puddle/storefront";

const storefront = new PuddleStorefrontApi({
  baseUrl: "https://api.puddle.com",
  apiKey: "YOUR_API_KEY",
});

const products = await storefront.products.infinite({});
