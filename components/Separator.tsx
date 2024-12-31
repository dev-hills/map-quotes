import React from "react";

const Separator = ({
  lineHeight,
  width = "100%",
}: {
  lineHeight?: string;
  width?: string;
}) => {
  return (
    <div
      className={`w-[${width}] h-[1px] bg-[#E9E9E9] mt-[${lineHeight}]`}
    ></div>
  );
};

export default Separator;
