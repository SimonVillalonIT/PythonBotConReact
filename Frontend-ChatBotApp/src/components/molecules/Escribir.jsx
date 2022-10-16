import React, { useContext, useState } from "react";
import { Fab } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Input from "../atoms/Input";
import contextIA from "../../context/Context";
import ContextMensajes from "../../context/ContextMensajes";
import { vocesDisponibles, vozAlice, vozMark } from "../../Voz/Voz";
import { peticionAlice, peticionMark } from "../../api/callsApi";

const Escribir = () => {
  console.log(vocesDisponibles);
  const [mensaje, setMensaje] = useState("");
  const { IA } = useContext(contextIA);

  const { setMensajes } = useContext(ContextMensajes);

  const enviarMensajeAlice = async (envio) => {
    if (envio.lenght === 0) return;
    setMensajes((mensajesAnteriores) =>
      mensajesAnteriores.concat({
        response: envio,
        IA: null,
      })
    );
    console.log(localStorage.getItem("conversacion"));
    const response = await peticionAlice({
      content: envio,
      conversacion: localStorage.getItem("conversacion"),
    });
    setMensajes((mensajesAnteriores) =>
      mensajesAnteriores.concat({
        response: response.response.replace(/IA:/g, ""),
        IA: response.IA,
      })
    );
    localStorage.setItem(
      "conversacion",
      `${localStorage.getItem("conversacion")} IA: ${response.response}`
    );
    vozAlice(response.response.replace(/IA:/g, ""));
  };

  const enviarMensajeMark = async (envio) => {
    if (envio.lenght === 0) return;
    setMensajes((mensajesAnteriores) =>
      mensajesAnteriores.concat({
        response: envio,
        IA: null,
      })
    );
    console.log(localStorage.getItem("conversacion"));
    const response = await peticionMark({
      content: envio,
      conversacion: localStorage.getItem("conversacion"),
    });
    setMensajes((mensajesAnteriores) =>
      mensajesAnteriores.concat({
        response: response.response.replace(/IA:/g, ""),
        IA: response.IA,
      })
    );
    localStorage.setItem(
      "conversacion",
      `${localStorage.getItem("conversacion")} IA: ${response.response}`
    );
    vozMark(response.response.replace(/IA:/g, ""));
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setMensaje(e.target.value);
  };
  return (
    <div className="h-min relative flex justify-center">
      <Input IA={IA} value={mensaje} onChange={(e) => handleOnChange(e)} />
      <div className="absolute w-min h-min top-1 right-6">
        <Fab
          onClick={() => {
            if (IA === "alice") {
              localStorage.setItem(
                "conversacion",
                `${
                  localStorage.getItem("conversacion")
                    ? localStorage.getItem("conversacion")
                    : ""
                } \nHumano:${mensaje}`
              );
              enviarMensajeAlice(mensaje);
              setMensaje("");
            } else {
              localStorage.setItem(
                "conversacion",
                `${
                  localStorage.getItem("conversacion")
                    ? localStorage.getItem("conversacion")
                    : ""
                } \nHumano:${mensaje}`
              );
              enviarMensajeMark(mensaje);
              setMensaje("");
            }
          }}
          size="small"
          color={IA === "alice" ? "secondary" : "primary"}
          aria-label="send"
        >
          <SendIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Escribir;
