import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchSuggestionItem } from "./SearchSuggestionItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Search/SearchSuggestionItem",
  component: SearchSuggestionItem,
} as Meta<typeof SearchSuggestionItem>;

type Story = StoryObj<typeof SearchSuggestionItem>;

export const Default: Story = {
  args: {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
};
