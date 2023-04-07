import { buildProps, definePropType } from "@yu/utils";
import { popperTriggerProps } from "@yu/components/popper";
import { EVENT_CODE } from "@yu/constants";
import type { Arrayable } from "@yu/utils";
import type { ExtractPropTypes } from "vue";

export type TooltipTriggerType = "hover" | "focus" | "click" | "contextmenu";

export const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType<Arrayable<TooltipTriggerType>>([String, Array]),
    default: "hover",
  },
  triggerKeys: {
    type: definePropType<string[]>(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space],
  },
} as const);

export type ElTooltipTriggerProps = ExtractPropTypes<
  typeof useTooltipTriggerProps
>;
