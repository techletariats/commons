import type { Preview } from "@storybook/nextjs-vite";
import { DocsContainer, DocsContextProps } from "@storybook/addon-docs/blocks";
import "../src/styles/globals.css";
import "./style.css";
import { FC, PropsWithChildren, useEffect } from "react";
import { Renderer, StoryContext } from "storybook/internal/types";

const ExampleContainer: FC<
  PropsWithChildren & { context: DocsContextProps<Renderer> }
> = ({ children, ...props }) => (
  <DocsContainer {...props}>
    <div id="docs-root">{children}</div>
  </DocsContainer>
);

const WithTheme: FC<{ theme: string; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <div data-theme={theme}>{children}</div>;
};

const withTheme = (
  Story: FC,
  { globals: { theme = "auto" } }: StoryContext
) => (
  <WithTheme theme={theme}>
    <Story />
  </WithTheme>
);

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
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
