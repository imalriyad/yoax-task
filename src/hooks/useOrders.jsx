import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

import useContextProvider from "./useContextProvider";

const useOrders = () => {
  const axiosInstance = useAxios();
  const { orders, setOrders } = useContextProvider();
  const { refetch } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await axiosInstance.get("/get-all-order");
      setOrders(response.data);
      return response.data;
    },
  });

  return { orders, refetch };
};

export default useOrders;
