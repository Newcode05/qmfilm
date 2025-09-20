import React from "react";
import { motion } from "framer-motion";

import { ButtonIconProps } from "./buttonIcon.type";
import { buttonIconStyle } from "./buttonIcon.style";

import { buttonMotionVariants } from "./buttonIcon.style";
export const ButtonIcon: React.FC<ButtonIconProps> = ({
  shape = "round",
  width = "default",
  size = "sm",
  color = "filled",
  loading = false,
  selected = false,
  icon,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      layout
      className={buttonIconStyle({
        shape,
        width,
        size,
        selected,
        color,
        className,
      })}
      initial={{ borderRadius: "12px" }}
      animate={{
        scale: selected ? 1.2 : 1,
        borderRadius: selected
          ? shape === "square"
            ? "50%"
            : size === "xs"
            ? "12px"
            : size === "sm"
            ? "12px"
            : size === "md"
            ? "16px"
            : "28px"
          : shape === "round"
          ? "50%"
          : size === "xs"
          ? "12px"
          : size === "sm"
          ? "12px"
          : size === "md"
          ? "16px"
          : "28px",
      }}
      {...props}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 20,
      }}
    >
      {icon}
    </motion.button>
  );
};
