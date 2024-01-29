import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Conta from "./Components/Conta/Conta";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
