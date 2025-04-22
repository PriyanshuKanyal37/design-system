// src/components/feedback/Modal.tsx
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus(); // Ensure focus is on modal when open
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center dark:bg-black dark:bg-opacity-80"
      onClick={onClose}
      role="presentation"  // Prevent background click propagation
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 dark:bg-gray-700 dark:text-white"
        onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside
        tabIndex={-1}  // Ensure modal can receive focus
        ref={modalRef}
        aria-labelledby="modalTitle"
        role="dialog"
        aria-hidden={!isOpen}
      >
        <h2 id="modalTitle" className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
