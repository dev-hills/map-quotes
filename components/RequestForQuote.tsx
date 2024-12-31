"use client";

import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import CalendarOutline from "@/icons/CalendarOutline";
import XDark from "@/icons/XDark";
import AddItemsTable from "./AddItemsTable";
import Separator from "./Separator";
import CustomButton from "./CustomButton";
import Loader from "./Loader";

const RequestForQuote = ({ goToNextStep }: MultiStepHeaderComponentProps) => {
  const [data, setData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [noteValue, setNoteValue] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/get-quote");
      const response = await res.json();
      setData(response.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] py-[32px] px-[24px] mb-[43px]">
      <div>
        <h1 className="font-satoshi font-bold text-[24px] text-[#1A1A21]">
          Request for Quote
        </h1>
        <p className="font-satoshi font-medium text-[16px] text-[#98A2B3]">
          Fill out these details to send the RFQ
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[18px] mt-[32px]">
        <InputField
          label="RFQ No"
          className="bg-[#F0F2F5] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value={data?.rfqNo || ""}
          textStyles="font-medium text-[14px] text-[#98A2B3] font-satoshi"
        />

        <InputField
          label="Title"
          className="bg-[#F0F2F5] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value={data?.title || ""}
          textStyles="font-medium text-[14px] text-[#98A2B3] font-satoshi"
        />

        <InputField
          label="Department"
          className="bg-[#F0F2F5] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value={data?.department || ""}
          textStyles="font-medium text-[14px] text-[#98A2B3] font-satoshi"
          IconRight={() => <XDark />}
        />

        <InputField
          label="Expected delivery date"
          className="bg-[#F0F2F5] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD]"
          value={data?.expectedDeliveryDate || ""}
          textStyles="font-medium text-[14px] text-[#98A2B3] font-satoshi"
          IconLeft={() => <CalendarOutline />}
          bottomInfo="Calculated based on lead time and issue date"
        />
      </div>

      <Separator lineHeight="24px" />

      <div className="my-[16px]">
        <AddItemsTable />
      </div>

      <div className="flex flex-col items-start">
        <span className="font-bold text-[14px] text-[#475367] font-satoshi">
          Note
        </span>

        <div className="flex flex-col items-end w-[472px] relative">
          <textarea
            onChange={(e) => setNoteValue(e.target.value)}
            value={noteValue}
            rows={5}
            maxLength={200}
            placeholder="Enter note here"
            className="border-[1px] border-[#D0D5DD] w-[472px] rounded-[6px] mt-[4px] resize-none p-[16px] outline-none text-[14px] placeholder:font-satoshi placeholder:font-normal placeholder:text-[#98A2B3]"
          ></textarea>
          <p className="mt-[8px] font-satoshi font-medium text-[12px] text-[#667185]">
            {noteValue.length}/200
          </p>
        </div>
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
          onClick={() => goToNextStep(2)}
          title="Continue"
          className="bg-[#175CFF] text-[#fff] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[188px]"
        />
      </div>
    </div>
  );
};

export default RequestForQuote;
