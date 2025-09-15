import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchView } from "./SearchView";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

export default {
  title: "Components/Search/SearchView",
  component: SearchView,
  tags: ["autodocs"],
  argTypes: {
    leadingIcon: {},
  },
} as Meta<typeof SearchView>;

type Story = StoryObj<typeof SearchView>;

export const Default: Story = {
  args: {
    leadingIcon: (
      <ArrowBackIcon style={{ fontSize: "24px", color: "inherit" }} />
    ),
    trailingIcon: <CloseIcon style={{ fontSize: "24px", color: "inherit" }} />,
  },
};
