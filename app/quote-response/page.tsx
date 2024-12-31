"use client";

import MultiStepHeader from "@/components/MultiStepHeader";
import RequestForQuote from "@/components/RequestForQuote";
import RequestInformation from "@/components/RequestInformation";
import TermsAndAttachments from "@/components/TermsAndAttachments";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const goToNextStep = (step: number) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RequestForQuote goToNextStep={goToNextStep} />;
      case 2:
        return <TermsAndAttachments goToNextStep={goToNextStep} />;
      case 3:
        return <RequestInformation setCurrentStep={setCurrentStep} />;
      default:
        return <RequestForQuote goToNextStep={goToNextStep} />;
    }
  };

  const router = useRouter();
  return (
    <div className="px-[32px] pt-[24px]">
      <div>
        <button
          onClick={() => router.back()}
          className="font-satoshi font-medium text-[14px] text-[#175CFF]"
        >
          Quotes
        </button>

        <span className="w-[20px] h-[20px] font-satoshi font-medium text-[14px] text-[#98A2B3] ml-[10px] mr-[13px]">
          /
        </span>

        <button className="font-satoshi font-medium text-[14px] text-[#667185]">
          Quote Response
        </button>
      </div>

      <MultiStepHeader currentStep={currentStep} goToNextStep={goToNextStep} />

      <div className="mt-[32px]">{renderStep()}</div>
    </div>
  );
};

export default Page;
