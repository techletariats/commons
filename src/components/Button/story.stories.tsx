import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect, fn, userEvent } from "storybook/test";

import { Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: "Join Organization",
    onClick: fn(),
  },
  play: async (context) => {
    const { canvas, step, args } = context;
    const { children } = args;

    await step("Initial Render", async () => {
      await canvas.findByRole("button");
    });

    await step("Has Text", async () => {
      await canvas.findByText(children);
    });
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  play: async (context) => {
    const { canvas, step, args } = context;
    const { onClick } = args;

    await meta.play(context);

    await step("Is Disabled", async () => {
      const button = canvas.getByRole("button");

      await userEvent.click(button);

      await expect(onClick).not.toHaveBeenCalled();
    });
  }
};
