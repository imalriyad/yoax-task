"use client";
import { Button } from "keep-react";
const Order = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Orders</h1>
      <Button className="uppercase" size="xs" type="primary">
        Create New
      </Button>
    </div>
  );
};

export default Order;
