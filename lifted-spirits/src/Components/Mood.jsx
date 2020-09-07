import React from "react";


const Mood = () => {
  const moods = [
    { icon: <i className="fas fa-smile"></i>, name: 'happy' },
    { icon: <i className="fas fa-frown"></i>, name: 'sad' },
    { icon: <i className="fas fa-meh"></i>, name: 'meh' },
    { icon: <i className="fas fa-laugh-squint"></i>, name: 'excited' },
    { icon: <i className="fas fa-angry"></i>, name: 'angry' },
    { icon: <i className="fas fa-meh-rolling-eyes"></i>, name: 'annoyed' }]
  
  const handleSubmit = (name) => {
    console.log(name)
  }

  return (
    
    <div>
      {moods.map(mood => <div onClick={(e) => handleSubmit(mood.name)}>{mood.icon}</div>)}
    </div>
  );
};

export default Mood;
