

import React,{useState,useEffect, useContext} from "react";
import DataContext from "../context/DataContext";


export default function Useeffectexample () {

  const ctx=useContext(DataContext);
    console.log(ctx);

  const increment=()=>{
//    setCounterWithContext(CounterWithContext+1)
    ctx.setCounterWithContext((prev)=>{
    return prev+1;

})
}
//   const decrement=()=>{
//     setCounter(counter-1)

// }
// function testing(){
//   setTest(test+1)
// }
// function handleClick(){
//   console.log(arr)
// }

// useEffect(()=>{
//   const fetchApi =async ()=>{
//      let response =await fetch("https://dummyjson.com/products")
//     let data =await response.json()
//      console.log(data)
//      let products =data.products;
//      setArr([...arr,products])
//   }
//   fetchApi()
  
// },[counter,test])
  






 return (
    <div>
      <button onClick={increment}>+</button>
      {/* <button onClick={decrement}>-</button> */}
      {/* <button onClick={testing}>{test}</button> */}
      <p>{ctx.counterwithcontext}</p>

      {/* <button onClick={handleClick}>click</button> */}
    </div>
  );
}
// export default 