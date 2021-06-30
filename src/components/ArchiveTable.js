import React, {useState} from 'react'
import ArchiveTableItem from './ArchiveTableItem';
import {connect} from 'react-redux'
import { notesReducer } from '../redux/notesReducer';
import {reArchiveNote} from '../redux/actions'

const ArchiveTable = (props) => {

    return(
        <table className="notes-table">
            <tr>
                <th>Name</th>
                <th>Content</th>
            </tr>
            {props.notes.filter(note => note.archived).map((note, i) => {
                return <ArchiveTableItem note={note} key={note.id} reArchiveHandler={props.reArchiveNote}/> 

            })}
        </table>
    )
}



export default ArchiveTable