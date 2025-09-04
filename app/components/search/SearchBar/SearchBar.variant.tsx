import { tv } from "tailwind-variants";

export const searchBar = tv({
  base: `
    search-bar
    relative
    overflow:hidden
    before:content-['']
    before:absolute 
    before:inset-0 before:rounded-[40px]
    before:bg-transparent
    before:pointer-events-none
    hover:before:bg-on-surface
    hover:before:opacity-[0.08]
  `,
  variants: {
    color: {
      container: "bg-surface-container-high text-search-bar text-on-surface",
    },
  },
});
