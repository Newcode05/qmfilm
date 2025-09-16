import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonGroup } from "./buttonGroup";

export default {
  title: "Components/Button Group/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["standard", "connected"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as Meta<typeof ButtonGroup>;
type Story = StoryObj<typeof ButtonGroup>;
export const Default: Story = {
  args: {
    type: "standard",
    size: "sm",
  },
};
