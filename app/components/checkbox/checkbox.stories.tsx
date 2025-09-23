import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckBox } from "./checkbox";
import CheckIcon from "@mui/icons-material/Check";

export default {
  title: "Components/CheckBox/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "object",
    },
  },
} as Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;
export const Default: Story = {
  args: {
    icon: <CheckIcon style={{ fontSize: "18px" }} />,
  },
};
