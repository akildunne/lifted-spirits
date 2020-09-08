//input form
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';

const Journal = (props) => {
  const [entry, setEntry] = useState('');
  const history = useHistory()

  const postInfo = async (event) => {
    event.preventDefault();
    await props.setJournal(entry);
    await props.postInfo(entry)
    history.push('/summary')
  }

  

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