import React, { useCallback, useState } from "react";

const Children = ({
    data,
    dataChangingFunction,
    anotherFunction
})=> {



    return (
        <div>
            {data}
            <br/>
            <button onClick={() => {
                let anotherFunctionString = anotherFunction()
                dataChangingFunction(anotherFunctionString)
            }

            }>
                change
            </button>
        </div>
    )
}

export default Children