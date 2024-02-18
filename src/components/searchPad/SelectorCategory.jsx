/* eslint-disable react/prop-types */
"use client";
import { Dropdown } from "keep-react";
const SelectorCategory = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-sm font-semibold">Category</h1>
      <Dropdown
        className="border capitalize justify-start md:w-36 w-28 text-gray-500"
        label={category ? category : "Select"}
        size="xs"
        dismissOnClick={true}
      >
        <Dropdown.Item onClick={() => setCategory("retailer")} className="w-36">
          Retailer
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setCategory("customer")}>
          Customer
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default SelectorCategory;
