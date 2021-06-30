import React from 'react'

function ActiveTableItem({note, removeHandler, reArchiveHandler, editHandler}){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    function getDates(str){
        const regExpArray = [
            /\s[1-9]\/[1-9]\/\d\d\d\d/,
            /\s[0][1-9]\/[1-9]\/\d\d\d\d/,
            /\s[1-3][0-9]\/[1-9]\/\d\d\d\d/,
            /\s[1-9]\/[0][1-9]\/\d\d\d\d/,
            /\s[0][1-9]\/[0][1-9]\/\d\d\d\d/,
            /\s[1-3][0-9]\/0[1-9]\/\d\d\d\d/,
            /\s[1-9]\/[1][0-2]\/\d\d\d\d/,
            /\s[0][1-9]\/[1][0-2]\/\d\d\d\d/,
            /\s[1-3][0-9]\/[1][0-2]\/\d\d\d\d/
        ]

        let dates =[]
        let i = 0
        let result = regExpArray.reduce((prev, item) =>{
            return prev || str.match(item)
        }, null)
        while(result){
            dates.push(result)
            str = str.slice(result.index + result.length)
            result = regExpArray.reduce((prev, item) =>{
                return prev || str.match(item)
            }, null)
        }

        return dates.join(',')

    }
    return(
        <tr className="table__row">
            <td className="table__item">{note.name}</td>
            <td className="table__item">{monthNames[note.created.getMonth()]} {note.created.getDate()}, {note.created.getFullYear()}</td>
            <td className="table__item">{note.category.name}</td>
            <td className="table__item">{note.content}</td>
            <td className="table__item">{getDates(note.content)}</td>
            <td className="table__item">
                <button className="edit-button" data-id={note.id} onClick={() => {editHandler(note.id)}}>Редактировать</button>
                <button className="archive-button" data-id={note.id} onClick={() => {reArchiveHandler(note.id)}}>Архивировать</button>
                <button className="remove-button" data-id={note.id} onClick={() =>{removeHandler(note.id)}}>Удалить</button>
            </td>
    </tr>
    )
}

export default ActiveTableItem