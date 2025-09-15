import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "./search";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchView } from "./SearchView/SearchView";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
export default {
  title: "Components/Search/Search",
  component: Search,
  tags: ["autodocs"],
} as Meta<typeof Search>;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    return (
      <Search
        isOpen={isOpen}
        searchBar={
          <SearchBar
            layoutId="search"
            key="bar"
            layout
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            leadingIcon={
              <SearchIcon style={{ fontSize: "24px", color: "inherit" }} />
            }
            onClick={() => setIsOpen(true)}
          />
        }
        searchView={
          <SearchView
            layoutId="search"
            key="bar"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            leadingIcon={
              <ArrowBackIcon style={{ fontSize: "24px", color: "inherit" }} />
            }
            trailingIcon={
              <CloseIcon style={{ fontSize: "24px", color: "inherit" }} />
            }
            onClick={() => setIsOpen(false)}
          />
        }
      />
    );
  },
};
