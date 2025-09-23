import { tv } from "tailwind-variants";

export const NavBarStyle = tv({
  base: "",
  variants: {
    variant: {
      vertical: "",
      horizontal: "",
    },
    role: {
      itemContainer: "",
      icon: "",
      label: "",
    },

    item: {
      vertical: "w-[56px] h-[32px] rounded-lg",
      horizontal: "w-[30px] rounded-[20px]",
    },
  },
  compoundVariants: [
    {
      variant: "vertical",
      role: "itemContainer",
      class: "",
    },
  ],
});
