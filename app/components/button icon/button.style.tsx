import { tv } from "tailwind-variants";

export const buttonIconStyle = tv({
  base: "",
  variants: {
    shape: {
      round: "",
      square: "",
    },
    width: {
      narrow: "",
      default: "",
      wide: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
    color: {
      filled: "",
      tonal: "",
      outlined: "",
      standard: "",
    },
  },
});
