/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const InfoContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [country, setCountry] = useState("");
    
  const infoData = {
    setCountry,
    country,
  };
  return (
    <div>
      <InfoContext.Provider value={infoData}>{children}</InfoContext.Provider>
    </div>
  );
};

export default ContextProvider;
