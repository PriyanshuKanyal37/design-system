// src/stories/Popover.stories.tsx
import React from 'react';
import Popover from '../components/feedback/Popover';

export default {
  title: 'Feedback/Popover',
  component: Popover,
};

export const Top = () => <Popover content="This is a top popover" position="top" />;
export const Bottom = () => <Popover content="This is a bottom popover" position="bottom" />;
export const Left = () => <Popover content="This is a left popover" position="left" />;
export const Right = () => <Popover content="This is a right popover" position="right" />;
