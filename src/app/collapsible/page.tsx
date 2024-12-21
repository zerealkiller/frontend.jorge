'use client'
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface SubRow {
  label: string;
  value: string;
}

interface CollapsibleRowProps {
  mainLabel: string;
  mainValue: string;
  subRows: SubRow[];
}

const CollapsibleRow: React.FC<CollapsibleRowProps> = ({ mainLabel, mainValue, subRows }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className="w-full">
      {/* Card Header */}
      <div
        className={`flex items-center justify-between p-4 border-x border-t rounded-t-lg bg-white shadow-md transition-transform ${open ? "border-b-0" : "border-b"
          }`}
      >
        <span className="font-medium text-lg">{mainLabel}</span>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-sm">{mainValue}</span>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-gray-500"
            aria-label="Toggle"
          >
            {open ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Collapsible Content - Styled Smaller Card */}
      <Collapsible.Content
        className={`flex flex-col gap-2 items-start p-3 border-x border-b rounded-b-lg bg-gray-100 shadow-inner transition-transform duration-300 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
      >
        {subRows.map((row, index) => (
          <div
            key={index}
            className="flex justify-between w-full px-4 py-2 bg-white rounded-md shadow-sm border text-sm"
          >
            <span className="text-gray-700 font-medium">{row.label}</span>
            <span className="font-bold text-blue-600">{row.value}</span>
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

const CollapsibleTable: React.FC = () => {
  const data: CollapsibleRowProps[] = [
    {
      mainLabel: "Apto 1",
      mainValue: "19% ↓",
      subRows: [{ label: "Cuarto útil", value: "2%" }],
    },
    {
      mainLabel: "Apto 2",
      mainValue: "17% ↑",
      subRows: [
        { label: "Cuarto útil 2", value: "4%" },
        { label: "Cuarto útil 3", value: "4%" },
        { label: "Balcón", value: "5%" },
      ],
    },
    {
      mainLabel: "Apto 3",
      mainValue: "19% ↓",
      subRows: [{ label: "Cuarto útil", value: "2%" }],
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      {data.map((row, index) => (
        <CollapsibleRow
          key={index}
          mainLabel={row.mainLabel}
          mainValue={row.mainValue}
          subRows={row.subRows}
        />
      ))}
    </div>
  );
};

export default CollapsibleTable;