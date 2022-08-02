import React from "react";
import loading from "../../images/cocineros.gif"
import "./loading.css"

export default function Loading(){
    return(
        <div className="loading">
            <img src={loading} alt= "loading" margin-top="600px" width="500px" height="500px"/>
        </div>

    )
}