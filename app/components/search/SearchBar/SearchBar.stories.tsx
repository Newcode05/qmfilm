import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchBar } from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";

export default {
  title: "Components/Search/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    leadingIcon: {
      table: { disable: true },
      control: false,
    },
    trailingIcon: {
      table: { disable: true },
      control: false,
    },
  },
} as Meta<typeof SearchBar>;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    leadingIcon: <SearchIcon style={{ color: "inherit", fontSize: "24px" }} />,
  },
};
