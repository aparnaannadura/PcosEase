import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chatbot from "../pages/Chatbot";
import Emergency from "../pages/Emergency";
import MedicalForm from "../pages/MedicalForm";
import Groceries from "../pages/Groceries";
import Login from "../components/Login";
import Sign from "../components/Sign";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/medi" element={<MedicalForm />} />
      <Route path="/groceries" element={<Groceries />} />
    </Routes>
  );
};

export default AllRoutes;
