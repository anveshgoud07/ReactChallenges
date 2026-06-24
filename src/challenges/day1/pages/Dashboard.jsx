import React from 'react'
import KPIWidget from "../components/KPIWidget";
export default function Dashboard() {
    const kpiData = [
    {
      title: "Employees",
      value: "1250",
    },
    {
      title: "Attrition",
      value: "12%",
    },
    {
      title: "Hiring Rate",
      value: "8%",
    },
    {
      title: "Skill Coverage",
      value: "91%",
    },
  ];
  return (
    <div>
      <h1>Workforce Analytics Dashboard</h1>

      <div className="kpi-grid">
        {kpiData.map((item, index) => (
          <KPIWidget
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </div>
  )
}

