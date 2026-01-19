import React from "react";

const ThisComponent = (props) =>{

    props.functionCall()


    return (
        <div>
            This the name property passed here:{props.name}
            <br></br>
            This is the age of person: {props.age}
        </div>
    )
}

export default ThisComponent