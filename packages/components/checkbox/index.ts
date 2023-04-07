import { withInstall, withNoopInstall } from "@yu/utils";

import Checkbox from "./src/checkbox.vue";
import CheckboxButton from "./src/checkbox-button.vue";
import CheckboxGroup from "./src/checkbox-group.vue";

export const YuCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
});
export default YuCheckbox;

export const YuCheckboxButton = withNoopInstall(CheckboxButton);
export const YuCheckboxGroup = withNoopInstall(CheckboxGroup);

export * from "./src/checkbox-group";
export * from "./src/checkbox";
