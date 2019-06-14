import React from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotesList from './components/NotesList'
import InputArea from './components/InputArea'

const App = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col sm={4}>
          <NotesList />
        </Col>
        <Col sm={8}>
          <InputArea />
        </Col>
      </Row>
    </Container>
  )
}

export default App
