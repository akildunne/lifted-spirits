import React, { useState } from 'react';

const Activities = (props) => {
  // const [activities, setActivities] = useState([]);


  const activitiesIcons = [
    { icon: <i class="fas fa-utensils"></i>, name: 'date' },
    { icon: <i class="fas fa-briefcase"></i>, name: 'work' },
    { icon: <i class="fas fa-running"></i>, name: 'exercise' },
    { icon: <i class="fas fa-baby"></i>, name: 'family' },
    { icon: <i class="fas fa-book"></i>, name: 'read' },
    { icon: <i class="fas fa-pray"></i>, name: 'meditate' },
    { icon: <i class="fas fa-broom"></i>, name: 'clean' },
    { icon: <i class="fas fa-video"></i>, name: 'movie' },
    { icon: <i class="fas fa-luggage-cart"></i>, name: 'travel' },
    { icon: <i class="fas fa-clipboard-list"></i>, name: 'errands'}
  ]

  const collectActivities = []

  const compileActivities = (name) => {
    if (!collectActivities.includes(name)) {
      collectActivities.push(name)
    } 
    console.log(collectActivities)
  }

  return ( 
    <div>
      <h2>Hello</h2>
      {activitiesIcons.map(activity => <div onClick={() => compileActivities(activity.name)}>{activity.icon}</div>)}
      <button onClick={() => props.setActivities(collectActivities)}>Save</button>
  </div>
  )
}

export default Activities;