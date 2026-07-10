import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://api.puddle.co.za/storefront/v1/openapi.json',
  output: {
    path: 'src',
  },
  plugins: [
    '@hey-api/client-fetch',
    '@hey-api/typescript',
    {
      name:'@hey-api/sdk',
      examples: {
        moduleName: '@puddle/storefront',
        setupName: 'client',
      },
      paramsStructure: "flat",
      operations: {
        strategy: "single",
        containerName: 'PuddleStorefrontAPI',
      },
    
    },
    '@tanstack/react-query'
  ],
});
