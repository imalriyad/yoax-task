import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useOrders = () => {
  const axiosInstance = useAxios();
  const { data: orders, refetch } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await axiosInstance.get("/get-all-order").then((res) => {
        return res?.data;
      });
        return response
    },
  });
  return { orders, refetch };
};

export default useOrders;
