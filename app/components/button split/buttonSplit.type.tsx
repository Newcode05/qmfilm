import { VariantProps } from "tailwind-variants";
import { HTMLMotionProps } from "framer-motion";
import { buttonSplitStyle } from "./buttonSplit.style";

type ButtonSplitVariant = VariantProps<typeof buttonSplitStyle>;
export type ButtonSplitProps = HTMLMotionProps<"div"> &
  ButtonSplitVariant & {
    childern?: React.ReactNode;
  };
