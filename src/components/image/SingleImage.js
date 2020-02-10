import React from "react";
import { Link } from "react-router-dom";


export default (props) => {
  
    return(
    <h1>{props.match.params.id}</h1>
    )

}