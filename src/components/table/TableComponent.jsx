"use client";
import { Button, Dropdown } from "keep-react";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import swal from "sweetalert";
import useContextProvider from "../../hooks/useContextProvider";
import useTotalorder from "../../hooks/useTotalorder";

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { orders, refetch, setOrders } = useContextProvider();
  const axiosInstance = useAxios();
  const totalOrder = useTotalorder();
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [column, setCoumn] = useState(10);

  console.log(currentPage);

  // pagination
  const numberOfItemInPage = 5;
  const numberOfpages = Math.ceil(totalOrder / numberOfItemInPage);
  const pages = [...Array(numberOfpages).keys()];

  useEffect(() => {
    axiosInstance
      .get(
        `/order?page=${currentPage}&size=${numberOfItemInPage}`
      )
      .then((response) => {
        setOrders(response.data);
      });
  }, [axiosInstance, currentPage, numberOfItemInPage, setOrders]);

  const handlePageination = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Validation for cheackbox - dispatch
  const handlecheackBox = (e, orderID) => {
    const ischecked = e.target.checked;
    if (ischecked) {
      setSelectedOrderId(orderID);
    } else {
      setSelectedOrderId("");
    }
  };

  // handle dispatch here
  const handleDispatch = async () => {
    swal({
      title: "Are you sure?",
      text: "Once dispatch, The status cant be change again ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosInstance.put("/status", { selectedOrderId }).then((res) => {
          console.log(res.data.modifiedCount);
          if (res.data.modifiedCount > 0) {
            refetch();
            swal("Congrats", `Your selected Order has Dispatched!`, "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className=" overflow-x-hidden rounded-md text-gray-800 ">
        <div className="overflow-x-auto">
          <div className="md:flex items-center justify-between gap-4 bg-white p-6 rounded-lg">
            <h1 className=" text-xl font-semibold">Product Summary</h1>

            <div className="flex items-center md:py-0 py-6 md:gap-5 gap-1 justify-between">
              {/* Column view*/}
              <h1 className="text-gray-600 md:block hidden font-medium">
                Show
              </h1>
              <Dropdown
                className="border border-gray-200 focus:outline-none justify-start"
                label={column === 10 ? " ALL COLUMN" : column + " COLUMN"}
                size="xs"
                type="primary"
                dismissOnClick={true}
              >
                <Dropdown.Item onClick={() => setCoumn(10)}>
                  ALL COLUMN
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCoumn(4)}>
                  4 COLUMN
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCoumn(6)}>
                  6 COLUMN
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCoumn(8)}>
                  8 COLUMN
                </Dropdown.Item>
              </Dropdown>

              {/* Dispacth button */}
              <Button
                disabled={selectedOrderId === "" ? true : false}
                onClick={handleDispatch}
                size="xs"
                className="uppercase"
                type="primary"
              >
                Dispatch
              </Button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-5 text-gray-100 py-4">
              <button
                title="previous"
                type="button"
                onClick={handlePrev}
                className="inline-flex bg-white text-black items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md "
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {pages?.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageination(page)}
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 ${
                    page === currentPage ? "activeBtn" : "bg-white text-black"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                title="next"
                type="button"
                onClick={handleNext}
                className="inline-flex bg-white text-black items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md "
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
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
              {orders?.slice(0, column).map((order, idx) => (
                <>
                  <tr
                    key={order._id}
                    className="text-center border-b border-opacity-20 border-gray-300 bg-[#FDFDFD]"
                  >
                    <td className="px-2 py-2 text-left">
                      <input
                        onChange={(e) => handlecheackBox(e, order.orderID)}
                        type="checkbox"
                        name="checkbox"
                        value="check"
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
                    <td className="px-2 py-2 capitalize">
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
