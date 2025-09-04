import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./SearchBar";

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
    leadingIcon: (
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "inherit", fontSize: "24px" }}
      />
    ),
  },
};
