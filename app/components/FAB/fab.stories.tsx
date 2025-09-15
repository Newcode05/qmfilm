import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Fab } from "./fab";
import CreateIcon from "@mui/icons-material/Create";

export default {
  title: "Components/FAB/FAB",
  component: Fab,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "extended"],
    },
    color: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "primary-container",
        "secondary-container",
        "tertiary-container",
      ],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
} as Meta<typeof Fab>;

type Story = StoryObj<typeof Fab>;
export const Default: Story = {
  args: {
    variant: "default",
    icon: <CreateIcon style={{ color: "inherit", fontSize: "inherit" }} />,
    size: "sm",
    color: "primary-container",
    label: "Note",
  },
};
export const Extended: Story = {
  args: {
    variant: "extended",
    icon: <CreateIcon style={{ color: "inherit" }} />,
    size: "sm",
    color: "primary-container",
    label: "Compose",
  },
};
