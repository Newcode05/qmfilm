import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SearchProps } from "./search.type";
export const Search: React.FC<SearchProps> = ({
  searchBar,
  searchView,
  isOpen = false,
  ...props
}) => {
  return (
    <div className="relative h-[500px]" {...props}>
      <AnimatePresence>{!isOpen ? searchBar : searchView}</AnimatePresence>
    </div>
  );
};

