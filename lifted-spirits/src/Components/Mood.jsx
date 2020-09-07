import React from 'react';
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// library.add(faUserAstronaut)

const Mood = () => {
  const moods = ['happy', 'sad', 'meh', 'excited', 'anxious', 'annoyed']
  return (
        <div>
        {moods.map(mood => (
        if (mood === 'happy') {
        <img></img>
      } else if(mood === 'sad') {
        <img src=></img>
      } else if(mood === 'meh') {
        <img></img>
      } else if(mood === 'excited') {
        <img></img>
      } else if(mood === 'anxious') {
        <img></img>
      } else (mood === 'annoyed') {
        <img></img>
        }
        
        ))}
        </div>
  )
}


dom.watch()
export default Mood;