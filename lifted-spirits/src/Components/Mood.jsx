import React, {useState} from "react";
import { Redirect } from 'react-router-dom';


const Mood = (props) => {
  const [redirect, setRedirect] = useState(false);

  const moods = [
    { icon: <i className="fas fa-smile"></i>, name: 'happy' },
    { icon: <i className="fas fa-frown"></i>, name: 'sad' },
    { icon: <i className="fas fa-meh"></i>, name: 'meh' },
    { icon: <i className="fas fa-laugh-squint"></i>, name: 'excited' },
    { icon: <i className="fas fa-angry"></i>, name: 'angry' },
    { icon: <i className="fas fa-meh-rolling-eyes"></i>, name: 'annoyed' }]
  
  const setMood = (name) => {
    props.setMood(name)
    setRedirect(true)
  }
  redirect === true ? <Redirect to='/activities' /> : null
  
  return (
    <div>
      {moods.map(mood => <div onClick={(e) => setMood(mood.name)}>{mood.icon}</div>)}
    </div>

  );
};

export default Mood;
