import React from "react";
import Note from "./Note";

const Style = {
  border: "1px solid blue",
  width: "100%",
};

const NotesList = props => {
  const note = props.notes.map((note,index) => {
    return (
      <div onClick={() => props.loadNote(index)}>
        {note.map((textLine,index) => (
          <>
            <Note text={textLine.text} index={index} />
          </>
        ))}
        <hr />
      </div>
    );
  });
  const notesCount = props.notes.length
  return (
    <div style={Style}>
      <h1>NotesList {notesCount} notes</h1>
      <button onClick={props.clearSavedNotes}>Clear Notes</button>
      <>{note}</>
    </div>
  );
};

export default NotesList;
