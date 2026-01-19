import React, { useCallback, useState } from "react";

const Children = () => {

    const [value, setValue] = useState(0)

    const addition = useCallback((a,b) => {
        return a+b

    }, [value])


    return (
        <div>Children</div>
    )
}

export default Children