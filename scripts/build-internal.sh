#!/bin/sh
cd internal/build
pnpm install
pnpm start
cd -

cd internal/build-constants
pnpm install
pnpm build
cd -

cd internal/build-utils
pnpm install
pnpm build
cd -

echo "✅ Publish completed"
