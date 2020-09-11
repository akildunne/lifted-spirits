import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood/?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setUserInfo(response.data.records);
    };
    getUserInfo();
  }, []);

 
  userInfo.sort((a,b) => new Date(a.fields.date_entry) - new Date(b.fields.date_entry))
  // Date.toDateString()
 
  

  return (
    <>
      <h2>Past Entries :</h2>
    <div className="dashboard">
      {userInfo.map((mood) => (
        <div className="dash-summary">
          <h5 className="dash-item"><strong>{mood.fields.date_entry}</strong></h5>
          <h5 className="dash-item"><strong>Mood : </strong>{mood.fields.mood}</h5>
          <h5 className="dash-item"><strong>Activities : </strong>{mood.fields.activities}</h5>
          <h5 className="dash-item"><strong>Notes : </strong>{mood.fields.journal}</h5>
        </div>
      ))}
      </div>
      </>
  );
}

export default Dashboard;
