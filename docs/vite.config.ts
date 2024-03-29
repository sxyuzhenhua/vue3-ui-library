import path from "path";
import { defineConfig, loadEnv } from "vite";
import VueMacros from "unplugin-vue-macros/vite";
import UnoCSS from "unocss/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { docRoot, projRoot } from "@yu/build-utils";
import { getPackageDependencies } from "./pkg";

import { MarkdownTransform } from "./.vitepress/plugins/markdown-transform";

import type { Alias } from "vite";

const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];
if (process.env.DOC_ENV !== "production") {
  alias.push(
    {
      find: /^vue-yu-mi(\/(es|lib))?$/,
      replacement: path.resolve(projRoot, "packages/vue-yu-mi/index.ts"),
    },
    {
      find: /^vue-yu-mi\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(projRoot, "packages")}/$2`,
    }
  );
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const { dependencies: epDeps } = getPackageDependencies(
    path.resolve(docRoot, "package.json")
  );

  const optimizeDeps = [...new Set([...epDeps])].filter(
    (dep) => !dep.startsWith("@types/")
  );

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [".vitepress/vitepress/components"],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      MarkdownTransform(),
    ],
    optimizeDeps: {
      include: optimizeDeps, // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
    },
  };
});
