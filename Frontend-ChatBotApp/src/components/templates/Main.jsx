import React from "react";
import BarraIzq from "../organisms/BarraIzq";
import Chat from "../organisms/Chat";

const Main = () => {
  return (
    <main className="flex">
      <BarraIzq />
      <Chat />
    </main>
  );
};

export default Main;
