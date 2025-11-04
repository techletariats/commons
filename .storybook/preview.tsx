import type { Preview } from "@storybook/nextjs-vite";
import { DocsContainer, DocsContextProps } from "@storybook/addon-docs/blocks";
import "../src/styles/globals.css";
import "./style.css";
import { FC, PropsWithChildren } from "react";
import { Renderer } from "storybook/internal/types";

const ExampleContainer: FC<
  PropsWithChildren & { context: DocsContextProps<Renderer> }
> = ({ children, ...props }) => {
  return (
    <DocsContainer {...props}>
      <div data-theme="dark">{children}</div>
    </DocsContainer>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "auto",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
          { value: "auto", title: "Auto", icon: "browser" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: ExampleContainer,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
