import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavBar } from "./navigationBar";
import { Badge } from "../badge/badge";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EditIcon from "@mui/icons-material/Edit";
import { motion } from "framer-motion";
import { BadgeProps } from "../badge/badge.type";
import { usePathname } from "next/navigation";

export default {
  title: "Components/Nav Bar/Nav Bar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {
    navItem: {
      table: {
        disable: true,
      },
    },
    className: {
      control: "text",
    },
    classNameNavItem: {
      control: "text",
    },
    variant: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
} as Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;
export const TestNav = () => {
  const pathname = usePathname();
  const listItem = [
    {
      id: "/Home",
      label: "Email",
      path: "/email",
      active: pathname === "/email",
      badge: {
        icon: <EmailIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } as BadgeProps,
    },
    {
      id: "/Buy",
      label: "Message",
      path: "/message",
      active: false,
      badge: {
        icon: <EmailIcon />,
        size: "lg",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 9999,
      } as BadgeProps,
    },
    {
      id: "/Watch",
      label: "Folder",
      path: "/folder",
      active: false,
      badge: {
        icon: <EmailIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } as BadgeProps,
    },
    {
      id: "/User",
      label: "Edit",
      path: "/edit",
      active: false,
      badge: {
        icon: <EmailIcon />,
        size: "sm",
        anchorOrigin: { vertical: "top", horizontal: "right" },
        label: 999,
      } as BadgeProps,
    },
  ];
  return <NavBar listNavItem={listItem} variant="vertical" />;
};
export const New: Story = {
  args: {},
  render: () => {
    return <TestNav />;
  },
};
