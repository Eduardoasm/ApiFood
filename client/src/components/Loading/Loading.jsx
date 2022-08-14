import React from "react";
import loading from "../../images/cocineros.gif"
import "./loading.css"

export default function Loading(){
    return(
        <div className="loading">
            <img className="gifLoad" src={loading} alt= "loading"/>
        </div>

    )
}