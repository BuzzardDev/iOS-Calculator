import { createContext, useContext, useState } from 'react'

const Data = createContext()

export const useData = () => useContext(Data)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('')

  return (
      <Data.Provider value={{ data, setData }}>
        {children}
      </Data.Provider>
  )
}
