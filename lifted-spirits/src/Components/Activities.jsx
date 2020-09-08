import React from 'react';

const Activities = (props) => {
  const activity = [
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
  return ( 
    <div>
      <h2>Activities : </h2>
    </div>
  )
}

export default Mood;