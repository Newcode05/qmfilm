import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchView } from "./SearchView/SearchView";
import { useTransitionContainer } from "@/app/hooks/transitionContainer/useTransitionContainer";

export const Search = () => {
  const { originRef, targetRef, isOpen, isExtend, open, close, overlayNode } =
    useTransitionContainer();

  return (
    <div className="relative h-[500px]">
      <SearchBar
        ref={originRef}
        onClick={open}
        className={`${isOpen ? "opacity-0" : "opacity-100"}`}
      />

      <SearchView
        ref={targetRef}
        className={`${
          isExtend ? "fade-enter-active" : "fade-enter"
        } pointer-events-none fade`}
      />

    </div>
  );
};
