//input form
import React, { useState } from 'react';
// import axios from 'axios';

const Journal = (props) => {
  const [entry, setEntry] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const fields = {
  //     journal
  //   };
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mood`;
  //   await axios.post(airtableURL, { fields }, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       'Content-Type': 'application/json',
  //     }
  //   });
  //   setEntry('');
  // }

  return (
    <form onSubmit={props.setJournal(entry)}>
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