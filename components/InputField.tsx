import React from "react";

const InputField = ({
  className,
  IconLeft,
  IconRight,
  label,
  value,
  bottomInfo,
  textStyles,
  labelStyles = "font-bold text-[14px] text-[#475367]",
}: InputFieldProps) => {
  return (
    <div>
      <span className={` font-satoshi ${labelStyles}`}>{label}</span>

      <div
        className={`${className} flex flex-row items-center gap-[8px] mt-[4px] ${
          IconRight && "justify-between"
        }`}
      >
        {IconLeft && <IconLeft />}
        <input
          type="text"
          value={value}
          className={`bg-transparent outline-none border-none ${textStyles}`}
          disabled
        />
        {IconRight && <IconRight />}
      </div>

      <span className="font-medium text-[12px] text-[#667185] font-satoshi">
        {bottomInfo}
      </span>
    </div>
  );
};

export default InputField;
