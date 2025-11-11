import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Heading } from ".";

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Welcome Comrade",
  },
  play: async (context) => {
    const { canvas, step, args } = context;
    const { children } = args;

    await step("Initial Render", async () => {
      await canvas.findByRole("heading");
    });

    await step("Has Text", async () => {
      await canvas.findByText(children);
    });
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {};
export const Heading2: Story = {
  args: { as: "h2" },
};
export const Heading3: Story = {
  args: { as: "h3" },
};
export const Heading4: Story = {
  args: { as: "h4" },
};
