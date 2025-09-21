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
    selected: {
      true: "",
      false: "",
    },
    color: {
      filled:
        "bg-primary text-on-primary hover:before:bg-on-primary active:before:bg-on-primary disabled:bg-on-surface",
      tonal:
        "bg-secondary-container text-on-secondary-container hover:before:bg-on-secondary-container active:before:bg-on-secondary-container disabled:bg-on-surface",
      outlined:
        "outline-outline-variant text-on-surface-variant hover:before:bg-on-surface-variant active:before:bg-on-surface-variant disabled:outline-outline-variant",
      elevated:
        "bg-surface text-on-surface shadow-elevation1 hover:before:bg-on-surface active:before:bg-on-surface",
      standard:
        "text-on-surface-variant hover:before:bg-on-surface-variant active:before:bg-on-surface-variant",
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

    {
      shape: "square",
      selected: true,
      class: "before:rounded-full",
    },

    {
      shape: "round",
      size: "xs",
      selected: true,
      class: "before:rounded-md",
    },
    {
      shape: "round",
      size: "sm",
      selected: true,
      class: "before:rounded-md",
    },
    {
      shape: "round",
      size: "md",
      selected: true,
      class: "before:rounded-lg",
    },
    {
      shape: "round",
      size: "lg",
      selected: true,
      class: "before:rounded-xl",
    },
  ],
});

const getBorderRadius = (shape: string, size: string, selected: boolean) => {
  if (selected) {
    if (shape === "square") return "50%";
  }
  switch (shape) {
    case "round":
      return "50%";
    default: {
      if (size === "xs" || size === "sm") return "12px";
      if (size === "md") return "16px";
      return "28px";
    }
  }
};

export const buttonVariants = {
  normal: (custom: { shape: string; size: string }) => ({
    scale: 1,
    borderRadius: getBorderRadius(custom.shape, custom.size, false),
  }),
  selected: (custom: { shape: string; size: string }) => ({
    scale: 1.2,
    borderRadius: getBorderRadius(custom.shape, custom.size, true),
  }),
};
