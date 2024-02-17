"use client";
import { Button, Dropdown, Pagination } from "keep-react";
import { useState } from "react";
import useOrders from "../../hooks/useOrders";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { orders } = useOrders()

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
                className="border border-gray-200 focus:outline-none justify-start"
                label="COLUMN"
                size="xs"
                type="primary"
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

          {/* Main table start here */}
          <table className="min-w-full text-xs">
            {/* Table header start here */}
            <thead className="rounded-t-lg font-medium uppercase text-gray-600 bg-[#F8F9FE]">
              <tr className="text-center">
                <th title="cheakbox" className="p-2 text-left">
                  #
                </th>
                <th title="id" className="p-2 text-left">
                  No
                </th>
                <th title="id" className="p-2 text-left">
                  Order ID
                </th>
                <th title="date" className="p-2 text-center">
                  Date
                </th>
                <th title="status" className="p-2">
                  status
                </th>
                <th title="name" className="p-2">
                  name
                </th>
                <th title="email" className="p-2 text-center">
                  email
                </th>
                <th title="country" className="p-2 text-center">
                  Country
                </th>
                <th title="shipping" className="p-2">
                  Shipping
                </th>
                <th title="source" className="p-2">
                  Source
                </th>
                <th title="order type" className="p-2">
                  order type
                </th>
                <th title="action" className="p-2">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, idx) => (
                <>
                  <tr
                    key={order._id}
                    className="text-center border-b border-opacity-20 border-gray-300 bg-[#FDFDFD]"
                  >
                    <td className="px-2 py-2 text-left">
                      <input
                        type="checkbox"
                        name="All"
                        className="w-3 h-3 rounded-sm accent-default-600"
                      />
                    </td>
                    <td className="px-2 py-2 text-left">
                      <span>{idx + 1}</span>
                    </td>
                    <td className="px-2 py-2 text-left">
                      <span>{order?.orderID}</span>
                    </td>
                    <td className="px-2 py-2 text-left">
                      <span>{order?.date}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span
                        className={`p-1 uppercase rounded-sm text-white ${
                          order?.status === "pending"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      >
                        {order?.status}
                      </span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.name}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.email}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.country}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.shipping}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.source}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>{order?.orderType}</span>
                    </td>
                    <td className="px-2 py-2">
                      <span>
                        <img
                          src="https://i.postimg.cc/brYBRpzh/edit.png"
                          alt=""
                          className="w-[15px] h-[15px] mx-auto cursor-pointer object-cover"
                        />
                      </span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
