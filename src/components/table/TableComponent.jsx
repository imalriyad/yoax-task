"use client";
import { Button, Dropdown, Pagination } from "keep-react";
import { useState } from "react";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className=" overflow-x-hidden rounded-md text-gray-800 ">
        <div className="overflow-x-auto">
          <div className="md:flex items-center justify-between gap-4 bg-white p-6 rounded-lg">
            <h1 className=" text-xl font-semibold">Product Summary</h1>

            <div className="flex items-center md:py-0 py-6 gap-5 justify-between">
              {/* Category selector */}
              <h1 className="text-gray-600 md:block hidden font-medium">
                Show
              </h1>
              <Dropdown
                className="border border-gray-200 focus:outline-none justify-start bg-white hover:bg-white text-black"
                label="COLUMN"
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
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg font-medium uppercase text-gray-600 bg-[#F8F9FE]">
              <tr className="text-center">
                <th title="cheakbox" className="p-3 text-left">
                  #
                </th>
                <th title="id" className="p-3 text-left">
                  ID
                </th>
                <th title="date" className="p-3 text-left">
                  Date
                </th>
                <th title="status" className="p-3">
                  status
                </th>
                <th title="name" className="p-3">
                  name
                </th>
                <th title="email" className="p-3 text-center">
                  email
                </th>
                <th title="country" className="p-3 text-center">
                  Country
                </th>
                <th title="shipping" className="p-3">
                  Shipping
                </th>
                <th title="source" className="p-3">
                  Source
                </th>
                <th title="order type" className="p-3">
                  order type
                </th>
                <th title="action" className="p-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-opacity-20 border-gray-300 bg-[#FDFDFD]">
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
                  <span>19/02/2024</span>
                </td>
                <td className="px-3 py-2">
                  <span>Pending</span>
                </td>
                <td className="px-3 py-2">
                  <span>Al Riyad</span>
                </td>
                <td className="px-3 py-2">
                  <span>imalriyad@gmail.com</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>Bangladesh</span>
                </td>
                <td className="px-3 py-2">
                  <span>Dhaka</span>
                </td>
                <td className="px-3 py-2">
                  <span>ShopifyAu</span>
                </td>
                <td className="px-3 py-2">
                  <span>Customer</span>
                </td>
                <td className="px-3 py-2">
                  <span>Edit</span>
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
