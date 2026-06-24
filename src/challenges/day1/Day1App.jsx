import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Workforce from "./pages/Workforce";
import Skills from "./pages/Skills";
import Reports from "./pages/Reports";

export default function Day1App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="workforce" element={<Workforce />} />
          <Route path="skills" element={<Skills />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
