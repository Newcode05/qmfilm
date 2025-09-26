import { tv } from "tailwind-variants";

export const BadgeStyle = tv({
  base: "absolute flex justify-start items-center text-[11px] leading-[16px] tracking-[0.5px] font-semibold select-none",
  variants: {
    variant: {},
    color: {
      error: "bg-error text-on-error",
    },
    size: {
      sm: "w-[6px] h-[6px] rounded-[50%]",
      lg: "p-[4px] h-[16px] w-max min-w-[16px] max-w-[34px] rounded-[8px]",
    },
  },
});
