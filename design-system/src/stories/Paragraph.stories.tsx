// src/stories/Paragraph.stories.tsx
import React from 'react';
import Paragraph from '../components/typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
};

export const Default = () => <Paragraph>This is a sample paragraph text.</Paragraph>;
