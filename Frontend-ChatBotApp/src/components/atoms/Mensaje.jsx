import React from "react";

const Mensaje = (props) => {
  return (
    <div
      className={`${
        props.ia ? "justify-start" : "justify-end"
      } w-full flex`}
    >
      <div
        className={`${
          props.ia
            ? (props.ia === "alice" ? "bg-fuchsia-700" : "bg-blue-500")
            : "bg-green-500 right-0"
        } py-2 px-3 w-fit my-5 mx-6 rounded-2xl`}
      >
        <p className="text-white">{props.children}</p>
      </div>
    </div>
  );
};

export default Mensaje;
