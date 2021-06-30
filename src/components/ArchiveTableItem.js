import React from 'react'

function ActiveTableItem({note, removeHandler, reArchiveHandler}){
    return(
        <tr class="table__row">
            <td class="table__item">{note.name}</td>
            <td class="table__item">{note.content}</td>
            <td class="table__item">
                <button class="unarchive-button" data-id={note.id} onClick={() => {reArchiveHandler(note.id)}}>Разархивировать</button>
            </td>
        </tr>
    )
}

export default ActiveTableItem