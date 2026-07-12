import fs from 'fs';

const url = "https://api.puddle.co.za/storefront/v1/openapi.json";
const res = await fetch(url);
const json = await res.json();

// Remove global security
if (json.security) {
  delete json.security;
}

// Remove security from all paths and authorization parameters
if (json.paths) {
  for (const path of Object.values(json.paths)) {
    for (const op of Object.values(path)) {
      if (op.security) {
        delete op.security;
      }
      if (op.parameters) {
        op.parameters = op.parameters.filter(p => p.name !== 'authorization');
      }
    }
  }
}

fs.writeFileSync('openapi.json', JSON.stringify(json, null, 2));
