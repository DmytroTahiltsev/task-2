import React, {useState} from 'react'
import ActiveTableItem from './ActiveTableItem';
import {connect} from 'react-redux'
import { notesReducer } from '../redux/notesReducer';
import {deleteNote, reArchiveNote} from '../redux/actions'

const ActiveTable = (props) => {
  if(!props.notes.length){
    return(
      <table className="notes-table">
        <caption><b>NO ACTIVE NOTES</b></caption>
      </table>
    )
  }

    return(
        <table className="notes-table">
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
            </tr>
            {props.notes.map((note, i) => {
                return <ActiveTableItem note={note} key={note.id} reArchiveHandler={props.reArchiveNote} removeHandler={props.deleteNote} editHandler={props.editNoteId} /> 

            })}
        </table>
    )
}


export default ActiveTable