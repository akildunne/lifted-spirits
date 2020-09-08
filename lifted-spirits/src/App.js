import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
// import Activities from './Components/Activities';
// import Dashboard from './Components/Dashboard';
import Journal from './Components/Journal';
import Mood from "./Components/Mood";
// import Summary from './Components/Summary';
import axios from "axios";
import "./App.css";


function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [mood, setMood] = useState("");
  // const [activity, setActivity] = useState([]);
  const [journal, setJournal] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood/?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      // console.log(response.data.records);
      setUserInfo(response.data.records);
    };
    getUserInfo();
  }, []);
  return (
    <div className="page-container">
      <header>
        <h1>Lifted Spirits</h1>
        </header>
      <main>
        {/* <Switch> */}
          <Route path="/mood">
            <Mood setMood={setMood} />
          </Route>
          <Route path='/journal'>
            <Journal setJournal={setJournal} />
            </Route>
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default App;
