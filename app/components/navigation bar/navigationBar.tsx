"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { NavBarProps } from "./navigationBar.type";
import { NavBarStyle } from "./navigationBar.style";

export const NavBar: React.FC<NavBarProps> = ({
  className = "",
  variant = "vertical",
  navItem = [],
  ...props
}) => {
  const [selected, setSelected] = useState<string>(navItem[0].id);
  return (
    <div
      className="py-[6px] w-[450px] h-[64px] flex flex-row justify-center bg-surface-variant cursor-pointer rounded-full"
      {...props}
    >
      {navItem.length > 0
        ? variant === "vertical"
          ? navItem.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex justify-center items-center"
              >
                <div
                  className="relative w-[56px] h-max flex flex-col items-center gap-[4px]"
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
                    className="absolute w-[56px] h-[32px] l-0 t-0 rounded-md z-[0] bg-secondary-container"
                  ></motion.div>
                  <div
                    key={index}
                    className={`
                    ${
                      selected === item.id
                        ? "w-[56px] h-[32px] rounded-md text-on-secondary-container"
                        : "w-[56px] h-[32px] bg-transparent rounded-md text-on-surface-variant"
                    } flex justify-center items-center z-[10]
                    `}
                  >
                    {item.icon}
                  </div>
                  <div
                    key={index}
                    className={`
                    ${
                      selected === item.id
                        ? "w-max h-max text-on-secondary-container"
                        : "w-max h-max text-on-surface-variant"
                    } flex justify-center items-center text-[12px] select-none text-semibold`}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            ))
          : navItem.map((item, index) => (
              <div
                className="w-[30px] rounded-[20px] flex flex-row gap-[4px] items-center"
                onClick={() => setSelected(item.id)}
              >
                <div
                  key={index}
                  className={
                    selected === item.id
                      ? "text-on-secondary-container"
                      : "text-on-surface-variant"
                  }
                >
                  {item.icon}
                </div>
                <div
                  key={index}
                  className={
                    selected === item.id
                      ? "text-on-secondary"
                      : "text-on-surface-variant"
                  }
                >
                  {item.label}
                </div>
              </div>
            ))
        : null}
    </div>
  );
};
