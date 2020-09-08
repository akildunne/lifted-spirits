//input form
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';

const Journal = (props) => {
  const [entry, setEntry] = useState('');
  const [redirect, setRedirect] = useState(false);

  const postInfo = async (event) => {
    event.preventDefault();
    await props.setJournal(entry)
    setRedirect(true)
  }

  if (redirect === true) { return <Redirect to='/summary' /> } 

  return (
    <form onSubmit={postInfo}>
      <label htmlFor='journal'></label>
      <textarea
        name='journal'
        placeholder= 'Write about what happened today.'
        type='text'
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button type='submit'>Save</button>
    </form>
  )
}

export default Journal;