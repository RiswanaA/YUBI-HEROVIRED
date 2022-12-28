import React ,{useContext, useEffect, useState} from "react";
import DataContext from "../context/DataContext";

export default function UseContextExample(){
    const ctx=useContext(DataContext);
    console.log(ctx);
 const decrement=()=>{
    ctx.setCounterWithContext((prev)=>{
        return prev-1;
    });
 }
 return(
    <>
    <p>USECONTEXTWITHEXAMPLE.JS</p>
    <button onClick={decrement}>DECREASE BUTTON WITH CONTEXT</button>
    <p>{ctx.counterwithcontext}</p>
    </>
 )
}
