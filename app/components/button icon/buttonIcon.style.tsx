import { tv } from "tailwind-variants";

export const buttonIconStyle = tv({
  base: "btn-i",
  variants: {
    shape: {
      round: "rounded-full after:rounded-full",
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
      filled:
        "bg-primary text-on-primary hover:before:bg-on-primary active:before:bg-on-primary disabled:bg-on-surface",
      tonal:
        "bg-secondary-container text-on-secondary-container hover:before:bg-on-secondary-container active:before:bg-on-secondary-container disabled:bg-on-surface",
      outlined:
        "outline-outline-variant text-on-surface-variant hover:before:bg-on-surface-variant active:before:bg-on-surface-variant",
      standard: "text-on-surface-variant",
    },
  },
  compoundVariants: [
    {
      width: "narrow",
      size: "xs",
      class: "btn-i-nr-xs after:w-[48px] after:h-[48px]",
    },
    {
      width: "narrow",
      size: "sm",
      class: "btn-i-nr-sm after:w-[48px] after:h-[48px]",
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
      class: "btn-i-df-xs after:w-[48px] after:h-[48px]",
    },
    {
      width: "default",
      size: "sm",
      class: "btn-i-df-sm after:w-[48px] after:h-[48px]",
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
      class: "btn-i-wd-xs after:w-[48px] after:h-[48px]",
    },
    {
      width: "wide",
      size: "sm",
      class: "btn-i-wd-sm after:w-[48px] after:h-[48px]",
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

    {
      color: "outlined",
      size: "xs",
      class: "outline-1",
    },
    {
      color: "outlined",
      size: "sm",
      class: "outline-1",
    },
    {
      color: "outlined",
      size: "md",
      class: "outline-1",
    },
    {
      color: "outlined",
      size: "lg",
      class: "outline-2",
    },
    {
      shape: "square",
      size: "xs",
      class: "before:rounded-md",
    },
    {
      shape: "square",
      size: "sm",
      class: "before:rounded-md",
    },
    {
      shape: "square",
      size: "md",
      class: "before:rounded-lg",
    },
    {
      shape: "square",
      size: "lg",
      class: "before:rounded-xl",
    },
  ],
});
