// src/components/data-entry/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          tabIndex={0}  // Ensure checkbox is focusable
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
