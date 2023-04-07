import { withInstall } from "@yu/utils";

import Input from "./src/input.vue";

export const YuInput = withInstall(Input);
export default YuInput;

export * from "./src/input";

export type InputInstance = InstanceType<typeof Input>;
