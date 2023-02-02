#!/bin/sh

# 在vercel上发布文档， 命令
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

pnpm run docs:gen-locale
pnpm run docs:build

echo "✅ Publish completed"
