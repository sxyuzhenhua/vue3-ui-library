import { withInstall, withNoopInstall } from "@yu/utils";

import Dropdown from "./src/dropdown.vue";
import DropdownItem from "./src/dropdown-item.vue";
import DropdownMenu from "./src/dropdown-menu.vue";

export const YuDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
});
export default YuDropdown;
export const YuDropdownItem = withNoopInstall(DropdownItem);
export const YuDropdownMenu = withNoopInstall(DropdownMenu);
export * from "./src/dropdown";
export * from "./src/tokens";
