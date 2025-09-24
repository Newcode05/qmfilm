import { tv } from "tailwind-variants";

export const CheckBoxStyle = tv({
  base: "checkbox",
  variants: {
    variant: {
      primary: "",
      error: "",
    },
    selected: {
      true: "outline-none",
      false: "outline-[2px] text-on-surface group-hover:before:bg-on-surface",
    },
    indeterminate: {
      true: "outline-none",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      selected: true,
      class:
        "bg-primary text-on-primary group-hover:before:bg-primary has-[:focus]:before:bg-primary",
    },
    {
      variant: "primary",
      selected: false,
      class: "outline-on-surface-variant",
    },
    {
      variant: "error",
      selected: true,
      class:
        "bg-error text-on-error group-hover:before:bg-error has-[:focus]:before:bg-error",
    },
    {
      variant: "error",
      selected: false,
      class: "outline-error text-on-error",
    },
    {
      variant: "primary",
      indeterminate: true,
      class:
        "bg-primary text-on-primary group-hover:before:bg-primary has-[:focus]:before:bg-primary",
    },
    {
      variant: "error",
      indeterminate: true,
      class:
        "bg-error text-on-error group-hover:before:bg-error has-[:focus]:before:bg-error",
    },
  ],
});
