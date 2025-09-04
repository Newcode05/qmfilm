import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["filled", "outlined", "elevated", "tonal", "icon", "text"],
    },
    shape: {
      control: "radio",
      options: ["square", "round"],
    },
    color: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
      options: [true, false],
    },
  },
  decorators: [
    (Story, context) => {
      // dynamic filter color options
      if (context.argTypes && context.argTypes.color) {
        context.argTypes.color.options =
          context.args.variant === "filled"
            ? ["primary", "secondary", "danger", "success", "warning"]
            : ["primary", "secondary"];
      }

      return <Story {...context.args} />;
    },
  ],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    size: "sm",
    label: "Button",
    shape: "round",
    color: "secondary",
    loading: false,
  },
};

export const Oulined: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    label: "Button",
    color: "primary",
    shape: "round",
  },
};
export const Tonal: Story = {
  args: {
    variant: "tonal",
    size: "sm",
    label: "Button",
    shape: "round",
    color: "primary",
    loading: false,
  },
};
export const Icon: Story = {
  args: {
    variant: "icon",
    size: "sm",
    shape: "round",
    color: "primary",
    startIcon: (
      <FontAwesomeIcon
        icon={faCarSide}
        style={{ color: "white", fontSize: "16px" }}
      />
    ),
  },
};
export const Elevated: Story = {
  args: {
    variant: "elevated",
    size: "sm",
    label: "Button",
    shape: "round",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "sm",
    label: "Button",
    shape: "round",
    color: "primary",
  },
};
