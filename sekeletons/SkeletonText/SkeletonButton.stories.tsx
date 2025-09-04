import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkeletonButton } from "./SkeletonButton";
export default {
  title: "Skeletons/SkeletonButton/SkeletonButton",
  component: SkeletonButton,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} as Meta<typeof SkeletonButton>;

type Story = StoryObj<typeof SkeletonButton>;
export const Default: Story = {
  args: {
    className: "",
    size: "md",
    label: "Button",
  },
};
