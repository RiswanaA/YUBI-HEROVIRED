import React,{useState,useContext} from "react";
import DataContext from "./DataContext";

export default function ContextProvider({children}){
let [counterwithcontext, setCounterWithContext]=useState(0);
// let [isLoggedIn, setIsLoggedIn]= useState(false);

return(
<DataContext.Provider value={{counterwithcontext,setCounterWithContext}}>
    {/* // setIsLoggedIn, isLoggedIn}}> */}
    {children}
</DataContext.Provider>

)}
