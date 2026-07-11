import { OperationPath, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://api.puddle.storefront.co.za/storefront/v1/openapi.json",
  output: {
    path: "src/generated",
  },
  plugins: [
    "@hey-api/client-fetch",
    "@hey-api/typescript",
    {
      name: "@hey-api/sdk",
      validator: true,
      examples: {
        importSetup: ({ $, node }) =>
          $.new(
            node.name,
            $.object().pretty().prop("apiKey", $.literal("YOUR_API_KEY")),
          ),
        moduleName: "@puddle/storefront",
        setupName: "storefront",
      },
      operations: {
        strategy: "single",
        containerName: "PuddleStorefrontApi",
        nesting(operation) {
          const parts = operation.operationId?.split("-").filter(Boolean);

          if (parts?.length) {
            return parts;
          }

          return ["default", operation.method.toLowerCase()];
        },
      },
    },
    { name: "zod" },
  ],
});
