//input form
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Journal = (props) => {
  const [entry, setEntry] = useState("");
  const history = useHistory();

  const postInfo = async (event) => {
    event.preventDefault();
    await props.setJournal(entry);
    await props.postInfo(entry);
    history.push("/summary");
  };

  return (
    <>
      <div>
        <h2>Almost Done!</h2>
        <h3>Anything noteworth you'd like to add about your day?</h3>
      </div>
      <form onSubmit={postInfo}>
        <label htmlFor="journal"></label>
        <textarea
          className="journal-input"
          name="journal"
          placeholder="Write about what happened today."
          type="text"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button type="submit" className="save-button">
          SAVE
        </button>
      </form>
    </>
  );
};

export default Journal;
