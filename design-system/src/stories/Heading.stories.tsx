// src/stories/Heading.stories.tsx
import React from 'react';
import Heading from '../components/typography/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'A heading component that supports dynamic levels (h1, h2, h3, etc.) based on the `level` prop.',
      },
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  children: 'This is an H1 heading',
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: 'This is an H2 heading',
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  children: 'This is an H3 heading',
};
