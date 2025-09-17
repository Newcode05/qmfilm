import { tv } from "tailwind-variants";
export const buttonGroupStyle = tv({
  base: "btn-gr",
  variants: {
    type: {
      standard: "",
      connected: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    {
      type: "standard",
      size: "xs",
      class: "btn-gr-st-xs",
    },
    {
      type: "standard",
      size: "sm",
      class: "btn-gr-st-sm",
    },
    {
      type: "standard",
      size: "md",
      class: "btn-gr-st-md",
    },
    {
      type: "standard",
      size: "lg",
      class: "btn-gr-st-lg",
    },
    {
      type: "connected",
      size: "xs",
      class: "btn-gr-cn-xs",
    },
    {
      type: "connected",
      size: "sm",
      class: "btn-gr-cn-sm",
    },
    {
      type: "connected",
      size: "md",
      class: "btn-gr-cn-md",
    },
    {
      type: "connected",
      size: "lg",
      class: "btn-gr-cn-lg",
    },
  ],
});
