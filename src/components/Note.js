import React from "react";

const Note = props => {
  return (
    <div>
      {props.index === 0 ? (
        <h4>
          {props.text}
          <br />
        </h4>
      ) : (
        <>
          {props.text}
          <br />
        </>
      )}
    </div>
  );
};

export default Note;
