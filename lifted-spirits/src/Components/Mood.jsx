import React from 'react';

const Mood = (props) => {
  const { happy } = props.mood.fields
  return ( 
    <div>
      <h1>Mood : {props.happy}</h1>
    </div>
  )
}

export default Mood;