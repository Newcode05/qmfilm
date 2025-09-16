import { tv } from "tailwind-variants";

export const buttonIconStyle = tv({
  base: "btn-i",
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
      filled: "bg-primary text-on-primary",
      tonal: "",
      outlined: "",
      standard: "",
    },
  },
  compoundVariants: [
    {
      width: "narrow",
      size: "xs",
      class: "btn-i-nr-xs",
    },
    {
      width: "narrow",
      size: "sm",
      class: "btn-i-nr-sm",
    },
    {
      width: "narrow",
      size: "md",
      class: "btn-i-nr-md",
    },
    {
      width: "narrow",
      size: "lg",
      class: "btn-i-nr-lg",
    },

    {
      width: "default",
      size: "xs",
      class: "btn-i-df-xs",
    },
    {
      width: "default",
      size: "sm",
      class: "btn-i-df-sm",
    },
    {
      width: "default",
      size: "md",
      class: "btn-i-df-md",
    },
    {
      width: "default",
      size: "lg",
      class: "btn-i-df-lg",
    },

    {
      width: "wide",
      size: "xs",
      class: "btn-i-wd-xs",
    },
    {
      width: "wide",
      size: "sm",
      class: "btn-i-wd-sm",
    },
    {
      width: "wide",
      size: "md",
      class: "btn-i-wd-md",
    },
    {
      width: "wide",
      size: "lg",
      class: "btn-i-wd-lg",
    },
  ],
});
