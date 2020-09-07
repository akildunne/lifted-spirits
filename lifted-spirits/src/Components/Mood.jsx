import React from 'react';

const Mood = (props) => {
  const { happy, sad, meh, angry } = props.mood.fields
  return ( 
    <div>
      <h1>Mood : {props.happy}</h1>
    </div>
  )
}

export default Mood;