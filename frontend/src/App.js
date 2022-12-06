import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './components/home ';
import AddSongs from "./components/addsongs";
import Login from "./components/login";
import React from 'react';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route> 
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/addsongs' element={<AddSongs></AddSongs>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
