import React, { forwardRef } from "react";

import { SearchBarProps } from "./SearchBar.type";
import { searchBar } from "./SearchBar.variant";
import { useRipple } from "@/app/hooks/ripple/useRipple";
import { megerRef } from "@/app/utils/mergerRef";

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  (props, ref) => {
    const { containerRef, createRipple } = useRipple<HTMLDivElement>(
      5,
      "bg-on-surface opacity-[0.1]"
    );
    const {
      color = "container",
      leadingIcon,
      trailingIcon,
      className,
      onClick = () => {},
      ...prop
    } = props;
    return (
      <div
        ref={megerRef(containerRef, ref)}
        role="combobox"
        aria-haspopup="listbox"
        aria-owns="search-suggestions"
        aria-expanded="false"
        className={`${searchBar({ color })} ${className}`}
        onClick={(e) => {
          createRipple(e.nativeEvent), onClick(e);
        }}
        {...prop}
      >
        {leadingIcon}
        <input
          type="text"
          placeholder="Search bar"
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-activedescendant="item-1"
          className="outline-none text-body-large text-on-surface placeholder-on-surface-variant focus:none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
        />
        {trailingIcon}
      </div>
    );
  }
);
