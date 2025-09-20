import { VariantProps } from "tailwind-variants";
import { HTMLMotionProps } from "framer-motion";
import { buttonIconStyle } from "./buttonIcon.style";

type buttonIconVariant = VariantProps<typeof buttonIconStyle>;
export type ButtonIconProps = HTMLMotionProps<"button"> &
  buttonIconVariant & {
    icon?: React.ReactNode;
    selected?: boolean;
    loading?: boolean;
  };
