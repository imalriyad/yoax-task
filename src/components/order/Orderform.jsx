import { Dropdown, Label, TextInput } from "keep-react";
import CountrySlect from "../CountrySlect";

const Orderform = () => {
  return (
    <form className="grid md:col-span-2 grid-cols-1 md:gap-4 gap-2">
      <span>
        {" "}
        <Label htmlFor="#id-8" value="Name" />
        <TextInput id="#id-8" placeholder="Name" color="gray" />
      </span>
      <span>
        {" "}
        <Label htmlFor="#id-8" value="Email" />
        <TextInput id="#id-8" placeholder="Email" color="gray" />
      </span>
      <span>
        {" "}
        <Label htmlFor="#id-8" value="Country" />
        <CountrySlect></CountrySlect>
      </span>
      <span>
        {" "}
        <Label htmlFor="#id-8" value="Shipping Address" />
        <TextInput id="#id-8" placeholder="Shipping Address" color="gray" />
      </span>
      <span>
        {" "}
        <Label htmlFor="#id-8" value="Order Type" />
        <Dropdown
          label="Order Type"
          size="xs"
          type="primary"
          dismissOnClick={true}
        >
          <Dropdown.Item>Customer</Dropdown.Item>
          <Dropdown.Item>Retailer</Dropdown.Item>
        </Dropdown>
      </span>
    </form>
  );
};

export default Orderform;
