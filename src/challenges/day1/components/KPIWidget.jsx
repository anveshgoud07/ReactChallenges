// function KPIWidget({ title, value }) {
//   return (
//     <div className="kpi-card">
//       <h3>{title}</h3>
//       <h2>{value}</h2>
//     </div>
//   );
// }

// export default KPIWidget;



import React from 'react'
import "../styles/dashboard.css"
export default function KPIWidget({ title, value }) {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  )
}
