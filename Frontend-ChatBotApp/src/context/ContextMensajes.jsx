import React, { useState } from "react";

const ContextMensajes = React.createContext({});

export const MensajesContextProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState([]);

  return <ContextMensajes.Provider value={{mensajes, setMensajes }}>
        {children}
    </ContextMensajes.Provider>;
};

export default ContextMensajes;
