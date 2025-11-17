import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from ".";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a text component that provides semantic and accessible text rendering.",
  },
  play: async (context) => {
    const { canvas, step, args } = context;
    const { children } = args;

    await step("Initial Render", async () => {
      await canvas.findByText(children);
    });
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    as: "p",
  },
  play: async (context) => {
    const { canvas, step } = context;

    await meta.play(context);

    await step("Renders as paragraph", async () => {
      const paragraph = canvas.getByText(context.args.children);
      if (paragraph.tagName !== "P") {
        throw new Error("Expected element to be a <p> tag");
      }
    });
  },
};

export const Span: Story = {
  args: {
    as: "span",
  },
  play: async (context) => {
    const { canvas, step } = context;

    await meta.play(context);

    await step("Renders as span", async () => {
      const span = canvas.getByText(context.args.children);
      if (span.tagName !== "SPAN") {
        throw new Error("Expected element to be a <span> tag");
      }
    });
  },
};
