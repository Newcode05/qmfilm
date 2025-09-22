import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FABMenuStyle } from "./FABmenu.style";
import { FABMenuProps } from "./FABmenu.type";

export const FABMenu: React.FC<FABMenuProps> = ({
  color = "primary",
  className = "",
  listitem,
  fab,
  ...props
}) => {
  return (
    <motion.div
      className={FABMenuStyle({ role: "container", color, className })}
      {...props}
    >
      <div className={FABMenuStyle({ role: "listitem" })}>{listitem}</div>
      <div className={FABMenuStyle({ role: "fab" })}>
        <AnimatePresence>{fab}</AnimatePresence>
      </div>
    </motion.div>
  );
};
