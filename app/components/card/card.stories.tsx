import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./card";

import { Button } from "../button/button";
import { ButtonIcon } from "../button icon/buttonIcon";
import FastRewindIcon from "@mui/icons-material/FastRewind";
export default {
  title: "Components/Card/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      optios: ["filled", "elevated", "outlined"],
    },
  },
} as Meta<typeof Card>;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Card
        children={
          <>
            <div className="mb-[100px]!">
              <h1 className="text-[32px]">Glass Souls'World Tour</h1>
              <h2>From your recent favorites</h2>
            </div>
            <div className="flex flex-row justify-end items-center gap-[10px]">
              <Button
                label="Add"
                shape="round"
                size="sm"
                color="secondary"
                variant="tonal"
              />
              <Button
                label="Buy ticket"
                shape="round"
                size="sm"
                variant="filled"
                color="secondary"
              />
            </div>
          </>
        }
      />
    );
  },
};
