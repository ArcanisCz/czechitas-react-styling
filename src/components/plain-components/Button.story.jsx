import React from "react";
import { Button as ButtonComponent } from './Button';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: ButtonComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Button = {
  args: {
    text: "abx",
    error: false,
  },
};
