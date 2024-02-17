import { useContext } from "react";
import { InfoContext } from "../context/ContextProvider";

const useContextProvider = () => {
  const infoData = useContext(InfoContext);
  return infoData;
};

export default useContextProvider;
