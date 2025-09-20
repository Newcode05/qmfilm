import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonGroup } from "./buttonGroup";
import { ButtonIcon } from "../button icon/buttonIcon";
import { Button } from "../button/button";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";

import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

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
    shape: {
      control: "radio",
      options: ["round", "square"],
    },
  },
} as Meta<typeof ButtonGroup>;
type Story = StoryObj<typeof ButtonGroup>;
export const Default: Story = {
  args: {
    type: "connected",
    size: "sm",
  },
  render: ({ size, ...args }) => {
    return (
      <ButtonGroup
        size={size}
        {...args}
        children={
          <>
            <ButtonIcon
              shape="round"
              width="wide"
              size={size}
              icon={<FastRewindIcon />}
              className="bg-primary-container text-on-primary-container"
            />
            <Button
              variant="tonal"
              shape="round"
              size={size}
              label="Play"
              startIcon={<PlayArrowIcon style={{ color: "inherit" }} />}
            />
            <ButtonIcon
              shape="round"
              width="wide"
              size={size}
              icon={<FastForwardIcon />}
              className="bg-primary-container text-on-primary-container"
            />
          </>
        }
      />
    );
  },
};
export const MultiSelected: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = React.useState<boolean[]>([
      false,
      false,
      false,
    ]);
    const handleClick = (i: number) => {
      setSelected((prev) => {
        const newSelected = [...prev]; // tạo bản sao
        newSelected[i] = !newSelected[i]; // toggle vị trí i
        return newSelected; // cập nhật state
      });
    };
    return (
      <ButtonGroup
        children={
          <>
            <ButtonIcon
              shape="square"
              color={selected[0] ? "tonal" : "outlined"}
              icon={<WifiIcon style={{ color: "inherit" }} />}
              selected={selected[0]}
              onClick={() => handleClick(0)}
            />
            <ButtonIcon
              shape="square"
              color={selected[1] ? "tonal" : "outlined"}
              icon={<BluetoothIcon style={{ color: "inherit" }} />}
              selected={selected[1]}
              onClick={() => handleClick(1)}
            />
            <ButtonIcon
              shape="square"
              color={selected[2] ? "tonal" : "outlined"}
              icon={<FlightTakeoffIcon style={{ color: "inherit" }} />}
              selected={selected[2]}
              onClick={() => handleClick(2)}
            />
          </>
        }
      />
    );
  },
};
