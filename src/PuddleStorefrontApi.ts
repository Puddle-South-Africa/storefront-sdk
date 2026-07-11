import { PuddleStorefrontApi as GeneratedPuddleStorefrontApi } from './generated/sdk.gen';
import { createClient, type Config } from './generated/client';

export interface PuddleStorefrontApiOptions extends Omit<Config, 'baseUrl'> {
    /**
     * Base URL for the Storefront API
     */
    baseUrl?: string;
    /**
     * API Key for the Storefront API
     */
    apiKey?: string;
}

export class PuddleStorefrontApi extends GeneratedPuddleStorefrontApi {
    constructor(options: PuddleStorefrontApiOptions = {}) {
        const { apiKey, baseUrl, ...rest } = options;
        
        const client = createClient({
            ...rest,
            baseUrl: baseUrl ?? 'https://api.puddle.co.za/storefront/v1',
            headers: apiKey ? {
                ...rest.headers as any,
                Authorization: `Bearer ${apiKey}`,
            } : rest.headers,
        });

        super({ client });
    }
}
