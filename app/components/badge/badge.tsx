import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { BadgeProps } from "./badge.type";
import { BadgeStyle } from "./badge.style";
import { formatBadge } from "@/app/utils/formatBadge";

export const Badge: React.FC<BadgeProps> = ({
  size,
  label = undefined,
  icon,
  anchorOrigin = {
    vertical: "top",
    horizontal: "left",
  },
  selected = false,
  ...props
}) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [badgeSize, setBadgeSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );
  useLayoutEffect(() => {
    if (badgeRef.current) {
      const rect = badgeRef.current.getBoundingClientRect();
      setBadgeSize({
        width: rect.width,
        height: rect.height,
      });
    }
  }, [label]);
  const offsetVertical = 14 - badgeSize.height;
  const offsetHorizontal = 12 - badgeSize.width;
  return (
    <div
      className={`relative flex justify-center items-center w-min-18px h-min-18px w-max h-max`}
    >
      <motion.div
        ref={badgeRef}
        className={BadgeStyle({
          color: "error",
          size,
        })}
        initial={false}
        animate={{
          scale: selected ? [1, 1.1] : [1.5, 1],
          opacity: selected ? 0 : 1,
          backgroundColor:
            size === "sm" ? (selected ? ["red", "transparent"] : "red") : "",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        style={
          size === "sm"
            ? {
                top: anchorOrigin.vertical === "top" ? "0px" : "",
                bottom: anchorOrigin.vertical === "bottom" ? "0px" : "",
                left: anchorOrigin.horizontal === "left" ? "0px" : "",
                right: anchorOrigin.horizontal === "right" ? "0px" : "",
              }
            : {
                top:
                  anchorOrigin.vertical === "top" ? offsetVertical + "px" : "",
                bottom:
                  anchorOrigin.vertical === "bottom"
                    ? offsetVertical + "px"
                    : "",
                left:
                  anchorOrigin.horizontal === "left"
                    ? offsetHorizontal + "px"
                    : "",
                right:
                  anchorOrigin.horizontal === "right"
                    ? offsetHorizontal + "px"
                    : "",
              }
        }
        {...props}
      >
        {size != "sm" ? (label ? formatBadge(label) : null) : null}
      </motion.div>
      {icon}
    </div>
  );
};
