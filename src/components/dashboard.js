import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Sidebar from "./sidebar";
import StatCards from "./statcards";
import ChartData from "./chartdata";
import FooterTable from "./footertable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const doughnutData = (labels, data, colors) => ({
  labels,
  datasets: [
    {
      data,
      backgroundColor: colors,
      borderWidth: 1,
    },
  ],
});

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Services",
      data: [80, 20, 40, 65, 30, 45],
      backgroundColor: "#60A5FA",
    },
  ],
};

const barData2 = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Incidents",
      data: [60, 10, 20, 95, 10, 65],
      backgroundColor: "#60A5FA",
    },
  ],
};

const sideServiceData = [
    {
      value: 48,
      title: "Open",
      total: 24,
      color: "#ECFDF5",
      pieColor: "success",
    },
    {
      value: 48,
      title: "Closed",
      total: 18,
      color: "#FFF1F2",
      pieColor: "danger",
    },
    {
      value: 45,
      title: "Expenditure",
      total: "45k",
      color: "#EFF6FF",
      pieColor: "neutral",
    },
  ];

const Dashboard = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-4 overflow-auto">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h5">Dashboard</h2>
          <div className="d-flex align-items-center">
            <span>Non Bio Medical</span>
            <span className="mx-3">Vijayanagar</span>
            <span className="badge bg-secondary">A</span>
          </div>
        </header>

        {/* Hospital Info */}
        <section className="row mb-4">
          <div className="col-md-8 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">City General Hospital</h3>
                <p className="card-text text-muted">Active Client</p>
                <p className="card-text display-6">₹2,50,00,000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary text-white">
              <div className="card-body d-flex justify-content-center align-items-center">
                <button className="btn btn-light">Generate Report</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stat Cards */}
        <StatCards />

        {/* Charts Section */}
        <ChartData
          data={barData}
          doughnutData={doughnutData(
            ["Total", "Expire Soon", "Requested"],
            [50, 30, 20],
            ["#10B981", "#F59E0B", "#A78BFA"]
          )}
          sideServiceData={sideServiceData}
        />
        <ChartData
          data={barData2}
          doughnutData={doughnutData(
            ["Total", "Expire Soon", "Requested"],
            [10, 20, 70],
            ["#60A5FA", "#FB7185", "#9CA3AF"]
          )}
          sideServiceData={sideServiceData}
        />

        <FooterTable />
      </main>
    </div>
  );
};

export default Dashboard;
