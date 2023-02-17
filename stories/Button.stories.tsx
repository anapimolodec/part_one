import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  radius: 50,
  backgroundColor: '#ff8b8b',
  emoji: 'clap'
};

export const Circle = Template.bind({});
Circle.args = {
  radius: 100,
  backgroundColor: 'blue',
  emoji: 'clap'
};