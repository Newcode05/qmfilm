import React, { HTMLAttributes } from "react";

export type SearchProps = HTMLAttributes<HTMLDivElement> & {
  searchBar?: React.ReactNode;
  searchView?: React.ReactNode;
  isOpen?: boolean;
};
