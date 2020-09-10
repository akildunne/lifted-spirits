import React, { useEffect, useState } from "react";
import axios from 'axios';


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
      console.log(response.data.records);
      setUserInfo(response.data.records);
    };
    getUserInfo();
  }, []);

  return (
    <div className='dashboard'>
      {
        userInfo.map((mood) => (
          <>
          <h4>{mood.fields.date_entry}</h4>
          <h4>{mood.fields.mood}</h4>
          <h4>{mood.fields.activities}</h4>
          <h4>{mood.fields.journal}</h4>
            </>
        ))
      }

    </div>
    )
}

export default Dashboard;