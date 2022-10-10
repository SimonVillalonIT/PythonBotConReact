import React from "react";
import Avatar from "../atoms/Avatar";

const EncabezadoChat = ({IA}) => {
  return (
    <div className="w-full p-3 bg-zinc-600 flex items-center">
      <Avatar avatar={IA} styles="bg-zinc-600 border-white h-16 w-14 border" />
      <h1 className="text-white text-3xl ml-3 ">{IA.toUpperCase()}</h1>
    </div>
  );
};

export default EncabezadoChat;
