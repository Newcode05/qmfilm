import type { Preview, StoryFn } from "@storybook/nextjs-vite";
import "../app/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
};
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      items: ["default", "dark", "christmas", "tet"],
    },
  },
};

export const decorators: Preview["decorators"] = [
  (Story: StoryFn, context) => {
    const theme = context.globals.theme;
    document.body.setAttribute("data-theme", theme);

    // Optional: reset margin/padding hoặc full screen
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.minHeight = "100vh";
    return Story(context.args, context);
  },
];
export default preview;
