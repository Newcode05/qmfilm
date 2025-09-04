import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "./search";

export default {
  title: "Components/Search/Search",
  component: Search,
  tags: ["autodocs"],
} as Meta<typeof Search>;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};
