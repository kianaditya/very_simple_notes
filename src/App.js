import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotesList from './components/NotesList'
import InputArea from './components/InputArea'
import { EditorState } from 'draft-js'

const App = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col sm={4}>
          <NotesList editorState={editorState} />
        </Col>
        <Col sm={8}>
          <InputArea
            editorState={editorState}
            setEditorState={setEditorState}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
