import React, { useContext } from "react";
import IAContext from "../../context/Context";
import ContextMensajes from "../../context/ContextMensajes";
import Avatar from "../atoms/Avatar";

const ElegirInteligencia = (props) => {
  const { IA, setIA } = useContext(IAContext);
  const { setMensajes } = useContext(ContextMensajes);
  return (
    <div
      onClick={() => {
        setIA(props.ia);
        IA !== props.ia ? setMensajes([]) : null;
        IA !== props.ia ? localStorage.clear("conversacion") : null;
      }}
      className={`w-32 mt-5 bg-zinc-600 h-34 flex justify-center items-center rounded-2xl duration-100 ${
        props.style ? props.style : null
      }`}
    >
      <Avatar avatar={props.ia} styles="w-30 h-40 cursor-pointer" />
    </div>
  );
};

export default ElegirInteligencia;
