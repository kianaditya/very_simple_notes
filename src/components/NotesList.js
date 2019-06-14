import React, { Component } from 'react'

const Style = {
    border: '1px solid blue',
    width: '100%'
}

export class NotesList extends Component {
    render() {
        return (
            <div style={Style}>
                <h1>NotesList</h1>
            </div>
        )
    }
}

export default NotesList
