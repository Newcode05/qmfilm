"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NavBar } from "../components/navigation bar/navigationBar";
import { BadgeProps } from "../components/badge/badge.type";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EditIcon from "@mui/icons-material/Edit";

export default function TestNav() {
  const pathname = usePathname();
  const listItem = [
    {
      id: "/Home",
      label: "Email",
      path: "/test/email",
      active: pathname === "/test/email",
      badge: {
        icon: <EmailIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } satisfies BadgeProps,
    },
    {
      id: "/Buy",
      label: "Message",
      path: "/test/message",
      active: pathname === "/test/message",
      badge: {
        icon: <MessageIcon />,
        size: "lg",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 9999,
      } satisfies BadgeProps,
    },
    {
      id: "/Watch",
      label: "Folder",
      path: "/test/folder",
      active: pathname === "/test/folder",
      badge: {
        icon: <FolderSharedIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } satisfies BadgeProps,
    },
    {
      id: "/User",
      label: "Edit",
      path: "/test/edit",
      active: pathname === "/test/edit",
      badge: {
        icon: <EditIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } satisfies BadgeProps,
    },
  ];
  return <NavBar listNavItem={listItem} variant="vertical" />;
}
