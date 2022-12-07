import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Menu/Menu"
// import Card from './components/Card/Card';

function App() {
  return (
   <>
   <Header />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </BrowserRouter>
   {/* <div>
    <Card name="Play Ground"
    description= "Playground for children"
    street="Some Street 5, Tel Aviv" 
    imageUrl="https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509_960_720.jpg"
    website="https://www.toplinerec.com/"
    phone="03-5550000"
    />
   </div> */}

   </>
  );
}

export default App;
