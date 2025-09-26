import { VariantProps } from "tailwind-variants";
import { NavBarStyle } from "./navigationBar.style";
import { HTMLAttributes } from "react";
import { BadgeProps } from "../badge/badge.type";

type NavBarVariant = VariantProps<typeof NavBarStyle>;
export type navItem = {
  id: string;
  label: string;
  path: string;
  active: boolean;
  badge: BadgeProps;
};
export type NavBarProps = HTMLAttributes<HTMLDivElement> &
  NavBarVariant & {
    listNavItem: navItem[];
    className?: string;
    classNameNavItem?: string;
  };
