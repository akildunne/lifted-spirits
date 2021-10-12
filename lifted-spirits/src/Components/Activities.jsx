import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Activities = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [collectActivities, setCollectActivities] = useState([]);

  const activitiesIcons = [
    { icon: <i className="fas fa-utensils"></i>, name: "Date" },
    { icon: <i className="fas fa-briefcase"></i>, name: "Work" },
    { icon: <i className="fas fa-running"></i>, name: "Exercise" },
    { icon: <i className="fas fa-baby"></i>, name: "Family" },
    { icon: <i className="fas fa-book"></i>, name: "Read" },
    { icon: <i className="fas fa-pray"></i>, name: "Meditate" },
    { icon: <i className="fas fa-broom"></i>, name: "Clean" },
    { icon: <i className="fas fa-video"></i>, name: "Movie" },
    { icon: <i className="fas fa-luggage-cart"></i>, name: "Travel" },
  ];

  const compileActivities = (name, index) => {
    setCollectActivities((prevCollectActivities) => [
      ...prevCollectActivities,
      name,
    ]);
    setSelected([...selected, index]);
  };

  const setActivities = (name) => {
    props.setActivities(name);
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/journal" />;
  }

  return (
    <>
      <div>
        <h2>Okay, Thanks!</h2>
        <h3>What did you do today?</h3>
      </div>
      <div className="activity-body">
        {activitiesIcons.map((activity, index) => (
          <div
            key={index}
            onClick={() => compileActivities(activity.name, index)}
          >
            <div
              className={
                selected.includes(index) ? "click-icon" : "activity-icon"
              }
            >
              {activity.icon}
            </div>
          </div>
        ))}
        <div className="activity-save">
         <button
            className="save-button"
            onClick={() => setActivities(collectActivities)}
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};

export default Activities;
