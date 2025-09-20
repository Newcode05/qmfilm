import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonIcon } from "./buttonIcon";
import SettingsIcon from "@mui/icons-material/Settings";

export default {
  title: "Components/Button Icon/Button Icon",
  component: ButtonIcon,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: "radio",
      options: ["round", "square"],
    },
    width: {
      control: "radio",
      options: ["narrow", "default", "wide"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "radio",
      options: ["filled", "tonal", "outlined", "standard"],
    },
  },
} as Meta<typeof ButtonIcon>;
type Story = StoryObj<typeof ButtonIcon>;
export const Default: Story = {
  args: {
    shape: "square",
    width: "default",
    size: "sm",
    color: "outlined",
  },
  render: ({ size = "md", ...args }) => {
    const iconSizes = { xs: "20px", sm: "24px", md: "24px", lg: "32px" };
    return (
      <ButtonIcon
        size={size}
        icon={
          <SettingsIcon
            style={{ width: iconSizes[size], height: iconSizes[size] }}
          />
        }
        {...args}
      />
    );
  },
};
