import axios from "axios";

const instance = axios.create({
  baseURL: "https://yoax-task-server.vercel.app/api/v1",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
