import { createContext, useContext, useState } from "react";

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {

  const [view, setview] = useState("dashboard")
  const [show, setshow] = useState(true)
  return (
    <PagesContext.Provider
      value={{
        view,
        setview,
        show,
        setshow
      }}>
      {children}
    </PagesContext.Provider>
  )
}
export const usePagesContext = () => useContext(PagesContext)