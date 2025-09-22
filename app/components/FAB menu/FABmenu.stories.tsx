import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FABMenu } from "./FABmenu";
import { Fab } from "../FAB/fab";
import { Button } from "../button/button";

import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonIcon } from "../button icon/buttonIcon";

export default {
  title: "Components/FAB Menu/ FAB Menu",
  component: FABMenu,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
  },
} as Meta<typeof FABMenu>;

type Story = StoryObj<typeof FABMenu>;

export const Default: Story = {
  args: {},
  render: ({ color = "primary", ...args }) => {
    const [selected, setSelected] = React.useState<boolean>(false);
    return (
      <FABMenu
        listitem={
          <>
            <Button
              shape="round"
              size="md"
              startIcon={<EmailIcon />}
              label="Document"
              layout
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: selected ? 1 : 0, x: selected ? 0 : 100 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`${
                color === "primary"
                  ? "bg-primary-container text-on-primary-container"
                  : color === "secondary"
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-tertiary-container text-on-tertiary-container"
              }`}
            />
            <Button
              shape="round"
              size="md"
              startIcon={<MessageIcon />}
              label="Message"
              layout
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: selected ? 1 : 0, x: selected ? 0 : 120 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`${
                color === "primary"
                  ? "bg-primary-container text-on-primary-container"
                  : color === "secondary"
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-tertiary-container text-on-tertiary-container"
              }`}
            />
            <Button
              shape="round"
              size="md"
              startIcon={<FolderSharedIcon />}
              label="Folder"
              layout
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: selected ? 1 : 0, x: selected ? 0 : 150 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className={`${
                color === "primary"
                  ? "bg-primary-container text-on-primary-container"
                  : color === "secondary"
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-tertiary-container text-on-tertiary-container"
              }`}
            />
          </>
        }
        fab={
          selected ? (
            <ButtonIcon
              layoutId="button"
              key="fab"
              layout
              shape="round"
              size="md"
              icon={<CloseIcon />}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              onClick={() => setSelected(false)}
              className={`w-max ${
                color == "primary"
                  ? "bg-primary text-on-primary"
                  : color === "secondary"
                  ? "bg-secondary text-on-secondary"
                  : "bg-tertiary text-on-tertiary"
              }`}
            />
          ) : (
            <Fab
              layoutId="button"
              key="fab"
              layout
              size="md"
              color={color}
              icon={<EditIcon style={{ color: "inherit" }} />}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              onClick={() => setSelected(true)}
            />
          )
        }
      />
    );
  },
};
