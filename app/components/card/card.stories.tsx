import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./card";

export default {
  title: "Components/Card/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Card>;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
