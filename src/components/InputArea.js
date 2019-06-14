import React from "react";
import { Editor } from "draft-js";

const Style = {
  border: "1px solid purple",
  width: "100%",
};

const InputArea = props => {
  return (
    <div style={Style}>
      <h1>InputArea</h1>
      <Editor editorState={props.editorState} onChange = {props.setEditorState} />
    </div>
  );
};

export default InputArea;
