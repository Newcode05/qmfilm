import { VariantProps } from "tailwind-variants";
import { NavBarStyle } from "./navigationBar.style";
import { HTMLAttributes } from "react";

type NavBarVariant = VariantProps<typeof NavBarStyle>;
type navItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
}[];
export type NavBarProps = HTMLAttributes<HTMLDivElement> &
  NavBarVariant & {
    navItem: navItem;
    className?:string;
    classNameNavItem?:string;
  };
