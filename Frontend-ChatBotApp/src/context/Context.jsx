import React, { useState } from "react";

const Context = React.createContext({});

export const IAContextProvider = ({ children }) => {
  const [IA, setIA] = useState("alice");

  return <Context.Provider value={{ IA, setIA }}>
        {children}
    </Context.Provider>;
};
export default Context;
