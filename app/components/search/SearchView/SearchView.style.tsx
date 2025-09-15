import { tv } from "tailwind-variants";
export const searchViewStyle = tv({
  base: "",
  variants: {
    role: {
      container: "search-view",
      header:
        "px-[16px] pt-[16px] h-[56px] flex flex-row gap-[16px] text-on-surface items-start",
      input: "outline-none flex-1 text-body-large text-on-surface",
      divided: "h-[1px] bg-outline border-none",
    },
    color: {
      none: "",
      surface: "bg-surface-container-high",
    },
  },
});
