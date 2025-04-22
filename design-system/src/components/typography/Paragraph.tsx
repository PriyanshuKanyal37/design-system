// src/components/typography/Paragraph.tsx
import React from 'react';

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-800 dark:text-gray-300">{children}</p>
);

export default Paragraph;
