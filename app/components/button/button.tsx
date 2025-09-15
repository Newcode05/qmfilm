"use client";

import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./button.type";
import { button } from "./button.style";

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "filled",
  shape = "square",
  color = "primary",
  size = "md",
  label = "Button",
  startIcon,
  endIcon,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <motion.button
      className={button({ variant, shape, color, size, className })}
      disabled={loading || disabled}
      aria-label={variant === "icon" ? label : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {startIcon}
      {variant !== "icon" ? label : null}
      {endIcon}
    </motion.button>
  );
};
