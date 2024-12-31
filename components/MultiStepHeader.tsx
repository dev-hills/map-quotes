import React from 'react'

const MultiStepHeader = ({ currentStep, goToNextStep }: MultiStepHeaderProps) => {
  return (
    <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] py-[24px] px-[20px] mt-[32px] mb-[24px] flex flex-row items-center gap-[24px]">
      <button
        onClick={() => goToNextStep(1)}
        className="flex flex-row gap-[16px] w-[33.33%]"
      >
        <div
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-full font-satoshi font-bold text-[18px] ${
            currentStep === 1
              ? "bg-[#175CFF] text-white"
              : "border-[1px] border-[#98A2B3] text-[#98A2B3] "
          } ${currentStep > 1 && "bg-[#E7F6EC] text-[#0F973D] border-none"}`}
        >
          1
        </div>

        <div className="flex flex-col items-start">
          <h1
            className={`font-satoshi text-[16px] text-[#101928] ${
              currentStep === 1 || currentStep > 1 ? "font-bold" : "font-medium"
            } `}
          >
            Request Information
          </h1>
          <p
            className={`font-satoshi font-medium text-[12px] ${
              currentStep === 1 ? "text-[#475367]" : "text-[#667185]"
            }`}
          >
            Provide details about the RFQ
          </p>
        </div>
      </button>

      <button
        onClick={() => goToNextStep(2)}
        className="flex flex-row gap-[16px] w-[33.33%]"
      >
        <div
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-full font-satoshi font-bold text-[18px] ${
            currentStep === 2
              ? "bg-[#175CFF] text-white"
              : "border-[1px] border-[#98A2B3] text-[#98A2B3] "
          } ${currentStep > 2 && "bg-[#E7F6EC] text-[#0F973D] border-none"}`}
        >
          2
        </div>

        <div className="flex flex-col items-start">
          <h1
            className={`font-satoshi text-[16px] text-[#101928] ${
              currentStep === 2 || currentStep > 2 ? "font-bold" : "font-medium"
            }`}
          >
            Terms and Attachments
          </h1>
          <p
            className={`font-satoshi font-medium text-[12px] ${
              currentStep === 2 ? "text-[#475367]" : "text-[#667185]"
            }`}
          >
            Payment and delivery terms
          </p>
        </div>
      </button>

      <button
        onClick={() => goToNextStep(3)}
        className="flex flex-row gap-[16px] w-[33.33%]"
      >
        <div
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-full font-satoshi font-bold text-[18px] ${
            currentStep === 3
              ? "bg-[#175CFF] text-white"
              : "border-[1px] border-[#98A2B3] text-[#98A2B3] "
          }`}
        >
          3
        </div>

        <div className="flex flex-col items-start">
          <h1
            className={`font-satoshi text-[16px] text-[#101928] ${
              currentStep === 3 ? "font-bold" : "font-medium"
            }`}
          >
            Review
          </h1>
          <p
            className={`font-satoshi font-medium text-[12px] ${
              currentStep === 3 ? "text-[#475367]" : "text-[#667185]"
            }`}
          >
            Confirm all information provided
          </p>
        </div>
      </button>
    </div>
  );
};

export default MultiStepHeader