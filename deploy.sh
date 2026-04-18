#!/bin/sh
set -e

cd artifacts/orsa-guatape

echo "Deploying to Cloudflare Pages..."

npx wrangler pages deploy dist/public \
  --project-name=orsa-travel \
  --branch=main \
  --commit-dirty=true

echo "Deploy finished"