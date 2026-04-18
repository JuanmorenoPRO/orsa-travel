#!/bin/sh
set -e

cd artifacts/orsa-guatape

npx wrangler pages deploy dist/public \
  --project-name=orsa-travel \
  --branch=main