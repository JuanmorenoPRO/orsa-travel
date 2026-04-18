#!/bin/sh
set -e

cd artifacts/orsa-guatape

echo "Deploying to Cloudflare Pages..."

npx wrangler pages deploy dist/public \
  --project-name=orsa-travel \
  --account-id=bfcf2211a8497d8334bc1faf7f9d1f28 \
  --branch=main \
  --commit-dirty=true

echo "Deploy finished"