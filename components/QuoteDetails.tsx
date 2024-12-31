import Building from "@/icons/Building";
import React from "react";

const QuoteDetails = () => {
  return (
    <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] py-[24px] px-[32px] mt-[32px]">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-satoshi font-bold text-[#1D2739] text-[20px] tracking-[-2%]">
          Quote details
        </h1>
        <h1 className="font-satoshi font-normal text-dark-700 text-[14px]">
          Expected delivery date : 2024-12-02
        </h1>
      </div>

      <div className="mt-[32px] w-[100%] flex flex-row items-start gap-[124px]">
        <div className="w-[60%] flex flex-col gap-[16px]">
          <div className="flex flex-row items-center">
            <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
              Title
            </h3>

            <h3 className="font-satoshi font-medium text-[#344054] text-[16px]">
              Request for Equipments
            </h3>
          </div>

          <div className="flex flex-row items-center">
            <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
              RFQ No
            </h3>

            <h3 className="font-satoshi font-medium text-[#344054] text-[16px]">
              RQ #01234
            </h3>
          </div>

          <div className="flex flex-row items-center">
            <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
              Requestor
            </h3>

            <div className="flex flex-row items-center gap-[8px]">
              <div className="bg-[#FFECE5] rounded-full flex items-center justify-center font-satoshi font-bold text-[#101928] text-[14px] w-[32px] h-[32px]">
                JD
              </div>

              <h3 className="font-satoshi font-medium text-[#344054] text-[16px]">
                Jane Doe
              </h3>

              <div className="bg-[#D9D9D9] rounded-full w-[6px] h-[6px]"></div>

              <h3 className="font-satoshi font-medium text-[#98A2B3] text-[16px]">
                Head Nurse, Paediatrics
              </h3>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
              Status
            </h3>

            <div className="bg-[#FFECE5] px-[8px] rounded-[50px] font-satoshi font-medium text-[#F56630] text-[12px]">
              Awaiting
            </div>
          </div>

          <div className="flex flex-row items-center">
            <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
              Department
            </h3>

            <h3 className="font-satoshi font-medium text-[#344054] text-[16px]">
              Maternity
            </h3>
          </div>
        </div>

        <div className="w-[40%] border-[1px] border-[#D9D9D9] p-[16px] rounded-[10px]">
          <div className="flex flex-row items-center gap-[8px]">
            <Building />
            <p className="font-satoshi font-normal text-[12px] text-[#475367]">
              Client
            </p>
          </div>

          <div className="flex flex-row items-center gap-[12px]">
            <div className="bg-[#FFECE5] rounded-full flex items-center justify-center font-satoshi font-semibold text-[#101928] text-[10px] w-[32px] h-[32px]">
              W
            </div>

            <div>
              <h3 className="font-satoshi font-medium text-[#101928] text-[14px]">
                Westend Hospital
              </h3>
              <h3 className="font-satoshi font-normal text-[#475367] text-[12px]">
                Clear street
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetails;
