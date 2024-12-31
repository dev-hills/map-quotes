"use client";
import Edit from "@/icons/Edit";
import React, { useEffect, useState } from "react";
import QuoteTable from "./QuoteTable";
import ContractOutline from "@/icons/ContractOutline";
import { ChevronDown } from "lucide-react";
import CustomButton from "./CustomButton";
import ConfirmationModal from "./ConfirmationModal";
import { toast } from "react-toastify";
import Notify from "./Notify";

const RequestInformation = ({
  setCurrentStep,
}: MultiStepHeaderComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toastNotification = () => {
    toast(Notify, {
      closeButton: false,
      autoClose: 5000,
      className: "p-0 w-[384px] h-[48px]",
      hideProgressBar: true,
      draggable: true,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-[64px]">
      <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] py-[24px] px-[32px] mt-[32px] ">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-satoshi font-bold text-[#1D2739] text-[20px] tracking-[-2%]">
            Request Information
          </h1>

          <Edit />
        </div>

        <div className="mt-[24px] w-[100%] flex flex-row items-start gap-[124px]">
          <div className="w-[60%] flex flex-col gap-[16px]">
            <div className="flex flex-row items-center">
              <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
                Title
              </h3>

              <h3 className="font-satoshi font-medium text-[#101928] text-[16px]">
                Request for Equipments
              </h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
                RFQ No
              </h3>

              <h3 className="font-satoshi font-medium text-[#101928] text-[16px]">
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
                Department
              </h3>

              <h3 className="font-satoshi font-medium text-[#101928] text-[16px]">
                Maternity
              </h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="font-satoshi font-medium text-[#555E68] text-[16px] opacity-[64%] w-[45%]">
                Expected delivery date
              </h3>

              <h3 className="font-satoshi font-medium text-[#101928] text-[16px]">
                2024-12-02
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] border-[1px] border-[#E4E7EC] rounded-[8px] pt-[16px] pb-[24px] mt-[24px] mb-[24px]">
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
          onClick={() => setIsOpen(true)}
          title="Submit"
          className="bg-[#175CFF] text-[#fff] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[188px]"
        />
      </div>

      {isOpen && (
        <ConfirmationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          toast={toastNotification}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
};

export default RequestInformation;
