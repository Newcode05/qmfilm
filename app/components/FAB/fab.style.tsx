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
        "bg-primary text-on-primary hover:before:bg-on-primary active:before:bg-on-primary focus-visible:before:bg-on-primary",
      secondary:
        "bg-secondary text-on-secondary hover:before:bg-on-secondary active:before:bg-on-secondary focus-visible:before:bg-on-secondary",
      tertiary:
        "bg-tertiary text-on-tertiary hover:before:bg-on-tertiary active:before:bg-on-tertiary focus-visible:before:bg-on-tertiary",
      "primary-container":
        "bg-primary-container text-on-primary-container hover:before:bg-on-primary-container active:before:bg-on-primary-container focus-visible:before:bg-on-primary-container",
      "secondary-container":
        "bg-secondary-container text-on-secondary-container hover:before:bg-on-secondary-container active:before:bg-on-secondary-container focus-visible:before:bg-on-secondary-container",
      "tertiary-container":
        "bg-tertiary-container text-on-tertiary-container hover:before:bg-on-tertiary-container active:before:bg-on-tertiary-container focus-visible:before:bg-on-tertiary-container",
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
