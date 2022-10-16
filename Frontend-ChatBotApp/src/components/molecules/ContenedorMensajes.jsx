import React from 'react'

const ContenedorMensajes = ({children}) => {
  return (
    <div className="w-full h-full overflow-y-auto">
        {children}
    </div>
  )
}

export default ContenedorMensajes