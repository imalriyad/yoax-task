import Order from "../components/order/Order";
import SearchPad from "../components/searchPad/SearchPad";
import TableComponent from "../components/table/TableComponent";

const Mainlayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-8 lg:px-14 px-4 py-4">
      <Order></Order>
      <SearchPad></SearchPad>
      <TableComponent></TableComponent>
    </div>
  );
};

export default Mainlayout;
