import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import Activities from "./Components/Activities";
import Dashboard from "./Components/Dashboard";
import Journal from "./Components/Journal";
import Mood from "./Components/Mood";
import Summary from "./Components/Summary";
import axios from "axios";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [activities, setActivities] = useState([]);
  const [journal, setJournal] = useState("");
  const [dash, setDash] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push("./");
  }, []);

  const postInfo = async (newJournal) => {
    const fields = {
      mood,
      activities,
      journal: newJournal,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood`;
    let response = await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(journal);
  };

  return (
    <div className="page-container">
      <header>
        <h1>Lifted Spirits</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Mood setMood={setMood} />
          </Route>
          <Route path="/activities">
            <Activities setActivities={setActivities} />
          </Route>
          <Route path="/journal">
            <Journal setJournal={setJournal} postInfo={postInfo} />
          </Route>
          <Route path="/summary">
            <Summary mood={mood} activities={activities} journal={journal} />
          </Route>
          <Route path="/dashboard">
            <Dashboard setDash={setDash} />
          </Route>
        </Switch>
      </main>
      <footer>
        <nav>
          <div className="footer-icon">
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
            <Link to="/dashboard">
              <i className="fas fa-chart-pie"></i>
            </Link>
            <i className="far fa-calendar-alt"></i>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
