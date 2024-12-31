declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  IconLeft?: React.FC<React.SVGProps<SVGSVGElement>>;
  IconRight?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

declare interface InputFieldProps {
  className?: string;
  IconLeft?: React.FC<React.SVGProps<SVGSVGElement>>;
  IconRight?: React.FC<React.SVGProps<SVGSVGElement>>;
  label?: string;
  value: string;
  bottomInfo?: string;
  textStyles?: string;
  labelStyles?: string;
}

declare interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  toast: () => void;
  setCurrentStep: Dispatch<SetStateAction<StepType>>;
}

declare interface MultiStepHeaderProps {
  currentStep: number;
  goToNextStep: (step: number) => void;
}
declare interface MultiStepHeaderComponentProps {
  goToNextStep?: (step: number) => void;
  setCurrentStep?: Dispatch<SetStateAction<StepType>>;
}

declare interface QuoteData {
  rfqNo: string;
  title: string;
  department: string;
  expectedDeliveryDate: string;
}

declare interface TableDataProps {
  id: number;
  items: {
    image: string;
    header: string;
    id: string;
  };
  variants: string;
  quantity: string;
  price: string;
  amount: string;
  expected_date: string;
}

type Item = {
  image: string;
  header: string;
  id: string;
};

declare interface AddItemsTableProps {
  id: string;
  items: Item;
  variants: string;
  quantity: string;
  price: string;
  amount: string;
  expected_date: string;
}
