import { tv } from "tailwind-variants";

export const fabStyle = tv({
  base: "fab",
  variants: {
    variant: {
      default: "",
      extended: "w-auto!",
    },
    color: {
      primary:
        "bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active",
      secondary:
        "bg-secondary text-on-primary hover:bg-secondary-hover active:bg-secondary-active",
      tertiary:
        "bg-tertiary text-on-tertiary hover:bg-tertiary-hover active:bg-tertiary-active",
      "primary-container":
        "bg-primary-container text-on-primary-container hover:before:bg-on-primary-container hover:before:opacity-[0.08] active:before:bg-on-primary-container active:before:opacity-[0.1]",
      "secondary-container":
        "bg-secondary-container text-on-secondary-container hover:bg-secondary-container-hover hover:before:opacity-[0.08] active:bg-secondary-container-active",
      "tertiary-container":
        "bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container-hover active:bg-tertiary-active",
    },
    size: {
      sm: "fab-sm",
      md: "fab-md",
      lg: "fab-lg",
    },
  },
  compoundVariants: [
    {
      variant: "extended",
      size: "sm",
      class: "fab-ex-sm",
    },
    {
      variant: "extended",
      size: "md",
      class: "fab-ex-md",
    },
    {
      variant: "extended",
      size: "lg",
      class: "fab-ex-lg",
    },
  ],
});
export const ripple = tv({
  base: "opacity-[0.1]",
  variants: {
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      "primary-container": "bg-on-primary-container",
      "secondary-container": "bg-on-secondary-container",
      "tertiary-container": "bg-on-tertiary-container",
    },
  },
});
