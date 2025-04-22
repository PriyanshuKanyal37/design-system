// src/stories/Toast.stories.tsx
import React from 'react';
import Toast from '../components/feedback/Toast';

export default {
  title: 'Feedback/Toast',
  component: Toast,
};

export const SuccessToast = () => <Toast message="This is a success toast!" type="success" />;
export const ErrorToast = () => <Toast message="This is an error toast!" type="error" />;
export const InfoToast = () => <Toast message="This is an info toast!" type="info" />;
export const WarningToast = () => <Toast message="This is a warning toast!" type="warning" />;
