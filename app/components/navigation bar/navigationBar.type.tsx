import { VariantProps } from "tailwind-variants";
import { NavBarStyle } from "./navigationBar.style";
import { HTMLAttributes } from "react";

type NavBarVariant = VariantProps<typeof NavBarStyle>;

export type NavBarProps = HTMLAttributes<HTMLDivElement> &
  NavBarVariant & {
    navitem?: React.ReactNode;
  };
