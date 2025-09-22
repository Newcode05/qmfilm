import { tv } from "tailwind-variants";

export const CardStyle = tv({
  base: "card",
  variants: {
    variant: {
      filled:
        "bg-surface-container-highest hover:before:bg-on-surface active:before:bg-on-surface",
      elevated:
        "bg-surface-container-low shadow-elevation1 hover:before:bg-on-surface active:before:bg-on-surface",
      outlined:
        "bg-surface hover:before:bg-on-surface active:before:bg-on-surface",
    },
  },
});
