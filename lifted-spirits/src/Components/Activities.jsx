import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Activities = (props) => {
  const [redirect, setRedirect] = useState(false);

  const activitiesIcons = [
    { icon: <i className="fas fa-utensils"></i>, name: 'date' },
    { icon: <i className="fas fa-briefcase"></i>, name: 'work' },
    { icon: <i className="fas fa-running"></i>, name: 'exercise' },
    { icon: <i className="fas fa-baby"></i>, name: 'family' },
    { icon: <i className="fas fa-book"></i>, name: 'read' },
    { icon: <i className="fas fa-pray"></i>, name: 'meditate' },
    { icon: <i className="fas fa-broom"></i>, name: 'clean' },
    { icon: <i className="fas fa-video"></i>, name: 'movie' },
    { icon: <i className="fas fa-luggage-cart"></i>, name: 'travel' },
    { icon: <i className="fas fa-clipboard-list"></i>, name: 'errands'}
  ]

  const collectActivities = []

  const compileActivities = (name) => {
    if (!collectActivities.includes(name)) {
      collectActivities.push(name)
    } 
    console.log(collectActivities)
  }

  const setActivities = (name) => {
    props.setActivities(name)
    setRedirect(true)
  }

  if (redirect === true) { return <Redirect to='/journal' /> } 

  return ( 
    <div>
      <h2>Hello</h2>
      {activitiesIcons.map((activity, index) => <div key={index} onClick={() => compileActivities(activity.name)}>{activity.icon}</div>)}
      <button onClick={() => setActivities(collectActivities)}>Save</button>
  </div>
  )
}

export default Activities;