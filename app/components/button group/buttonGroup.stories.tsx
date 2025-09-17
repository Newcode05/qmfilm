import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonGroup } from "./buttonGroup";
import { ButtonIcon } from "../button icon/buttonIcon";
import { Button } from "../button/button";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
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
        childern={
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
