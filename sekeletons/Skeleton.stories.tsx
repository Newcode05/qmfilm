import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";
export default {
  title: "Skeletons/Base",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
    rounded: {
      control: "text",
    },
  },
} as Meta<typeof Skeleton>;
type Story = StoryObj<typeof Skeleton>;
export const Default: Story = {
  args: {
    className: "",
    width: "w-[150px]",
    height: "h-[50px]",
    rounded: "rounded-[10px]",
  },
};
