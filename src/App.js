import React from "react";
import Signup from "./pages/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}
