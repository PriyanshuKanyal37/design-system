// src/components/feedback/Toast.tsx
import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);  // Cleanup timer
  }, [duration]);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 px-6 py-3 rounded-md text-white ${
        type === 'success' ? 'bg-green-500' : ''
      } ${type === 'error' ? 'bg-red-500' : ''} ${type === 'info' ? 'bg-blue-500' : ''} ${
        type === 'warning' ? 'bg-yellow-500' : ''
      } dark:bg-gray-800`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default Toast;
