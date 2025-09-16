import { VariantProps } from "tailwind-variants";
import { buttonIconStyle } from "./buttonIcon.style";
import { HTMLAttributes } from "react";

type buttonIconVariant = VariantProps<typeof buttonIconStyle>;
export type ButtonIconProps = HTMLAttributes<HTMLDivElement> &
  buttonIconVariant & {
    icon?: React.ReactNode;
  };
