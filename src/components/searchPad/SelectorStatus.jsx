/* eslint-disable react/prop-types */

import { Dropdown } from "keep-react";

const SelectorStatus = ({ status, setStatus }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-sm font-semibold">Category</h1>
      <Dropdown
        className="border capitalize justify-start md:w-36 w-28 text-gray-500"
        label={status ? status : "Select"}
        size="xs"
        dismissOnClick={true}
      >
        <Dropdown.Item onClick={() => setStatus("pending")} className="w-36">
          Pending
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setStatus("dispatched")}>
          Dispatch
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default SelectorStatus;
