import React, { useContext } from "react";
import ElegirInteligencia from "../molecules/ElegirInteligencia";
import IAContext from "../../context/Context";

const BarraIzq = () => {
  const { IA } = useContext(IAContext);

  return (
    <div className="flex flex-col items-center w-48 bg-zinc-800 h-screen pt-24">
      <ElegirInteligencia
        ia="alice"
        style={`${
          IA === "alice" ? "border border-fuchsia-700 scale-105" : null
        }`}
      />
      <ElegirInteligencia
        ia="mark"
        style={`${
          IA === "mark" ? "border border-blue-500 scale-105" : null
        }`}
      />
    </div>
  );
};

export default BarraIzq;
