import { Button, Label, TextInput } from "keep-react";
import CountrySlect from "../CountrySlect";
import { useForm } from "react-hook-form";
import useContextProvider from "../../hooks/useContextProvider";
import { useState } from "react";
import moment from "moment";
import useOrderId from "../../hooks/useOrderId";
import useAxios from "../../hooks/useAxios";
import swal from "sweetalert";

const Orderform = () => {
  const { country } = useContextProvider();
  const orderID = useOrderId();
  const [orderType, setOrderType] = useState("");
  const axiosInstance = useAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newOrder = {
      name: data?.name,
      email: data?.email,
      shipping: data?.shipping,
      country: country?.split(",")[0],
      status: "pending",
      source: `Shopify${country?.split(",")[1]}`,
      date: moment().format("ll"),
      orderType: orderType.toLowerCase(),
      orderID,
    };
    const res = await axiosInstance.post("/create-new-order", newOrder);
    if (res.data.insertedId) {
      swal(
        "Congrats",
        `You have Succefully created New Order
         Order Id ${orderID}`,
        "success"
      );
      reset();
    }
  };

  return (
    <form className="grid md:col-span-2 grid-cols-1 md:gap-4 gap-2">
      {/* input feild for name */}
      <span>
        {" "}
        <Label value="Name" />
        <TextInput
          {...register("name", { required: true })}
          inputMode="text"
          placeholder="Name"
          color="gray"
        />
        {errors.name?.type === "required" && (
          <p role="alert" className="text-red-500 text-xs">
            Name is required
          </p>
        )}
      </span>

      {/* Input feild for email */}
      <span>
        {" "}
        <Label value="Email" />
        <TextInput
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          inputMode="email"
          placeholder="Email"
          color="gray"
        />
        {errors.email && (
          <p role="alert" className="text-red-500 text-xs">
            {errors.email.type === "required" && "Email is required"}
            {errors.email.type === "pattern" && "Invalid email address"}
          </p>
        )}
      </span>

      {/* Provide Shipping address */}
      <span>
        {" "}
        <Label value="Shipping Address" />
        <TextInput
          {...register("shipping", { required: true })}
          placeholder="Shipping Address"
          color="gray"
        />
        {errors.shipping?.type === "required" && (
          <p role="alert" className="text-red-500 text-xs">
            Shipping Address is required
          </p>
        )}
      </span>

      <div className="flex items-center gap-4">
        {/* Select Country */}
        <span className="w-1/2">
          <Label value="Country" />
          {/* Country Selector components */}
          <CountrySlect></CountrySlect>
        </span>

        {/* Order type dropdown */}
        <span className="flex flex-col w-1/2">
          {" "}
          <Label value="Order Type" />
          <select
            onChange={(e) => setOrderType(e.target.value.toLowerCase())}
            className="max-w-full border text-sm px-2 border-gray-400 py-2 rounded-md"
          >
            <option className="text-gray-400">Order Type</option>
            <option value="Customer">Customer</option>
            <option value="Retailer">Retailer </option>
          </select>
        </span>
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        size="xs"
        className="w-full"
        type="primary"
      >
        Create
      </Button>
    </form>
  );
};

export default Orderform;
