import React from "react";
import blogData from "../data/blog";


function Header(){
    return (
        <div>
         <h1>{blogData.name}</h1>
        </div>    
    )
}

export default Header