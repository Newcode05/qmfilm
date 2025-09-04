import { tv } from "tailwind-variants";

type ButtonVariant =
  | "filled"
  | "tonal"
  | "outlined"
  | "elevated"
  | "icon"
  | "text"
  | "fab";
type ButtonColor = "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonShape = "square" | "round";
const buttonStyle: {
  variant: ButtonVariant;
  color: ButtonColor;
  class: string;
}[] = [
  {
    variant: "filled",
    color: "primary",
    class:
      "bg-primary text-on-primary hover:bg-primary-hover active:bg-primary-active",
  },
  {
    variant: "filled",
    color: "secondary",
    class:
      "bg-secondary text-on-secondary hover:bg-secondary-hover active:bg-secondary-active",
  },
  {
    variant: "filled",
    color: "danger",
    class:
      "bg-danger text-on-danger hover:bg-danger-hover active:bg-danger-active",
  },
  {
    variant: "filled",
    color: "warning",
    class:
      "bg-warning text-on-warning hover:bg-warning-hover active:bg-warning-active",
  },
  {
    variant: "filled",
    color: "success",
    class:
      "bg-success text-on-success hover:bg-success-hover active:bg-success-active",
  },
  //Tonal
  {
    variant: "tonal",
    color: "primary",
    class:
      "bg-primary-container text-on-primary-container hover:bg-primary-container-hover active:bg-primary-conatiner-active",
  },
  {
    variant: "tonal",
    color: "secondary",
    class:
      "bg-secondary-container text-on-secondary-container hover:bg-secondary-container-hover active:bg-secondary-container-active",
  },
  //Outlined
  {
    variant: "outlined",
    color: "primary",
    class:
      "border border-primary text-primary hover:bg-primary/10 hover:border-primary/80 hover:shadow-sm active:bg-primary/20",
  },
  {
    variant: "outlined",
    color: "secondary",
    class: "border border-secondary text-secondary",
  },
  //Elevated
  {
    variant: "elevated",
    color: "primary",
    class: "bg-surface text-on-surface",
  },
  {
    variant: "elevated",
    color: "secondary",
    class: "bg-surface-dark text-on-surface-dark",
  },
  //Icon
  {
    variant: "icon",
    color: "primary",
    class: "bg-primary",
  },
  {
    variant: "icon",
    color: "secondary",
    class: "bg-secondary",
  },
  //Text
  {
    variant: "text",
    color: "primary",
    class: "bg-trasparent text-primary",
  },
  {
    variant: "text",
    color: "secondary",
    class: "bg-trasparent text-secondary",
  },
];

export const button = tv({
  base: "btn",
  variants: {
    shape: {
      round: "rounded-full",
      square: "",
    },
    variant: {
      filled: "active:translate-y-[1px] active:scale-[0.98] active:shadow-sm",
      tonal: "active:translate-y-[1px] active:scale-[0.98]",
      elevated:
        "shadow-md hover:shadow-lg active:shadow-sm active:bg-surface-active",
      outlined: "active:translate-y-[1px] active:scale-[0.98]",
      text: "hover:bg-primary/10 active:bg-primary/20 active:translate-y-[1px] active:scale-[0.98]",
      icon: "px-0! aspect-square flex justify-center items-center hover:bg-primary/90 active:bg-primary/80 active:translate-y-[1px] active:scale-[0.98]",
      fab: "",
    },
    color: {
      primary: "",
      secondary: "",
      warning: "",
      danger: "",
      success: "",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
  },
  compoundVariants: [
    ...buttonStyle,
    /*{
      variant: "filled",
      color: "primary",
      class: "bg-[var(--color-primary)] text-[var(--color-on-primary)]",
    },
    {
      variant: "tonal",
      color: "secondary",
      class: "bg-[#ddd6fe] text-[#4c1d95]",
    },
    {
      variant: "outlined",
      color: "primary",
      class: "border border-[var(--color-primary)] text-[var(--color-primary)]",
    },
    {
      variant: "elevated",
      color: "primary",
      class: "shadow-soft bg-[var(--background)] text-[var(--color-primary)]",
    },*/
    {
      variant: "icon",
      shape: "round",
      class: "px-0! aspect-square",
    },
    {
      shape: "square",
      size: "xs",
      class: "rounded-btn-xs",
    },
    {
      shape: "square",
      size: "sm",
      class: "rounded-btn-sm",
    },
    {
      shape: "square",
      size: "md",
      class: "rounded-btn-md",
    },
    {
      shape: "square",
      size: "lg",
      class: "rounded-btn-lg",
    },
    {
      shape: "square",
      size: "xl",
      class: "rounded-btn-xl",
    },

    // ... more
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "md",
  },
});
