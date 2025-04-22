// src/stories/Modal.stories.tsx
import React, { useState } from 'react';
import Modal from '../components/feedback/Modal';

export default {
  title: 'Feedback/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Sample Modal"
    >
      <p>This is a sample modal content.</p>
    </Modal>
  );
};
