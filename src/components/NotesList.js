import React from "react";
import { convertToRaw } from 'draft-js';

const Style = {
  border: "1px solid blue",
  width: "100%",
};

const NotesList = props => {
    const currentContent = props.editorState.getCurrentContent()
    const text = convertToRaw(currentContent).blocks.map(row =>  <p>{row.text}</p>)
  return (
    <div style={Style}>
      <h1>NotesList</h1>
      <>{console.log(convertToRaw(currentContent).blocks[0].text)}</>
      <>{text}</>
    </div>
  );
};

export default NotesList;
