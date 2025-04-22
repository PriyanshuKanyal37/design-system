// src/App.tsx
import React from 'react';
import Heading from './components/typography/Heading';
import Paragraph from './components/typography/Paragraph';
import Button from './components/data-entry/Button';
import Toast from './components/feedback/Toast';

const App: React.FC = () => {
  return (
    <div className="p-8">
      <Heading level={1}>Welcome to the Design System</Heading>
      <Heading level={2}>Typography Component</Heading>
      <Paragraph>This is a paragraph component used to display text.</Paragraph>

      <Heading level={3}>Data Entry Component</Heading>
      <Button label="Click Me" onClick={() => alert('Button Clicked')} />

      <Heading level={4}>Feedback Component</Heading>
      <Toast message="This is a success toast!" type="success" />
    </div>
  );
};

export default App;
