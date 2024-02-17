import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainlayout from "./layout/Mainlayout";
import ContextProvider from "./context/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <Mainlayout></Mainlayout>
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>
);
