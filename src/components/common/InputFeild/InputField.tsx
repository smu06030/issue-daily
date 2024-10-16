import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

type InputFieldProps = {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  registerOptions: object;
  errors: FieldErrors<FieldValues>;
};

const InputField = ({ name, type, label, placeholder, registerOptions, errors }: InputFieldProps) => {
  return (
    <div className="flex flex-col items-start justify-center text-sm">
      {label && (
        <label className="mb-3 mt-7" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="mb-3 h-[50px] w-[348px] rounded border-[1px] border-[#DBDBDB] p-[16px] text-sm"
        type={type}
        placeholder={placeholder}
        {...registerOptions}
      />
      {errors[name]?.message && typeof errors[name]?.message === 'string' && (
        <span className="mb-3 text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default InputField;
