import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { NavBarStyle } from "./navigationBar.style";
import { navItem } from "./navigationBar.type";
import { Badge } from "../badge/badge";

type NavItemProps = navItem;
export const NavItem: React.FC<NavItemProps> = (props) => {
  const { selected, ...badge } = props.badge;
  return (
    <Link
      href={props.path}
      className="block flex-1 flex justify-center items-center"
    >
      <div
        className={NavBarStyle({
          variant: "vertical",
          role: "navItem",
          selected: props.active,
        })}
      >
        <motion.div
          initial={false}
          animate={{
            scaleX: props.active ? 1 : 0,
            opacity: props.active ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 20,
          }}
          className={NavBarStyle({
            variant: "vertical",
            role: "indicatorActive",
          })}
        ></motion.div>
        <div
          className={` ${
            props.active
              ? "group-hover:bg-transparent"
              : "group-hover:bg-secondary-container"
          } ${NavBarStyle({ variant: "vertical", role: "statelayer" })}`}
        ></div>
        <div
          className={NavBarStyle({
            variant: "vertical",
            role: "iconContainer",
          })}
        >
          <Badge {...badge} selected={props.active} />
        </div>
        <span
          className={NavBarStyle({
            variant: "vertical",
            role: "label",
            selected: props.active,
          })}
        >
          {props.label}
        </span>
      </div>
    </Link>
  );
};
