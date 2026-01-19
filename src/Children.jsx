import React, { useCallback, useState } from "react";
import GrandChildren from "./GrandChildren";

const Children = ({
  childrenData
})=> {



    return (
        <div>
            <GrandChildren grantChildrenData={childrenData}></GrandChildren>
        </div>
    )
}

export default Children