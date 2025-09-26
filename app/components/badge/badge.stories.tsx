import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";
import EmailIcon from "@mui/icons-material/Email";
export default {
  title: "Components/Badge/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: ["success", "error"],
    },
    size: {
      control: "radio",
      options: ["sm", "lg"],
    },
    label: {
      control: "text",
    },
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  args: {
    color: "error",
    size: "lg",
    label: "9990",
    icon: <EmailIcon style={{ fontSize: "24px" }} />,
  },
  render: ({ label, ...args }) => {
    const formatValue =
      typeof label === "string" && !isNaN(Number(label))
        ? Number(label)
        : label;
    return <Badge label={formatValue} {...args} />;
  },
};
