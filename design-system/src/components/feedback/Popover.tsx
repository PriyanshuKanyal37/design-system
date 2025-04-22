// src/components/feedback/Popover.tsx
import React from 'react';

interface PopoverProps {
  content: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const Popover: React.FC<PopoverProps> = ({ content, position }) => {
  return (
    <div className={`relative inline-block text-left`}>
      <div
        className={`absolute ${position}-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-2 dark:bg-gray-700 dark:border-gray-600`}
      >
        {content}
      </div>
    </div>
  );
};

export default Popover;
