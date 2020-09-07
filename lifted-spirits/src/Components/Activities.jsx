import React from 'react';

const Activities = (props) => {
  const { work, exercise, family_time, read, meditate, clean, errands } = props.mood.fields
  return ( 
    <div>
      <h2>Activities : </h2>
    </div>
  )
}

export default Mood;