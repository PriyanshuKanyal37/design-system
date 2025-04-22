// src/components/typography/Heading.tsx
import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;  // Specifies which HTML heading to use (H1-H6)
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  switch (level) {
    case 1:
      return <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h1>;
    case 2:
      return <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h2>;
    case 3:
      return <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h3>;
    case 4:
      return <h4 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h4>;
    case 5:
      return <h5 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h5>;
    case 6:
      return <h6 className="text-3xl font-semibold text-gray-900 dark:text-white">{children}</h6>;
    default:
      return null;
  }
};

export default Heading;
