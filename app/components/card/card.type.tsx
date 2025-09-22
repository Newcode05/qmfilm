import { VariantProps } from "tailwind-variants";
import { CardStyle } from "./card.style";
import { HTMLAttributes } from "react";

type CardVariant = VariantProps<typeof CardStyle>;
export type CardProps = HTMLAttributes<HTMLDivElement> &
  CardVariant & {
    children?: React.ReactNode;
  };
