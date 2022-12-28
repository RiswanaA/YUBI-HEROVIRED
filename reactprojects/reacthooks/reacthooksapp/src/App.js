import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect , useContext} from "react";
import { ReactDOM } from 'react';
import Useeffectexample from './components/Useeffectexample';
import UseContextExample from './components/UseContextExample';
import DataContext from './context/DataContext';


function App() {
  return (
    <div className="App">
      <UseContextExample/>
      <Useeffectexample/>
    </div>
  );
}

export default App;


