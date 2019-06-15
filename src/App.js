import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NotesList from "./components/NotesList";
import InputArea from "./components/InputArea";
import { EditorState, ContentState } from "draft-js";

const App = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [notes, setNotes] = useState([]);

  const saveNote = () => {
    const contentState = editorState.getCurrentContent();
    const blocks = contentState.getBlocksAsArray();
    setNotes([...notes, blocks]);
    setEditorState(EditorState.createEmpty());
  };

  const clearSavedNotes = () => {
    setNotes([]);
  };

  const loadNoteOnClick = index => {
    const newNotes = notes.filter(element => notes.indexOf(element) !== index);
    setNotes([...newNotes]);
    const contentState = ContentState.createFromBlockArray(notes[index]);
    setEditorState(EditorState.createWithContent(contentState));
  };

  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col sm={4}>
          <NotesList
            notes={notes}
            clearSavedNotes={clearSavedNotes}
            loadNote={loadNoteOnClick}
          />
        </Col>
        <Col sm={8}>
          <InputArea
            editorState={editorState}
            setEditorState={setEditorState}
            saveNote={saveNote}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
