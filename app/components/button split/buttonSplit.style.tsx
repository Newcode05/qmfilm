import { tv } from "tailwind-variants";

export const buttonSplitStyle = tv({
  base: "btn-sp",
  variants: {
    color: {
      elevated: "",
      filled: "",
      tonal: "",
      outlined: "",
    },
    size: {
      xs: "btn-sp-xs",
      sm: "btn-sp-sm",
      md: "btn-sp-md",
      lg: "btn-sp-lg",
    },
  },
});
