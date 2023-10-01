import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
