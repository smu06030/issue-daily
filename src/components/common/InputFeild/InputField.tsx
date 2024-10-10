import React from 'react';

type InputFieldProps = {
  type: string;
  placeholder: string;
  registerOptions: Object;
  errors: Object;
};

const InputField = ({ type, placeholder, registerOptions, errors }: InputFieldProps) => {
  return (
    <div className="text-sm flex justify-center items-start flex-col">
      <input
        className="w-[348px] h-[50px] text-sm mb-3 border-[1px] p-[16px] rounded border-[#DBDBDB]"
        type={type}
        placeholder={placeholder}
        {...registerOptions}
      />
      {errors[type] && <span className="text-red-500 mb-3">{errors[type].message}</span>}
    </div>
  );
};

export default InputField;
