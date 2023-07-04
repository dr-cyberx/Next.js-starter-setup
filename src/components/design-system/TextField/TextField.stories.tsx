import { type StoryFn, type Meta } from "@storybook/react";

import { type InputProps, TextField } from "./TextField";

const meta: Meta<InputProps> = {
  title: "TextField",
  component: TextField,
  args: {},
  argTypes: {},
};

export default meta;

const TextFieldTemplate: StoryFn<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary: StoryFn<typeof TextField> = TextFieldTemplate.bind({});
Primary.args = {};
