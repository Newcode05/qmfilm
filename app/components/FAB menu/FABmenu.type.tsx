import { VariantProps } from "tailwind-variants";
import { FABMenuStyle } from "./FABmenu.style";
import { HTMLMotionProps } from "framer-motion";

type FABMenuVariant = VariantProps<typeof FABMenuStyle>;
export type FABMenuProps = HTMLMotionProps<"div"> &
  FABMenuVariant & {
    listitem: React.ReactNode;
    fab: React.ReactNode;
  };
