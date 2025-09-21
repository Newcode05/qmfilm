import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonSplit } from "./buttonSplit";
import { Button } from "../button/button";
import { ButtonIcon } from "../button icon/buttonIcon";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FolderIcon from "@mui/icons-material/Folder";
export default {
  title: "Components/Button Split/Button Split",
  component: ButtonSplit,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "radio",
      options: ["filled", "elevated", "outlined", "tonal"],
    },
  },
} as Meta<typeof ButtonSplit>;

type Story = StoryObj<typeof ButtonSplit>;

export const Default: Story = {
  args: {},
  render: ({ size = "sm", ...args }) => {
    const [selected, setSelected] = React.useState<boolean>(false);
    return (
      <ButtonSplit
        childern={
          <>
            <Button
              shape="round"
              size={size}
              startIcon={<FolderIcon />}
              className="rounded-l-[40px] rounded-r-[8px]"
            />
            <ButtonIcon
              shape="square"
              size={size}
              selected={selected}
              onClick={() => setSelected((prev) => !prev)}
              icon={<KeyboardArrowUpIcon />}
              custom={false}
              variants={{}}
              initial={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "40px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "40px",
              }}
              animate={
                !selected
                  ? {
                      borderRadius: "8px 40px 40px 8px",
                    }
                  : {
                      borderRadius: "40px 40px 40px 40px",
                    }
              }
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 20,
              }}
              className="before:rounded-r-[40px] before:rounded-l-[8px]"
            />
          </>
        }
        {...args}
      />
    );
  },
};
