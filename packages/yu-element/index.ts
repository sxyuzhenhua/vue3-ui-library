import installer from "./defaults";
export * from "@yu/components";
export * from "@yu/constants";
export * from "@yu/directives";
export * from "@yu/hooks";
export * from "@yu/tokens";
export * from "./make-installer";

export const install = installer.install;
export const version = installer.version;
export default installer;

export { default as dayjs } from "dayjs";
