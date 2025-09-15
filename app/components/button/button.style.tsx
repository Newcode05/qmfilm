import { tv } from "tailwind-variants";

type ButtonVariant =
  | "filled"
  | "tonal"
  | "outlined"
  | "elevated"
  | "icon"
  | "text";
type ButtonColor = "primary" | "secondary" | "success" | "warning" | "danger";
const buttonStyle: {
  variant: ButtonVariant;
  color: ButtonColor;
  class: string;
}[] = [
  {
    variant: "filled",
    color: "primary",
    class:
      "bg-primary text-on-primary hover:before:bg-on-primary active:before:bg-on-primary focus-visible:before:bg-on-primary",
  },
  {
    variant: "filled",
    color: "secondary",
    class:
      "bg-secondary text-on-secondary hover:before:bg-on-secondary active:before:bg-on-secondary focus-visible:before:bg-on-secondary",
  },
  {
    variant: "filled",
    color: "danger",
    class:
      "bg-danger text-on-danger hover:before:bg-on-danger active:before:bg-on-danger focus-visible:before:bg-on-danger",
  },
  {
    variant: "filled",
    color: "warning",
    class:
      "bg-warning text-on-warning hover:before:bg-on-warning active:before:bg-on-warning focus-visible:before:bg-on-warning",
  },
  {
    variant: "filled",
    color: "success",
    class:
      "bg-success text-on-success hover:before:bg-on-success active:before:bg-on-success focus-visible:before:bg-on-success",
  },
  //Tonal
  {
    variant: "tonal",
    color: "primary",
    class:
      "bg-primary-container text-on-primary-container hover:before:bg-on-primary-container active:before:bg-on-primary-container focus-visible:before:bg-on-primary-container",
  },
  {
    variant: "tonal",
    color: "secondary",
    class:
      "bg-secondary-container text-on-secondary-container hover:before:bg-on-secondary-container active:before:bg-on-secondary-container focus-visible:before:bg-on-secondary-container",
  },
  //Outlined
  {
    variant: "outlined",
    color: "primary",
    class:
      "border border-primary text-primary hover:before:bg-on-primary active:before:bg-on-primary",
  },
  {
    variant: "outlined",
    color: "secondary",
    class:
      "border border-secondary text-secondary hover:before:bg-on-primary active:before:bg-on-primary",
  },
  //Elevated
  {
    variant: "elevated",
    color: "primary",
    class:
      "bg-surface text-on-surface shadow-elevation1 hover:before:bg-on-surface active:before:bg-on-surface",
  },
  {
    variant: "elevated",
    color: "secondary",
    class:
      "bg-surface-dark text-on-surface-dark shadow-elevation1 hover:before:bg-on-surface active:before:bg-on-surface",
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
      filled:
        "hover:before:bg-on-primary active:before:bg-on-primary focus-visible:before:bg-on-primary",
      tonal: "",
      elevated: "",
      outlined: "",
      text: "text-on-primary hover:bg-on-primary active:bg-on-primary",
      icon: "px-0! aspect-square flex justify-center items-center hover:before:bg-on-primary active:before:bg-on-primary",
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
