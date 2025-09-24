import { tv } from "tailwind-variants";

export const NavBarStyle = tv({
  base: "",
  variants: {
    variant: {
      vertical: "",
      horizontal: "",
    },
    role: {
      container:
        "w-[450px] h-[64px] flex flex-row justify-center items-center bg-surface-variant cursor-pointer",
      navItemContainer:
        "relative flex-1 flex justify-center items-center h-[64px]",
      navItem: "group relative flex gap-[4px] items-center justify-center",
      indicatorActive:
        "absolute top-0 left-0 rounded-full z-[0] bg-secondary-container",
      statelayer:
        "absolute top-0 left-0 rounded-full group-hover:bg-secondary-container group-hover:opacity-[0.8] z-[10]",
      iconContainer: "flex justify-center items-center z-[10]",
      label:
        "flex justify-center items-center text-[12px] select-none text-semibold z-[10]",
    },
    selected: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Vertical
    {
      variant: "vertical",
      role: "navItem",
      class: "h-max w-[56px] flex-col",
    },
    {
      variant: "vertical",
      role: "navItem",
      selected: true,
      class: "text-on-secondary-container",
    },
    {
      variant: "vertical",
      role: "navItem",
      selected: false,
      class: "text-on-surface-variant",
    },
    {
      variant: "vertical",
      role: "indicatorActive",
      class: "w-[56px] h-[32px]",
    },
    {
      variant: "vertical",
      role: "statelayer",
      class: "w-[56px] h-[32px]",
    },
    {
      variant: "vertical",
      role: "iconContainer",
      class: "w-[56px] h-[32px]",
    },
    // Horizontal
    {
      variant: "horizontal",
      role: "navItem",
      class: "px-[16px] w-max h-[40px] flex-row",
    },
    {
      variant: "horizontal",
      role: "navItem",
      selected: true,
      class: "text-on-secondary-container",
    },
    {
      variant: "horizontal",
      role: "navItem",
      selected: false,
      class: "text-on-surface-variant",
    },
    {
      variant: "horizontal",
      role: "indicatorActive",
      class: "w-full h-full",
    },
    {
      variant: "horizontal",
      role: "statelayer",
      class: "w-full h-full",
    },
    {
      role: "label",
      selected: true,
      class: "text-on-secondary-container",
    },
    {
      role: "label",
      selected: false,
      class: "text-on-surface-variant",
    },
  ],
});
