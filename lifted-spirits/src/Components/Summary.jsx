import React from 'react';

const Summary = (props) => {
  const { mood, activities, journal } = props 
 
  return ( 
    <>
    <div>
        <h2>You're Done!</h2>
        <h3>Below is a summary of your day.</h3>
      </div>
      <div className='summary-body'>
        <h3 className='summary-h'><strong>Today you were mostly :</strong></h3>
        <h4>{mood}</h4>
        <h3 className='summary-h'><strong>Things you did today :</strong></h3>
      <h4>{activities.map((activity, index) => <li key={index}>{activity}</li>)}</h4>
      <h3 className='summary-h'><strong>And here is what you had to say about your day:</strong></h3>
        <h4>{journal}</h4>
      </div>
      </>
  )
}

export default Summary;