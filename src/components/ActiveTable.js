import React, {useState} from 'react'
import ActiveTableItem from './ActiveTableItem';
import {connect} from 'react-redux'
import { notesReducer } from '../redux/notesReducer';
import {deleteNote, reArchiveNote} from '../redux/actions'

const ActiveTable = (props) => {

    return(
        <table className="notes-table">
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
            </tr>
            {props.notesState.notes.filter(note => !note.archived).map((note, i) => {
                return <ActiveTableItem note={note} key={note.id} reArchiveHandler={props.reArchiveNote} removeHandler={props.deleteNote} /> 

            })}
            <tr>
                <td></td>
            </tr>

        </table>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return state
}

export default connect(mapStateToProps, {deleteNote, reArchiveNote})(ActiveTable)