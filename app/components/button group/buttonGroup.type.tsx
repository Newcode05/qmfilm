import { VariantProps } from "tailwind-variants";
import { buttonGroupStyle } from "./buttonGroup.style";
import { HTMLAttributes } from "react";
type buttonGroupVariant = VariantProps<typeof buttonGroupStyle>;
export type buttonGroupProps = HTMLAttributes<HTMLDivElement> &
  buttonGroupVariant & {
    children?: React.ReactNode;
  };
