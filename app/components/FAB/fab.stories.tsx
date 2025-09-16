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
    size: "sm",
    color: "tertiary-container",
    label: "Note",
  },
  render: ({ size = "sm", ...args }) => {
    const iconSizes = { sm: "24px", md: "28px", lg: "36px" };
    return (
      <Fab
        size={size}
        {...args}
        icon={
          <CreateIcon
            style={{ width: iconSizes[size], height: iconSizes[size] }}
          />
        }
      />
    );
  },
};
export const Extended: Story = {
  args: {
    variant: "extended",
    icon: <CreateIcon style={{ width: "", height: "" }} />,
    size: "sm",
    color: "primary-container",
    label: "Compose",
  },
  render: ({ size = "sm", ...args }) => {
    const iconSizes = { sm: "24px", md: "28px", lg: "36px" };
    return (
      <Fab
        size={size}
        {...args}
        icon={
          <CreateIcon
            style={{ width: iconSizes[size], height: iconSizes[size] }}
          />
        }
      />
    );
  },
};
