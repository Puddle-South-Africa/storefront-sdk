import test from 'node:test'
import assert from 'node:assert/strict'

import PuddleStorefrontAPI from '../dist/esm/index.js'

test('accountsSignOut sends an empty JSON body with application/json', async () => {
  let request

  const client = new PuddleStorefrontAPI({
    storefrontPublicKey: 'pk_storefront_test',
    fetch: async (url, init) => {
      request = { url, init }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    },
  })

  const response = await client.auth.accountsSignOut()

  assert.equal(response.success, true)
  assert.ok(request)
  assert.equal(request.url, 'https://api.puddle.co.za/storefront/v1/auth/sign-out')
  assert.equal(request.init.method, 'POST')
  assert.equal(request.init.headers.get('content-type'), 'application/json')
  assert.equal(request.init.body, '{}')
})
