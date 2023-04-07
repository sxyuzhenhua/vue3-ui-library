import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import { ensureStartingSlash } from "vitepress/dist/client/theme-default/utils";
import { useLang } from "./lang";

type SidebarItem = {
  text: string;
  link: string;
};
type SidebarConfig = SidebarItem[];

type Sidebar =
  | {
      [key: string]: SidebarConfig;
    }
  | false
  | "auto";

function getSidebarConfig(sidebar: Sidebar, path: string, lang: string) {
  if (sidebar === false || Array.isArray(sidebar) || sidebar === "auto") {
    return [];
  }

  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(`${lang}${dir}`))) {
      return sidebar[dir][lang];
    }
  }
  return [];
}

export const useSidebar = () => {
  const route = useRoute();
  const { site, page } = useData();
  const lang = useLang();
  if (!page.value) {
    return {
      sidebars: computed(() => []),
      hasSidebar: computed(() => false),
    };
  }
  const sidebars = computed(() => {
    if (page.value.frontmatter.sidebar === false) return [];
    const sidebars = getSidebarConfig(
      site.value.themeConfig.sidebars,
      route.data.relativePath,
      lang.value
    );
    return sidebars;
  });

  return {
    sidebars,
    hasSidebar: computed(() => sidebars.value.length > 0),
  };
};
