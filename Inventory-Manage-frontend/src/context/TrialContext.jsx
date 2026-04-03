import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedfilters, setFilters] = useState({})
  const [SelectedData, setselectedData] = useState({})
  const [showmodal, setshowmodal] =useState(false)
  return (
    <AppContext.Provider value={{
      selectedfilters,
      setFilters,
      SelectedData,
      setselectedData,
      showmodal,
      setshowmodal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);