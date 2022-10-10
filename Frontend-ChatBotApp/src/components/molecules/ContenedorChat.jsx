import React from 'react'

const ContenedorChat = ({children}) => {
  return (
    <div className="pt-24 w-3/5 ml-36 flex flex-col justify-between bg-zinc-800 h-screen">
        {children}
    </div>
  )
}

export default ContenedorChat