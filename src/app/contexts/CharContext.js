'use client'

import { createContext, useState, useContext } from "react"

const CharContext = createContext(undefined)

export const CharContextProvider = ({children}) => {
    const [char, setChar] = useState({
        genre:"m"
    })
    const introduce = (genre, race, type) =>{
        const subject ={
            genre,
            race,
            type
        }
        setChar(subject);
    }
    
    return (
        
        <CharContext.Provider 
            value ={{
                char,
                setChar,
                introduce
            }}
        >
            {children}
        </CharContext.Provider>
    )
}

export const useCharContext = () => {
    const context = useContext(CharContext);
    if (!context) {
      throw new Error(`useAppContext tiene que ser usado dentro del provider`);
    }
    return context;
}

export default CharContext;