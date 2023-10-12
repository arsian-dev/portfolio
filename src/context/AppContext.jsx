'use client'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const GlobalContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('sin contexto')
  }
  return context
}

const ContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <AppContext.Provider
      value={{
        sideActive: isActive,
        setIsActive
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
