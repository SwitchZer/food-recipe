import React from "react";

function InputField({ label, type, id, placeholder, className }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
        className={`justify-center items-start px-8 py-7 mt-5 text-sm bg-white rounded-md border border-solid ${className} max-md:px-5 max-md:max-w-full`}
      />
    </div>
  );
}

export default InputField;
