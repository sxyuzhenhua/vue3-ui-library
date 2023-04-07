import { withInstall } from "@yu/utils";

import ConfigProvider from "./src/config-provider";

export const YuConfigProvider = withInstall(ConfigProvider);
export default YuConfigProvider;

export * from "./src/config-provider";
