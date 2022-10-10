import React from "react";

const Input = ({ onChange, value, IA }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Escribe aqui..."
      type="text"
      className={`h-12 text-slate-200 font-mono placeholder:italic placeholder:text-slate-400 block py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm w-full mx-4 mb-2 rounded-3xl bg-zinc-400/30 ${
        IA === "alice"
          ? "focus:border-violet-700 focus:ring-violet-700"
          : "focus:border-blue-500 focus:ring-blue-500"
      }`}
    />
  );
};

export default Input;
