"use client";
import { Button, Dropdown, Pagination } from "keep-react";
import { useState } from "react";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className=" overflow-x-hidden rounded-md text-gray-800 ">
        <div className="overflow-x-auto">
          <div className="md:flex items-center justify-between gap-4 bg-white p-3 rounded-lg">
            <h1 className="md:text-lg text-xl font-semibold">
              Product Summary
            </h1>

            <div className="flex items-center md:pt-0 py-3 gap-5 justify-between">
              {/* Category selector */}
              <Dropdown
                className="border border-gray-200 focus:outline-none justify-start bg-white hover:bg-white text-black"
                label="ALL COLUMN"
                size="xs"
                dismissOnClick={true}
              >
                <Dropdown.Item>ALL COLUMN</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <Button size="xs" className="uppercase" type="primary">
                Dispatch
              </Button>
            </div>
            <Pagination
              currentPage={currentPage}
              onPageChange={(val) => setCurrentPage(val)}
              totalPages={4}
              iconWithOutText={true}
              prevNextShape="roundSquare"
            />
          </div>
          <table className="min-w-full text-xs ">
            <thead className="rounded-t-lg text-gray-600 bg-[#F8F9FE]">
              <tr className="text-right">
                <th title="Ranking" className="p-3 text-left">
                  No
                </th>
                <th title="Ranking" className="p-3 text-left">
                  ID
                </th>
                <th title="Team name" className="p-3 text-left">
                  Team
                </th>
                <th title="Wins" className="p-3">
                  W
                </th>
                <th title="Losses" className="p-3">
                  L
                </th>
                <th title="Win percentage" className="p-3">
                  Win%
                </th>
                <th title="Games behind" className="p-3">
                  GB
                </th>
                <th title="Home games" className="p-3">
                  Home
                </th>
                <th title="Away games" className="p-3">
                  Away
                </th>
                <th title="Last 10 games" className="p-3">
                  L10
                </th>
                <th title="Current streak" className="p-3">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-right border-b border-opacity-20 border-gray-300 bg-[#FDFDFD]">
                <td className="px-3 py-2 text-left">
                  <input
                    type="checkbox"
                    name="All"
                    className="w-3 h-3 rounded-sm accent-default-600"
                  />
                </td>
                <td className="px-3 py-2 text-left">
                  <span>1</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <span>MIA</span>
                </td>
                <td className="px-3 py-2">
                  <span>31</span>
                </td>
                <td className="px-3 py-2">
                  <span>17</span>
                </td>
                <td className="px-3 py-2">
                  <span>.646</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>0</span>
                </td>
                <td className="px-3 py-2">
                  <span>17-5</span>
                </td>
                <td className="px-3 py-2">
                  <span>14-12</span>
                </td>
                <td className="px-3 py-2">
                  <span>8-2</span>
                </td>
                <td className="px-3 py-2">
                  <span>W2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
