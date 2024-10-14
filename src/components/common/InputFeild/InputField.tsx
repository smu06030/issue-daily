import React from 'react';

type InputFieldProps = {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  registerOptions: Object;
  errors: any;
};

const InputField = ({ name, type, label, placeholder, registerOptions, errors }: InputFieldProps) => {
  return (
    <div className="text-sm flex justify-center items-start flex-col">
      {label && <label className='mb-3 mt-7' htmlFor={name}>{label}</label>}
      <input
        className="w-[348px] h-[50px] text-sm mb-3 border-[1px] p-[16px] rounded border-[#DBDBDB]"
        type={type}
        placeholder={placeholder}
        {...registerOptions}
      />
      {errors[name]?.message && <span className="text-red-500 mb-3">{errors[name].message}</span>}
    </div>
  );
};

export default InputField;
