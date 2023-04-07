import { withInstall, withNoopInstall } from "@yu/utils";

import Select from "./src/select.vue";
import Option from "./src/option.vue";
import OptionGroup from "./src/option-group.vue";

export const YuSelect = withInstall(Select, {
  Option,
  OptionGroup,
});
export default YuSelect;
export const YuOption = withNoopInstall(Option);
export const YuOptionGroup = withNoopInstall(OptionGroup);

export * from "./src/token";
