import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FabProps } from "./fab.type";
import { fabStyle } from "./fab.style";
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
      onClick = () => {},
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
      <motion.button
        aria-label={label}
        ref={megerRef(containerRef, ref)}
        className={fabStyle({ variant, size, color, className })}
        onClick={(e) => {
          createRipple(e.nativeEvent);
          onClick(e);
        }}
        style={{ position: "relative", overflow: "hidden" }}
        {...props}
      >
        {icon}
        {variant === "extended" ? label : ""}
      </motion.button>
    );
  }
);
