"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { NavBarProps } from "./navigationBar.type";
import { NavBarStyle } from "./navigationBar.style";

export const NavBar: React.FC<NavBarProps> = ({
  className = "",
  classNameNavItem = "",
  variant = "vertical",
  navItem = [],
  ...props
}) => {
  const [selected, setSelected] = useState<string>(navItem[0].id);
  return (
    <div
      className={NavBarStyle({ variant, role: "container", className })}
      {...props}
    >
      {navItem.length > 0
        ? navItem.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex justify-center items-center"
            >
              <div
                className={NavBarStyle({
                  variant,
                  role: "navItem",
                  selected: selected === item.id,
                  className: classNameNavItem,
                })}
                onClick={() => setSelected(item.id)}
              >
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: selected === item.id ? 1 : 0,
                    opacity: selected === item.id ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 20,
                  }}
                  className={NavBarStyle({
                    variant,
                    role: "indicatorActive",
                  })}
                ></motion.div>
                <div
                  className={` ${
                    selected === item.id
                      ? "group-hover:bg-transparent"
                      : "group-hover:bg-secondary-container"
                  } ${NavBarStyle({ variant, role: "statelayer" })}`}
                ></div>
                <div
                  className={NavBarStyle({ variant, role: "iconContainer" })}
                >
                  {item.icon}
                </div>
                <span
                  className={NavBarStyle({
                    variant,
                    role: "label",
                    selected: selected === item.id,
                  })}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
