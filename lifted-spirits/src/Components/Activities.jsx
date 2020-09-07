import React from 'react';

const Activities = (props) => {
  const { work, exercise, family_time, read, meditate, clean, errands } = props.mood.fields
  return ( 
    <div>
      <h2>Activities : </h2>
    </div>
  )
}

// {moodInfo.map(mood => (
// 	//if true render the string
//     <div>{mood.field.read ? 'read' : null}</div>
//     <div>{mood.field.exercise ? 'exercise' : null} </div>
//     etc, etc...
	
// 	//render the mood
// 	<div>{mood.field.mood}</div>
// ))

export default Mood;