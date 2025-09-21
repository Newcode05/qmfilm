import React from "react";
import { motion } from "framer-motion";
import { ButtonSplitProps } from "./buttonSplit.type";
import { buttonSplitStyle } from "./buttonSplit.style";

export const ButtonSplit: React.FC<ButtonSplitProps> = ({
  size = "sm",
  color = "tonal",
  className = "",
  childern,
  ...props
}) => {
  return (
    <motion.div
      className={buttonSplitStyle({ size, color, className })}
      {...props}
    >
      {childern}
    </motion.div>
  );
};
