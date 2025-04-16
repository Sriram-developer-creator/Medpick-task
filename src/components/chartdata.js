import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import CircularProgress from "@mui/joy/CircularProgress";

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';

const ChartData = ({ data: barData, doughnutData, sideServiceData }) => {
  const barOptions = {
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        enabled: false, // Disables tooltips
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hides the x-axis ticks
        },
      },
      y: {
        ticks: {
          display: false, // Hides the y-axis ticks
        },
      },
    },
  };

  const statCards = [
    {
      icon: (
        <TaskAltOutlinedIcon style={{ color: "#1D4ED8", fontSize: 30 }} />
      ),
      title: "Calibrated",
      value: "45%",
      bgColor: "#EFF6FF",
    },
    {
      icon: <HighlightOffOutlinedIcon style={{ color: "#BE123C", fontSize: 30 }} />,
      title: "Not Calibrated",
      value: "35%",
      bgColor: "#FFF1F2",
    },
    {
      icon: (
        <DoDisturbOnOutlinedIcon style={{ color: "#374151", fontSize: 30 }} />
      ),
      title: "Not Required",
      value: "20%",
      bgColor: '#F9FAFB',
    },
  ];

  return (
    <div>
      <section className="row mb-4">
        <div className="col-md-6 mb-4">
          <div style={{height: "100%"}} className="card">
            <div className="card-body">
              <h4 style={{ textAlign: "left", marginBottom: 30 }}>
                {barData.datasets[0].label}
              </h4>
              <div style={{height: "100%"}} className="row">
                <div
                  style={{ backgroundColor: "#F9FAFB" }}
                  className="col-md-3"
                >
                  {sideServiceData.map((dataService) => (
                    <div
                      style={{
                        backgroundColor: dataService.color,
                        padding: 20,
                        marginTop: 16,
                        borderRadius: 16,
                      }}
                      className="row"
                    >
                      <div className="d-flex justify-content-between p-0">
                        <span>{dataService.title}</span>
                        <span>{dataService.total}</span>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <CircularProgress
                          color={dataService.pieColor}
                          determinate
                          size="lg"
                          value={dataService.value}
                        >
                          {dataService.value}
                        </CircularProgress>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-9">
                  <Bar data={barData} options={barOptions} height={450} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 style={{ textAlign: "left" }}>Calibration Status</h4>
              <Doughnut data={doughnutData} />
              <div className="row">
                {statCards.map((card) => (
                  <div className="col-md-4">
                    <div
                      style={{
                        marginTop: 40,
                        backgroundColor: card.bgColor,
                        padding: 10,
                        borderRadius: 16,
                      }}
                    >
                      {card.icon}
                      <p className="card-text text-muted">{card.value}</p>
                      <p className="card-text h4">{card.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartData;
