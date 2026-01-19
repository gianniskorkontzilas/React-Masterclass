import React from "react";
import { GlobalContext } from './context/GlobalContext'
import { useContext } from "react";


const GrandChildren = ( ) => {

    const {state} = useContext(GlobalContext);

    return (
        <div>
            GrandChildren Component
            <br />
            {state}
            <br />
           
        </div>

    )
}

export default GrandChildren