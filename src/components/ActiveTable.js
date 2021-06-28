import React from 'react'
import ActiveTableItem from './ActiveTableItem';

function ActiveTable(props){

    return(
        <table className="notes-table">
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
            </tr>
            {props.notes.filter(note => !note.archived).map((note, i) => {
                return <ActiveTableItem note={note} key={note.id} removeHandler={props.removeHandler} />

            })}
        </table>
    )
}

export default ActiveTable