import { tv } from "tailwind-variants";
export const searchBarStyle = tv({
  base: "search-bar",
  variants: {
    color: {
      container:
        "bg-surface-container-high text-search-bar text-on-surface hover:before:bg-on-surface",
    },
  },
});
