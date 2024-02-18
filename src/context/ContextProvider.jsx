/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const InfoContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [searchText, setSearchText] = useState('')
   const [orders, setOrders] = useState([]);
  const infoData = {
    setCountry,
    country,
    category,
    setCategory,
    status,
    setStatus,
    searchText,
    setSearchText,
    orders,
    setOrders,
  };
  return (
    <div>
      <InfoContext.Provider value={infoData}>{children}</InfoContext.Provider>
    </div>
  );
};

export default ContextProvider;
