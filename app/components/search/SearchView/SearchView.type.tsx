import { HTMLMotionProps } from "framer-motion";
import { VariantProps } from "tailwind-variants";
import { searchViewStyle } from "./SearchView.style";

type SearchViewVariant = VariantProps<typeof searchViewStyle>;

export type SearchViewProps = Omit<HTMLMotionProps<"div">, "drag"> &
  SearchViewVariant & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
  };
