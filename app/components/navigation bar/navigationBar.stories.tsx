import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavBar } from "./navigationBar";

import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EditIcon from "@mui/icons-material/Edit";

export default {
  title: "Components/Nav Bar/Nav Bar",
  component: NavBar,
} as Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {},
  render: () => {
    const listItem = [
      { id: "Home", icon: <EmailIcon />, label: "Email" },
      { id: "Buy", icon: <MessageIcon />, label: "Message" },
      { id: "Watch", icon: <FolderSharedIcon />, label: "Folder" },
      { id: "User", icon: <EditIcon />, label: "Edit" },
    ];
    return <NavBar navItem={listItem} />;
  },
};
