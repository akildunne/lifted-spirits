import React from "react";
// import axios from 'axios';


const Mood = (props) => {
  const moods = [
    { icon: <i className="fas fa-smile"></i>, name: 'happy' },
    { icon: <i className="fas fa-frown"></i>, name: 'sad' },
    { icon: <i className="fas fa-meh"></i>, name: 'meh' },
    { icon: <i className="fas fa-laugh-squint"></i>, name: 'excited' },
    { icon: <i className="fas fa-angry"></i>, name: 'angry' },
    { icon: <i className="fas fa-meh-rolling-eyes"></i>, name: 'annoyed' }]
  
  // const handleSubmit = async (mood) => {
  //   const fields = {
  //     mood
  //   };
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood`;
  //     const response = await axios.post(airtableURL, { fields }, {
  //       headers: {
  //         'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //   console.log(response);
  // }

  return (
    
    <div>
      {moods.map(mood => <div onClick={(e) => props.setMood(mood.name)}>{mood.icon}</div>)}
    </div>
  );
};

export default Mood;
