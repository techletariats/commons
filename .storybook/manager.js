import { addons } from "storybook/manager-api";

import { create } from "storybook/theming";

const theme = create({
  base: "dark",
  brandTitle: "Commons by Techletariats",
  fontBase: "system-ui",
});

addons.setConfig({ theme });
