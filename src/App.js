import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import FieldGame from "./components/FieldGame/FieldGame";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <FieldGame/>
      <Footer/>
    </div>
  );
}

export default App;
