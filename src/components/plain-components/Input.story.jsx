import React from "react";
import { Input as InputComponent } from './Input';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input',
  component: InputComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const Input = {
  args: {
    text: "abx",
    error: false,
  },
};
