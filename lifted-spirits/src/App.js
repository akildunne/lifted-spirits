import React, { useEffect, useState } from 'react';
// import Activities from './Activities';
// import Dashboard from './Dashboard';
// import Journal from './Journal';
// import Mood from './Mood';
// import Summary from './Summary';
import axios from 'axios';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      // Base and key aren't accessible for some reason
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood/?Grid%20View`
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        }
      });
      console.log(response.data.records)
      setUserInfo(response.data.records);
    }
    getUserInfo();
  }, []);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
