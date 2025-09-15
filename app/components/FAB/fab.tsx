import React from "react";
import { forwardRef } from "react";

import { FabProps } from "./fab.type";

import { fab } from "./fab.style";
import { ripple } from "./fab.style";

import { useRipple } from "@/app/hooks/ripple/useRipple";
import { megerRef } from "@/app/utils/mergerRef";

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  (
    {
      className = "",
      variant = "default",
      color = "primary",
      size = "md",
      label = "Note",
      icon,
      ...props
    },
    ref
  ) => {
    const { containerRef, createRipple } = useRipple<HTMLButtonElement>(
      5,
      ripple({ color })
    );
    return (
      <button
        aria-label={label}
        ref={megerRef(containerRef, ref)}
        className={fab({ variant, size, color, className })}
        onClick={(e) => createRipple(e.nativeEvent)}
        style={{ position: "relative", overflow: "hidden" }}
        {...props}
      >
        {icon}
        {variant === "extended" ? label : ""}
      </button>
    );
  }
);
