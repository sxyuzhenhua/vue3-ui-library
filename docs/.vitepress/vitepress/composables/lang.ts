import { computed } from "vue";
import { useRoute } from "vitepress";
const defaultLang = "en-US";

export const useLang = () => {
  const route = useRoute();
  return computed(() => {
    const path = route.data?.relativePath;
    let lang: string;

    if (path?.includes("/")) {
      lang = path.split("/").shift()! || defaultLang;
    } else {
      lang = defaultLang;
    }
    return lang;
  });
};
