// src/stories/Checkbox.stories.tsx
import React, { useState } from 'react';
import Checkbox from '../components/data-entry/Checkbox';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Agree to terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

export const Disabled = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="Agree to terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} disabled />;
};
