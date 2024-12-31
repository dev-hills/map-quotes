import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

const ConfirmationModal = ({
  isOpen,
  onClose,
  toast,
  setCurrentStep,
}: ModalProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  if (!isOpen) return null;

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      setCurrentStep(1);
      router.push("/");
      toast();
    }, 5000);
  };

  return (
    <div className="z-[1000] fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-white rounded-[12px] py-[24px] px-[32px] min-w-[349px] max-w-[572px] min-h-[194px] max-h-[245px]">
        {loading ? (
          <div className="h-[180px] w-[100%] flex flex-col items-center justify-center mx-auto">
            <Loader />

            <p className="text-[14px] font-satoshi font-medium text-black mt-[8px]">
              Sending Quote...
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-satoshi font-bold text-[#101928] text-[20px] tracking-[-2%]">
              Confirmation
            </h1>

            <p className="font-satoshi font-medium text-[14px] text-[#475367] mt-[24px] leading-[20px] mb-[32px]">
              You are about to submit this quote in response to RFQ ID, this
              will immediately be sent to the client “Westend Clear Hospital”.
              Are you sure you want to proceed?
            </p>

            <div className="flex flex-row items-center gap-[16px] justify-end">
              <CustomButton
                onClick={onClose}
                title="Cancel"
                className="border-[1px] border-[#E4E7EC] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] text-[#475367] w-[78px]"
              />
              <CustomButton
                onClick={handleSubmit}
                title="Submit"
                className="bg-[#175CFF] text-[#fff] rounded-[8px] px-[16px] py-[10px] font-satoshi font-bold text-[14px] w-[92px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationModal;
