"use client";
import React, { useEffect } from "react";
import InputField from "./InputField";
import { ChevronDown } from "lucide-react";
import Separator from "./Separator";
import CustomButton from "./CustomButton";
import Upload from "@/icons/Upload";

const TermsAndAttachments = ({
  goToNextStep,
}: MultiStepHeaderComponentProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] py-[32px] px-[24px] mb-[43px]">
      <div>
        <h1 className="font-satoshi font-bold text-[24px] text-[#1A1A21]">
          Terms and Attachments
        </h1>
        <p className="font-satoshi font-medium text-[16px] text-[#98A2B3]">
          Provide detailed information on payment and delivery terms
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[18px] mt-[32px]">
        <InputField
          label="Payment Terms"
          className="bg-[#FFF] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value="Net 30"
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi"
          labelStyles="font-bold text-[14px] text-[#475367] font-satoshi"
          IconRight={() => <ChevronDown color="#667185" />}
        />
        <InputField
          label="Delivery Schedule"
          className="bg-[#FFF] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value="Immediate delivery"
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi"
          labelStyles="font-bold text-[14px] text-[#475367] font-satoshi"
          IconRight={() => <ChevronDown color="#667185" />}
        />
        <InputField
          label="Shipping Method"
          className="bg-[#FFF] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value="Courier Services"
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi"
          labelStyles="font-bold text-[14px] text-[#475367] font-satoshi"
          IconRight={() => <ChevronDown color="#667185" />}
        />

        <InputField
          label="Lead time"
          className="bg-[#FFF] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value="10"
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi"
          labelStyles="font-bold text-[14px] text-[#475367] font-satoshi"
          IconRight={() => (
            <div className="flex flex-row items-center gap-[4px] py-[4px] px-[8px] bg-[#F7F9FC]">
              <span className="font-satoshi font-normal text-[12px] text-[#667185]">
                Days
              </span>
              <ChevronDown color="#667185" />
            </div>
          )}
        />
      </div>

      <Separator lineHeight="24px" width="50%" />

      <div className="mt-[16px]">
        <h1 className="font-satoshi font-bold text-[16px] text-[#1D2739]">
          Attachments
        </h1>
        <p className="font-satoshi font-normal text-[14px] text-[#98A2B3]">
          Attach all necessary files or documents
        </p>
      </div>

      <div className="w-[50%] mt-[24px] border-[1.5px] border-[#D0D5DD] p-[24px] rounded-[16px] border-dashed flex flex-col items-center justify-center">
        <div className="bg-[#F0F2F5] w-[56px] h-[56px] flex items-center justify-center rounded-full mb-[16px]">
          <Upload />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-satoshi font-medium text-[14px] text-[#475367]">
            <span className="text-[#175CFF]">Click to upload</span> or drag and
            drop
          </h3>
          <p className="font-satoshi font-normal text-[12px] text-[#98A2B3]">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>

        <div className="flex flex-row items-center gap-[8px] mt-[20px]">
          <div className="w-[120px] h-[1px] bg-[#F0F2F5]" />
          <p className="font-satoshi font-bold text-[12px] text-[#98A2B3]">
            OR
          </p>
          <div className="w-[120px] h-[1px] bg-[#F0F2F5]" />
        </div>

        <CustomButton
          title="Browse Files"
          className="border-[1.5px] border-[#175CFF] text-[#175CFF] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[120px] mt-[16px]"
        />
      </div>

      <Separator lineHeight="32px" />

      <div className="mt-[40px] flex flex-row items-center gap-[24px] justify-end">
        <CustomButton
          title="Cancel"
          className="border-[1px] border-[#E4E7EC] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] text-[#475367]"
        />
        <CustomButton
          title="Save as draft"
          className="border-[1.5px] border-[#175CFF] text-[#175CFF] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[188px]"
        />
        <CustomButton
          onClick={() => goToNextStep(3)}
          title="Continue"
          className="bg-[#175CFF] text-[#fff] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[188px]"
        />
      </div>
    </div>
  );
};

export default TermsAndAttachments;
