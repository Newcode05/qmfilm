import { tv } from "tailwind-variants";

export const FABMenuStyle = tv({
  base: "",
  variants: {
    role: {
      container: "flex flex-col gap-[8px]",
      listitem:
        "relative flex flex-col items-end gap-[4px]",
      fab: "h-[56px] flex flex-row justify-end",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
  },
});
