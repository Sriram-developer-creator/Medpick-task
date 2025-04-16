import React from "react";
import AssessmentIcon from '@mui/icons-material/Assessment';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

const StatCards = () => {

  const statCards = [
    {
      icon: <AssessmentIcon style={{ color: "#DBEAFE", fontSize: 60 }} />,
      title: "Assets",
      value: 487,
    },
    {
      icon: (
        <ErrorOutlineRoundedIcon style={{ color: "#FEE2E2", fontSize: 60 }} />
      ),
      title: "Not Working",
      value: 24,
    },
    {
      icon: (
        <ErrorOutlineRoundedIcon style={{ color: "#FFEDD5", fontSize: 60 }} />
      ),
      title: "Discarded",
      value: 18,
    },
    {
      icon: (
        <AccountTreeRoundedIcon style={{ color: "#DCFCE7", fontSize: 60 }} />
      ),
      title: "Department",
      value: 12,
    },
  ];

  return (
    <div>
      <section className="row mb-4">
        {statCards.map((card) => (
          <div key={card.title} className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body text-center d-flex justify-content-center align-items-center">
                {card.icon}
                <div className="p-5">
                  <p className="card-text text-muted">{card.title}</p>
                  <p className="card-text h4">{card.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatCards;
