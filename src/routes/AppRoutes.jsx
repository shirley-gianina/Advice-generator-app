import React from "react";
import { Routes, Route } from "react-router-dom";
import AdvicePage from "../pages/AdvicePage/AdvicePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdvicePage />} />
    </Routes>
  );
};

export default AppRoutes;
