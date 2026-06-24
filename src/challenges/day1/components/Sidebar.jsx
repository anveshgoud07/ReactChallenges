import React from 'react'
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
   <div className="sidebar">
      <h2>Workforce Analytics</h2>

      <NavLink to="/">Dashboard</NavLink>

      <NavLink to="/workforce">Workforce</NavLink>

      <NavLink to="/skills">Skills</NavLink>

      <NavLink to="/reports">Reports</NavLink>
    </div>
  )
}

