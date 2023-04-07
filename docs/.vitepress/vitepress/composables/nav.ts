import { computed } from "vue";
import { useData, useRoute, useRouter } from "vitepress";
import { useLang } from "./lang";

export const useNav = () => {
  const { theme } = useData();
  const router = useRouter();
  const lang = useLang();
  const jumpHome = () => {
    const goTo = `/${lang.value}/`;
    router.go(goTo);
  };

  const navs = computed(() => {
    return theme.value.nav[lang.value];
  });

  return { navs, jumpHome };
};
