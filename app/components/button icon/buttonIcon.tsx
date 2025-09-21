import React from "react";
import { motion } from "framer-motion";

import { ButtonIconProps } from "./buttonIcon.type";
import { buttonIconStyle } from "./buttonIcon.style";

import { buttonVariants } from "./buttonIcon.style";
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
      custom={{ shape, size }}
      variants={buttonVariants}
      initial={false}
      animate={selected ? "selected" : "normal"}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      {...props}
    >
      {icon}
    </motion.button>
  );
};
