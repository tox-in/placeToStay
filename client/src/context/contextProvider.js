import React, { createContext, useContext } from 'react'

const initialState = {
    currentUser:null
}
const context = createContext(initialState)

export const useValue = ()=>{
    return useContext(context)
}

const contextProvider = ({children}) => {
  return (
    <Context.Provider value={}>{children}</Context.Provider>
  )
}

export default contextProvider
