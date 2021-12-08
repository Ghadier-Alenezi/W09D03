import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
// import Admin from "./components/Admin";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/admin" element={<Admin />} /> */}

      </Routes>
    </>
  );
};

export default App;
