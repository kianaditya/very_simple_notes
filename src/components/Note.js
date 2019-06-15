import React from "react";

const Note = props => {
  return (
    <p>
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
    </p>
  );
};

export default Note;
