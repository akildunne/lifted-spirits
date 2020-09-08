import React, {useState} from 'react';

const Summary = (props) => {
  const { mood, activities, journal } = props 
 
  return ( 
    <div>
      <h2>{mood}</h2>
      <h3>{activities.map((activity, index) => <div key={index} className='activity'>{activity}</div>)}</h3>
      <h4>{journal}</h4>
    </div>
  )
}

export default Summary;