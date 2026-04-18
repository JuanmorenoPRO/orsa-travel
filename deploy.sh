#!/bin/sh
set -e

cd artifacts/orsa-guatape

npx wrangler pages deploy dist/public \
  --project-name=orsa-travel \
  --account-id=bfcf2211a8497d8334bc1faf7f9d1f28 \
  --branch=main