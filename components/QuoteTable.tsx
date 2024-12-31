"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Item from "@/icons/Item";

const data: TableDataProps[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const QuoteTable = () => {
  const columnHelper = createColumnHelper<TableDataProps>();

  const columns = [
    columnHelper.accessor("id", {
      header: ({ table }) => (
        <input
          type="checkbox"
          className="w-[20px] h-[20px] rounded-[4px] border-[1.5px] border-[#D0D5DD]"
          checked={table.getIsAllRowsSelected()}
          onChange={(e) => table.toggleAllRowsSelected(e.target.checked)}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="w-[20px] h-[20px] rounded-[4px] border-[1.5px] border-[#D0D5DD]"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
        />
      ),
    }),
    columnHelper.accessor("items", {
      header: "Items",
      cell: (info) => {
        const value = info.getValue();
        return (
          <div className="flex flex-row items-center gap-[12px]">
            {/* {value.image} */}
            <Item />

            <div>
              <h1 className="font-satoshi font-medium text-[14px] text-[#101928]">
                {value.header}
              </h1>
              <h1 className="font-satoshi font-medium text-[14px] text-[#475367]">
                {value.id}
              </h1>
            </div>
          </div>
        );
      },
      sortingFn: "datetime",
    }),
    columnHelper.accessor("variants", {
      header: "Variants",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-normal text-[#344054]">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-normal text-[#344054]">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-normal text-[#344054]">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-normal text-[#344054]">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("expected_date", {
      header: "Expected Delivery Date",
      cell: (info) => (
        <span className="font-satoshi text-[14px] font-normal text-[#344054]">
          {info.getValue()}
        </span>
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
      <div className="overflow-x-auto w-full border rounded-[10px]">
        <table className="w-full">
          <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] py-[14px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`font-satoshi px-6 py-3 text-left text-[12px] font-normal text-[#344054]`}
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
          <tbody className="bg-white divide-y divide-[#E5E7EB]">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="float-right w-[20%] mr-[110px] my-[20px]">
        <div className="flex flex-row items-center gap-[16px]">
          <h1 className="font-satoshi font-normal text-[16px] text-[#475367] w-[60%]">
            Sub Total
          </h1>

          <h1 className="font-satoshi font-normal text-[16px] text-[#475367]">
            $8,000.00
          </h1>
        </div>

        <div className="flex flex-row items-center gap-[16px] mt-[16px]">
          <h1 className="font-satoshi font-normal text-[16px] text-[#475367] w-[60%]">
            Total
          </h1>

          <h1 className="font-satoshi font-bold text-[16px] text-[#475367]">
            $8,750.00
          </h1>
        </div>
      </div>
    </div>
  );
};

export default QuoteTable;
