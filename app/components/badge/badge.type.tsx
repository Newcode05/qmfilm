import { VariantProps } from "tailwind-variants";
import { HTMLMotionProps } from "framer-motion";
import { BadgeStyle } from "./badge.style";
type anchorOrigin = {
  vertical: "top" | "bottom";
  horizontal: "right" | "left";
};
type BadgeVariant = VariantProps<typeof BadgeStyle>;
export type BadgeProps = HTMLMotionProps<"div"> &
  BadgeVariant & {
    label?: string | number;
    icon?: React.ReactNode;
    anchorOrigin: anchorOrigin;
    selected?: boolean;
  };
