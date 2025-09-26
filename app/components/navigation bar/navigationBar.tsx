"use client";

import React from "react";
import { NavBarProps } from "./navigationBar.type";
import { NavBarStyle } from "./navigationBar.style";
import { NavItem } from "./navigationItem";

export const NavBar: React.FC<NavBarProps> = ({
  className = "",
  classNameNavItem = "",
  variant = "vertical",
  listNavItem = [],
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      className={NavBarStyle({ variant, role: "container", className })}
      {...props}
    >
      {listNavItem.length > 0
        ? listNavItem.map((item, index) => <NavItem key={index} {...item} />)
        : null}
    </div>
  );
};
