import React from "react";
import { testIncomeStatementData } from "./testData";

type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik} className="hover:bg-gray-100 transition duration-300">
        {config.map((val: any) => {
          return (
            <td className="p-4 text-sm text-gray-700 border-b border-gray-200 whitespace-nowrap" key={val.label}>
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider bg-gray-50 border-b border-gray-200"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">{renderedHeaders}</thead>
        <tbody className="divide-y divide-gray-200">{renderedRows}</tbody>
      </table>
    </div>
  );
};


export default Table;
