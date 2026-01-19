import React, { useCallback, useState } from "react";
import GrandChildren from "./GrandChildren";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

const Children = () => {


    const {setState} = useContext(GlobalContext);

    return (
        <div>
            Children Component
            <br />
            <button onClick={() => setState('New Value')}> 
                set State
            </button>
            <GrandChildren ></GrandChildren>
        </div>
    )
}

export default Children