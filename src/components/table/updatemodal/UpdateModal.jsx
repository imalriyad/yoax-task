/* eslint-disable react/prop-types */
"use client";

import { Button, Label, Modal, TextInput } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import swal from "sweetalert";
import useOrders from "../../../hooks/useOrders";
const UpdateModal = ({ openUpdatemodal, showModalz, updateOrder }) => {
  const { handleSubmit, register } = useForm();
  const axiosInstance = useAxios();
  const { refetch } = useOrders();

  // handle update order
  const onSubmit = async (data) => {
    const updatedOrder = {
      name: data?.name,
      email: data?.email,
      shipping: data?.shipping,
      orderId: updateOrder.orderID,
    };

    const res = await axiosInstance.patch(`/update-order`, updatedOrder);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      swal("Congrats", `You order has Succefully Updated!`, "success");
    }
  };

  return (
    <>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="md"
        show={showModalz}
        onClose={openUpdatemodal}
      >
        <Modal.Header>Update Order</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="grid md:col-span-2 grid-cols-1 md:gap-4 gap-2">
              {/* input feild for name */}
              <span>
                {" "}
                <Label value="Name" />
                <TextInput
                  {...register("name")}
                  value={updateOrder?.name}
                  inputMode="text"
                  placeholder="Name"
                  color="gray"
                />
              </span>

              {/* Input feild for email */}
              <span>
                {" "}
                <Label value="Email" />
                <TextInput
                  {...register("email")}
                  value={updateOrder?.email}
                  inputMode="email"
                  placeholder="Email"
                  color="gray"
                />
              </span>

              {/* Provide Shipping address */}
              <span>
                {" "}
                <Label value="Shipping Address" />
                <TextInput
                  {...register("shipping")}
                  value={updateOrder?.shipping}
                  placeholder="Shipping Address"
                  color="gray"
                />
              </span>

              <div className="flex items-center gap-4"></div>
              <Button
                onClick={handleSubmit(onSubmit)}
                size="xs"
                className="w-full"
                type="primary"
              >
                Update Order
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateModal;
