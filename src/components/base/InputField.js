import React from "react";

const InputField = ({
  type = "text",
  label,
  value,
  children,
  onChange,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-wrap">
        {label && (
          <label className="mt-9 text-xs text-zinc-400 max-md:max-w-full">
            {label}
          </label>
        )}
        <input
          {...props}
          type={type}
          value={value}
          onChange={onChange}
          className="justify-center items-start px-4 py-5 mt-2 text-sm w-full bg-white rounded border border-gray-200 border-solid text-neutral-400 max-md:pr-5 max-md:max-w-full"
        />
      </div>
    </>
  );
};

export default InputField;
