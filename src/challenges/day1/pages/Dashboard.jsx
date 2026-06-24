import KPIWidget from "../components/KPIWidget";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Dashboard() {
    const kpiData = [
    { title: "Employees", value: "1250" },
    { title: "Attrition", value: "12%" },
    { title: "Hiring Rate", value: "8%" },
    { title: "Skill Coverage", value: "91%" }
  ];

  const hiringData = [
    { month: "Jan", hires: 20 },
    { month: "Feb", hires: 35 },
    { month: "Mar", hires: 30 },
    { month: "Apr", hires: 45 },
    { month: "May", hires: 55 },
    { month: "Jun", hires: 70 }
  ];

  const workforceData = [
    { month: "Jan", employees: 1000 },
    { month: "Feb", employees: 1050 },
    { month: "Mar", employees: 1100 },
    { month: "Apr", employees: 1150 },
    { month: "May", employees: 1200 },
    { month: "Jun", employees: 1250 }
  ];

  const departmentData = [
    { name: "IT", value: 450 },
    { name: "HR", value: 150 },
    { name: "Finance", value: 250 },
    { name: "Sales", value: 400 }
  ];

  const skillData = [
    { name: "Covered", value: 91 },
    { name: "Gap", value: 9 }
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
  ];
  return (
    <div>
      <h1>Workforce Analytics Dashboard</h1>

      {/* KPI CARDS */}

      <div className="kpi-grid">
        {kpiData.map((item, index) => (
          <KPIWidget
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      {/* CHARTS */}

      <div className="charts-grid">

        {/* PIE CHART */}

        <div className="chart-card">
          <h2>Department Distribution</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {departmentData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>


        {/* AREA CHART */}

        <div className="chart-card">
          <h2>Workforce Growth</h2>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={workforceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="employees"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>


        {/* LINE CHART */}

        <div className="chart-card">
          <h2>Monthly Hiring Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hiringData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="hires"
                stroke="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        

        {/* DONUT CHART */}

        <div className="chart-card">
          <h2>Skill Coverage</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
                label
              >
                <Cell fill="#00C49F" />
                <Cell fill="#FF8042" />
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}


