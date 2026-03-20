import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedfilters, setFilters] = useState({})
  const [SelectedData, setselectedData] = useState({})

  return (
    <AppContext.Provider value={{
      selectedfilters,
      setFilters,
      SelectedData,
      setselectedData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);