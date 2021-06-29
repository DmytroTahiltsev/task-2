import React from 'react'
import {connect} from 'react-redux'
import { notesReducer } from '../redux/notesReducer';
import {deleteNote} from '../redux/actions'

function ActiveTableItem({note, removeHandler, reArchiveHandler}){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return(
        <tr className="table__row">
            <td className="table__item">{note.name}</td>
            <td className="table__item">{monthNames[note.created.getMonth()]} {note.created.getDate()}, {note.created.getFullYear()}</td>
            <td className="table__item">{note.category.name}</td>
            <td className="table__item">{note.content}</td>
            <td className="table__item">  </td>
            <td className="table__item">
                <button className="edit-button" data-id={note.id}>Редактировать</button>
                <button className="archive-button" data-id={note.id} onClick={() => {reArchiveHandler(note.id)}}>Архивировать</button>
                <button className="remove-button" data-id={note.id} onClick={() =>{removeHandler(note.id)}}>Удалить</button>
            </td>
    </tr>
    )
}

export default connect(null, {deleteNote})(ActiveTableItem)