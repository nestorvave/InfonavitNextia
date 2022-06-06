/**
 * Dependencies
 */
import { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [status, setStatus] = useState({
    auth: false,
    token: "",
  });
  const [effect, setEffect] = useState(false);

  return (
    <DataContext.Provider
      value={{
        status,
        setStatus,
        effect,
        setEffect,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
