import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
// import { Container } from './styles';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default CustomRoutes;
