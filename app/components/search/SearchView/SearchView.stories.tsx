import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchView } from "./SearchView";

export default {
  title: "Components/Search/SearchView",
  component: SearchView,
} as Meta<typeof SearchView>;

type Story = StoryObj<typeof SearchView>;

export const Default: Story = {
  args: {},
};
