/**
 * Dependencies
 */
import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [gifSelected, setGifSelected] = useState("");
  const [theme, setTheme] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);
  const [flag, setFlag]=useState(false)

  return (
    <DataContext.Provider
      value={{
        isSearching,
        setIsSearching,
        setGifSelected,
        gifSelected,
        theme,
        setTheme,
        autocomplete,
        setAutocomplete,
        flag,
        setFlag
      }}

    >
      {children}
    </DataContext.Provider>
  );
};
