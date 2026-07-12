import { defineConfig } from "@hey-api/openapi-ts";
const config = defineConfig({
  input: "abc",
  output: "src",
  plugins: [
    {
      name: "@hey-api/sdk",
      // We want to see what properties are here
    }
  ]
});
