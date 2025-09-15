import { HTMLMotionProps } from "framer-motion";
import { VariantProps } from "tailwind-variants";
import { searchBarStyle } from "./SearchBar.style";

type searchBarVariant = VariantProps<typeof searchBarStyle>;
export type SearchBarProps = Omit<HTMLMotionProps<"div">, "drag"> &
  searchBarVariant & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
  };
