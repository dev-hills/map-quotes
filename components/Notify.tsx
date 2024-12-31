import GreenTick from "@/icons/GreenTick";
import XDark from "@/icons/XDark";
import React from "react";
import { ToastContentProps } from "react-toastify";

const Notify = ({ closeToast }: ToastContentProps) => {
  return (
    <div className="flex flex-row items-center w-[384px]">
      <div className="h-[64px] bg-green-500 w-[6px] rounded-[4px] rounded-r-none"></div>

      <div className="w-[100%] flex flex-row justify-between items-center mx-[16px] py-[12px]">
        <div className="flex flex-row items-center gap-[12px]">
          <GreenTick />
          <p className="font-satoshi font-bold text-[14px] text-[#101928]">
            RFQ ID sent successfully!
          </p>
        </div>

        <div className="cursor-pointer" onClick={() => closeToast()}>
          <XDark />
        </div>
      </div>
    </div>
  );
};

export default Notify;
