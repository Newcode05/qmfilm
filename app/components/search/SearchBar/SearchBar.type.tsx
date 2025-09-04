import { HTMLAttributes } from "react";
import { VariantProps } from "tailwind-variants";
import { searchBar } from "./SearchBar.variant";

type searchBarVariant = VariantProps<typeof searchBar>;
export type SearchBarProps = HTMLAttributes<HTMLDivElement> &
  searchBarVariant & {
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
  };
