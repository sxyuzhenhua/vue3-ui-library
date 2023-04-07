import { useRouter } from "vitepress";
import { useLang } from "./lang";

export const useLink = () => {
  const router = useRouter();
  const lang = useLang();
  const jumpLink = (link) => {
    const goTo = `/${lang.value}/${link}`;
    router.go(goTo);
  };

  return jumpLink;
};
