import assert from 'node:assert/strict';
import test from 'node:test';
import * as z from 'zod';

import { buildClientParams } from '../dist/esm/generated/core/params.gen.js';
import {
  zPostCartCheckoutBody,
  zPostCartCheckoutHeaders,
} from '../dist/esm/generated/zod.gen.js';

const checkoutFields = [{ args: [
  { in: 'headers', key: 'x-puddle-storefront-host' },
  { in: 'body', key: 'couponCode' },
  { in: 'body', key: 'giftCardCodes' },
  { in: 'body', key: 'deliveryMethod' },
  { in: 'body', key: 'deliveryMethodId' },
  { in: 'body', key: 'deliveryMethodCode' },
] }];

const checkoutValidator = z.object({
  body: zPostCartCheckoutBody,
  headers: zPostCartCheckoutHeaders.optional(),
  path: z.never().optional(),
  query: z.never().optional(),
});

function buildCheckoutPayload(parameters) {
  const params = buildClientParams([parameters], checkoutFields);
  const payload = {};

  for (const key of ['body', 'headers', 'path', 'query']) {
    if (params[key] !== undefined) {
      payload[key] = params[key];
    }
  }

  return payload;
}

test('cart.checkout({}) validates an empty object body', async () => {
  const payload = buildCheckoutPayload({});
  const validated = await checkoutValidator.parseAsync(payload);

  assert.deepEqual(payload, { body: {} });
  assert.deepEqual(validated, { body: {} });
});

test('cart.checkout({ couponCode }) validates the populated body', async () => {
  const payload = buildCheckoutPayload({ couponCode: 'ABC' });
  const validated = await checkoutValidator.parseAsync(payload);

  assert.deepEqual(payload, { body: { couponCode: 'ABC' } });
  assert.deepEqual(validated, { body: { couponCode: 'ABC' } });
});

test('true no-body endpoints still omit body', async () => {
  const payload = buildClientParams([undefined], [{ args: [] }]);

  assert.equal(Object.hasOwn(payload, 'body'), false);
  assert.deepEqual(payload, {});
});
