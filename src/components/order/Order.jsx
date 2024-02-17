"use client";
import { Button } from "keep-react";
import OrderModal from "./OrderModal";
import { useState } from "react";
import useOrders from "../../hooks/useOrders";
const Order = () => {
  const [showModalX, setShowModalX] = useState(false);
  const { refetch } = useOrders();
  const onClickTwo = () => {
    setShowModalX(!showModalX);
    refetch();
  };
  return (
    <>
      <div className="flex items-center justify-between">
        {/* create order button*/}
        <h1 className="text-3xl font-bold">Orders</h1>
        <Button
          onClick={onClickTwo}
          className="uppercase"
          size="xs"
          type="primary"
        >
          Create New
        </Button>
      </div>
      {/* integrating modal components */}
      <OrderModal onClickTwo={onClickTwo} showModalX={showModalX}></OrderModal>
    </>
  );
};

export default Order;
