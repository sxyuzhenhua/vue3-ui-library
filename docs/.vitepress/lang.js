(() => {
  const supportedLangs = window.supportedLangs; // ['en-US', 'zh-CN']
  const cacheKey = "preferred_lang";
  const defaultLang = "en-US";
  // docs supported languages
  const langAlias = {
    en: "en-US",
    fr: "fr-FR",
    es: "es-ES",
  };
  let userPreferredLang = localStorage.getItem(cacheKey) || navigator.language; // 'en'
  const language = // 'en-US'
    langAlias[userPreferredLang] ||
    (supportedLangs.includes(userPreferredLang)
      ? userPreferredLang
      : defaultLang);
  localStorage.setItem(cacheKey, language);
  userPreferredLang = language; // 'en-US'
  if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split("/").slice(2))
      .join("/");
    location.pathname =
      toPath.endsWith(".html") || toPath.endsWith("/")
        ? toPath
        : toPath.concat("/");
  }
  if (navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: "LANG",
      lang: userPreferredLang,
    });
  }
})();
