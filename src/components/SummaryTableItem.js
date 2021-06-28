import React from 'react'

function SummaryTableItem({cat}){
    return(
        <tr className="table__row">
            <td className="table__item">{cat.name}</td>
            <td className="table__item">{cat.activeCount}</td>
            <td className="table__item">{cat.archiveCount}</td>
        </tr>
    )
}
export default SummaryTableItem