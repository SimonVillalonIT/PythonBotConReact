import React, { useContext } from "react";
import IAContext from "../../context/Context";
import Mensaje from "../atoms/Mensaje";
import ContenedorChat from "../molecules/ContenedorChat";
import ContenedorMensajes from "../molecules/ContenedorMensajes";
import EncabezadoChat from "../molecules/EncabezadoChat";
import Escribir from "../molecules/Escribir";
import contextMensajes from "../../context/ContextMensajes";

const Chat = () => {
  const { IA } = useContext(IAContext);
  const { mensajes } = useContext(contextMensajes);
  return (
    <ContenedorChat>
      <EncabezadoChat IA={IA} />
      <ContenedorMensajes>
        {mensajes.map((mensaje, i) => (
          <Mensaje key={i} ia={mensaje.IA}>
            {mensaje.response}
          </Mensaje>
        ))}
      </ContenedorMensajes>
      <Escribir />
    </ContenedorChat>
  );
};

export default Chat;
