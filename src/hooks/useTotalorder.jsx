import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useTotalorder = () => {
  const axiosInstance = useAxios();
  const [totalOrder, setTotalOrder] = useState(0);
  useEffect(() => {
    axiosInstance.get("total-order").then((res) => {
      setTotalOrder(res.data.totalOrder);
    });
  }, [axiosInstance]);
  return totalOrder;
};

export default useTotalorder;
