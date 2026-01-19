import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalWrapper = ({children}) => {

    const [state, setState] = useState('Initial Value')

    const values ={
        state,
        setState
    }


    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalWrapper
 
