import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Mood = (props) => {
  const [redirect, setRedirect] = useState(false);

  const moods = [
    { icon: <i className="far fa-smile"></i>, name: "Happy" },
    { icon: <i className="far fa-frown"></i>, name: "Sad" },
    { icon: <i className="far fa-meh"></i>, name: "Meh" },
    { icon: <i className="far fa-laugh-squint"></i>, name: "Excited" },
    { icon: <i className="far fa-angry"></i>, name: "Angry" },
    { icon: <i className="far fa-meh-rolling-eyes"></i>, name: "Annoyed" },
  ];

  const setMood = (name) => {
    props.setMood(name);
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to="/activities" />;
  }

  return (
    <div>
      <h2>Hello Finley!</h2>
      <h3>How are you feeling today?</h3>
      <div className="mood-body">
        {moods.map((mood, index) => (
          <div key={index} onClick={(e) => setMood(mood.name)}>
            <div className="mood-icon">{mood.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mood;
