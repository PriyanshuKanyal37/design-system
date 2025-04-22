// src/stories/TextInput.stories.tsx
import React, { useState } from 'react';
import TextInput from '../components/data-entry/TextInput';

export default {
  title: 'Data Entry/TextInput',
  component: TextInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return <TextInput label="Name" value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = () => {
  const [value, setValue] = useState('');
  return <TextInput label="Name" value={value} onChange={(e) => setValue(e.target.value)} disabled />;
};
