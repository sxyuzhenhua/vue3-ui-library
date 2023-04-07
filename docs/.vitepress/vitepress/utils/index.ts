import {
  endingSlashRE,
  isActive,
  isExternal,
  normalize,
} from "vitepress/dist/client/theme-default/utils";

import type { Route } from "vitepress";
export * from "./colors";

export function createGitHubUrl(
  docsRepo: string,
  docsDir: string,
  docsBranch: string,
  path: string,
  folder = "examples/",
  ext = ".vue"
) {
  const base = isExternal(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`;
  return `${base.replace(endingSlashRE, "")}/edit/${docsBranch}/${
    docsDir ? `${docsDir.replace(endingSlashRE, "")}/` : ""
  }${folder || ""}${path}${ext || ""}`;
}

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)));
}

export const hashRE = /#.*$/;
export const extRE = /(index)?\.(md|html)$/;

// export function normalize(path) {
//   return decodeURI(path).replace(hashRE, "").replace(extRE, "");
// }

// export function isActive(route, path) {
//   if (path === undefined) {
//     return false;
//   }
//   const routePath = normalize(`/${route.data.relativePath}`);
//   const pagePath = normalize(path);
//   return routePath === pagePath;
// }
// When match === true, meaning `path` is a string for build regex
export const isActiveLink = (
  route: Route,
  pathPattern: string,
  match?: boolean
) => {
  if (!match) return isActive(route, pathPattern);
  const regex = new RegExp(pathPattern);

  return regex.test(normalize(`/${route.data.relativePath}`));
};

export const isMenuActive = (route, link) => {
  return route.path.split(".")[0] === link;
};
