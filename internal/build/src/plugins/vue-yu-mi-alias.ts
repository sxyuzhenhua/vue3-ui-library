import { PKG_NAME, PKG_PREFIX } from "@yu/build-constants";

import type { Plugin } from "rollup";

export function VueYuMiAlias(): Plugin {
  const themeChalk = "theme-chalk";
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const; // @yu/theme-chalk
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const; // yu/theme-chalk

  return {
    name: "vue-yu-mi-alias-plugin",
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return;
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: "absolute",
      };
    },
  };
}
