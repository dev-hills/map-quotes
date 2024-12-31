import React from "react";

const CustomButton = ({
  onClick,
  title,
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center gap-[13px] font-satoshi ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      {title}
      {IconRight && <IconRight />}
    </button>
  );
};

export default CustomButton;
