import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import InputField from "./InputField";
import { ChevronDown } from "lucide-react";
import Dollar from "./Dollar";
import CalendarOutline from "@/icons/CalendarOutline";
import Bin from "@/icons/Bin";
import Separator from "./Separator";

const data: AddItemsTableProps[] = [
  {
    id: "1",
    items: {
      image: "/public/item.svg",
      header: "Oxygen concentrator",
      id: "#28373",
    },
    variants: "Blue",
    quantity: "100 pieces",
    price: "$200.00",
    amount: "$2,000.0",
    expected_date: "2024-08-07",
  },
  {
    id: "2",
    items: {
      image: "/public/item.svg",
      header: "Mechanical ventilator",
      id: "#28373",
    },
    variants: "Nil",
    quantity: "45 Kg",
    price: "$350.00",
    amount: "$2,500.00",
    expected_date: "2024-08-07",
  },
  {
    id: "3",
    items: {
      image: "/public/item.svg",
      header: "Patient Monitor",
      id: "#28373",
    },
    variants: "Blue",
    quantity: "30 Units",
    price: "$300.00",
    amount: "$1,500.00",
    expected_date: "2024-08-07",
  },
  {
    id: "4",
    items: {
      image: "/public/item.svg",
      header: "Mechanical ventilator",
      id: "#28373",
    },
    variants: "Blue",
    quantity: "35 Units",
    price: "$200.00",
    amount: "$1,500.00",
    expected_date: "2024-08-07",
  },
];

const AddItemsTable = () => {
  const columnHelper = createColumnHelper<AddItemsTableProps>();

  const columns = [
    columnHelper.accessor("items", {
      header: "Items",
      cell: (info) => {
        const value = info.getValue();
        return (
          <InputField
            className="bg-[#F0F2F5] py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD] w-[232px]"
            value={value.header || ""}
            IconRight={() => <ChevronDown color="#667185" />}
            textStyles="font-medium text-[14px] text-[#98A2B3] font-satoshi w-[220px]"
          />
        );
      },
      sortingFn: "datetime",
    }),
    columnHelper.accessor("variants", {
      header: "Variants",
      cell: (info) => (
        <InputField
          className="py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD] w-[140px]"
          value={info.getValue() || ""}
          IconRight={() => <ChevronDown color="#667185" />}
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi w-[90px]"
        />
      ),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: () => (
        <InputField
          className="py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD] w-[140px]"
          value="100"
          IconRight={() => (
            <p className="font-normal text-[12px] text-[#667185] font-satoshi">
              Pack
            </p>
          )}
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi w-[80px]"
        />
      ),
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: () => (
        <InputField
          className="py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD] w-[140px]"
          value="12.00"
          IconLeft={() => <Dollar />}
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi w-[80px]"
        />
      ),
    }),
    columnHelper.accessor("expected_date", {
      header: "Expected Delivery Date",
      cell: (info) => (
        <InputField
          className="py-[8px] px-[12px] rounded-[6px] border-[1px] border-[#D0D5DD] w-[140px]"
          value={info.getValue()}
          IconLeft={() => <CalendarOutline />}
          textStyles="font-medium text-[14px] text-[#101928] font-satoshi w-[80px]"
        />
      ),
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-bold text-[#344054]">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("id", {
      header: "",
      cell: ({}) => (
        <div className="ml-[50px]">
          <Bin />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <div className="overflow-x-auto w-full">
        <table className="w-full">
          <thead className="bg-[#F7F9FC]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`font-satoshi px-[8px] py-[4px] text-left text-[14px] font-medium text-[#667185]`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-[#E5E7EB]">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-[8px] py-[16px] ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Separator lineHeight="24px" />

      <div className="float-right w-[20%] mr-[110px] my-[20px] flex flex-row items-center gap-[16px]">
        <h1 className="font-satoshi font-normal text-[16px] text-[#475367] w-[60%]">
          Sub Total
        </h1>

        <h1 className="font-satoshi font-normal text-[16px] text-[#475367]">
          $1200.00
        </h1>
      </div>
    </div>
  );
};

export default AddItemsTable;
