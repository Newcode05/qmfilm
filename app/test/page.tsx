"use client";
import React from "react";
import { NavBar } from "../components/navigation bar/navigationBar";
import { Badge } from "../components/badge/badge";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EditIcon from "@mui/icons-material/Edit";
/*export default function TestNav({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = React.useState<string | number>("Home");
  const listItem = [
    {
      id: "/Home",
      icon: (
        <Badge
          icon={<EmailIcon />}
          size="sm"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          selected={selectedId === "Home"}
        />
      ),
      label: "Email",
      path: "/email",
    },
    {
      id: "/Buy",
      icon: (
        <Badge
          icon={<MessageIcon />}
          size="lg"
          label={1000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          selected={selectedId === "/test/buy"}
        ></Badge>
      ),
      label: "Message",
      path: "/message",
    },
    {
      id: "/Watch",
      icon: <FolderSharedIcon />,
      label: "Folder",
      path: "/folder",
    },
    { id: "/User", icon: <EditIcon />, label: "Edit", path: "/edit" },
  ];
  return (
    <div className="w-[800px] h-[600px]">
      {children}
      <NavBar
        navItem={listItem}
        variant="vertical"
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}*/
export default function Test() {
  return <div>Hi</div>;
}
