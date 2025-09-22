import { tv } from "tailwind-variants";

export const CardStyle = tv({
  base: "rounded-md",
  variants: {
    variant: {
      elevated: "bg-surface-container-low shadow-elevation1",
      filled: "bg-surface-container-highest",
      outlined: "bg-surface",
    },
  },
});
