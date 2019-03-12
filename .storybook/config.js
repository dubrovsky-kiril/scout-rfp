import { configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { addDecorator } from "@storybook/react";

const stories = require.context("../src", true, /.stories.tsx$/);

const loadStories = () => {
  addDecorator(withInfo); // Globally in your .storybook/config.js.
  stories.keys().forEach(storyKey => stories(storyKey));
};

configure(loadStories, module);
