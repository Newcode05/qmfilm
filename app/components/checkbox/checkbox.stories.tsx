import { useState } from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CheckBox } from "./checkbox";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";

export default {
  title: "Components/CheckBox/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "error"],
    },
    disabled: {
      control: "boolean",
      options: [true, false],
    },
    defaultChecked: {
      control: "boolean",
      options: [true, false],
    },
    checked: {
      table: { disable: true },
    },
    indeterminate: {
      control: "boolean",
      options: [true, false],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    indeterminateIcon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;
export const Default: Story = {
  args: {
    checkedIcon: <CheckIcon style={{ fontSize: "18px", zIndex: "10" }} />,
    indeterminateIcon: (
      <RemoveIcon style={{ fontSize: "18px", zIndex: "10" }} />
    ),
    indeterminate: false,
    disabled: false,
    variant: "primary",
  },
};
export const Parent: Story = {
  args: {
    variant: "primary",
    label: "",
    defaultChecked: false
  },
  render: ({ variant }) => {
    const [selected, setSelected] = useState<boolean>(false);
    const [indeterminate, setIndeterminate] = useState<boolean>(true);
    const handleChange = () => {
      if (indeterminate) {
        setIndeterminate(false);
        setSelected(true);
      } else {
        setSelected((prev) => !prev);
      }
    };
    return (
      <CheckBox
        variant={variant}
        checked={selected}
        indeterminate={indeterminate}
        checkedIcon={<CheckIcon style={{ fontSize: "18px", zIndex: "10" }} />}
        indeterminateIcon={
          <RemoveIcon style={{ fontSize: "18px", zIndex: "10" }} />
        }
        onChange={() => handleChange()}
      />
    );
  },
};
