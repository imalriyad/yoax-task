/* eslint-disable react/prop-types */
"use client";
import { Dropdown } from "keep-react";

const Selector = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-sm font-semibold">{title}</h1>
      <Dropdown
        className="border justify-start md:w-36 w-28 text-gray-500"
        label="All"
        size="xs"
        dismissOnClick={true}
      >
        <Dropdown.Item className="w-36">All</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default Selector;
