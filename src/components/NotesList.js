import React from "react";
import Note from "./Note";

const Style = {
  border: "1px solid blue",
  width: "100%",
};

const NotesList = props => {
  const note = props.notes.map(note => {
    return (
      <>
        {note.map(textLine => (
          <>
            <Note text={textLine.text} />
          </>
        ))}
        <hr />
      </>
    );
  });

  return (
    <div style={Style}>
      <h1>NotesList</h1>
      <button onClick={props.clearSavedNotes}>Clear Notes</button>
      <>{note}</>
    </div>
  );
};

export default NotesList;
