import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";


export default function DashboardLayout() {
  return (
    <div>
         <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
    </div>
  )
}

