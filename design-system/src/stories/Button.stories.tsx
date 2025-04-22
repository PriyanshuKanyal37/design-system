// src/stories/Button.stories.tsx
import React from 'react';
import Button from '../components/data-entry/Button';

export default {
  title: 'Data Entry/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A button component that triggers actions when clicked. It supports custom text and disabled states.',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
