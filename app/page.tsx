"use client";

import CustomButton from "@/components/CustomButton";
import QuoteDetails from "@/components/QuoteDetails";
import QuoteTable from "@/components/QuoteTable";
import ContractOutline from "@/icons/ContractOutline";
import X from "@/icons/X";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="text-primary-100 px-[32px] pt-[32px] w-[100%]">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="font-satoshi font-bold text-black text-[24px]">
            Quote details
          </h1>
          <p className="font-satoshi font-normal text-dark-700 text-[14px]">
            Created on Wed, 12th June 2022, 08:00am
          </p>
        </div>

        <div className="flex flex-row items-center gap-[12px]">
          <CustomButton
            onClick={() => router.push(`/quote-response`)}
            title="Respond"
            className="bg-primary-200 rounded-[8px] px-[18px] py-[8px] text-white text-[14px] font-bold"
          />

          <CustomButton
            title="Reject"
            IconLeft={() => <X />}
            className="bg-danger rounded-[8px] px-[18px] py-[8px] text-white text-[14px] font-bold"
          />
        </div>
      </div>

      <QuoteDetails />

      <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] pt-[16px] pb-[24px] mt-[32px] mb-[24px]">
        <h1 className="font-satoshi font-bold text-[20px] tracking-[-2%] text-[#1D2739] ml-[24px]">
          Item(s)
        </h1>

        <div className="mx-[16px] mt-[16px]">
          <QuoteTable />
        </div>
      </div>

      <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] p-[24px] mt-[32px] mb-[24px] flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[12px]">
          <ContractOutline />

          <div>
            <h1 className="font-satoshi font-bold text-[20px] tracking-[-2%] text-[#1D2739]">
              Terms and Attachments
            </h1>
            <p className="font-satoshi font-normal text-[14px] text-[#475367]">
              Review payment and delivery terms
            </p>
          </div>
        </div>
        <ChevronDown color="#98A2B3" />
      </div>
    </div>
  );
};

export default Page;
