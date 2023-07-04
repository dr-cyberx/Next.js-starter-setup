import { type StoryFn, type Meta } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  args: {
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "danger", "outline", "ghost", "link"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "default", "lg"],
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary: StoryFn<typeof Button> = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Danger: StoryFn<typeof Button> = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

export const Outline: StoryFn<typeof Button> = Template.bind({});
Outline.args = {
  children: "Outline Button",
  variant: "outline",
};

export const Ghost: StoryFn<typeof Button> = Template.bind({});
Ghost.args = {
  children: "Ghost Button",
  variant: "ghost",
};

export const Link: StoryFn<typeof Button> = Template.bind({});
Link.args = {
  children: "Link Button",
  variant: "link",
};
