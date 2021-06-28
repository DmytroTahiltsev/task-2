import React from 'react'
import SummaryTableItem from './components/SummaryTableItem'

function SummaryTable(props){
    props.category.forEach(item => {
        item.activeCount=0
        item.archiveCount=0
    })
    props.notes.forEach(item => {
        if(!item.archived){
            item.category.activeCount++
        }
        if(item.archived){
            item.category.archiveCount++
        }
    })
    return(
        <table className="summary-table">
            <tr>
                <th>Note Category</th>
                <th>Active</th>
                <th>Archieved</th>
            </tr>
            {props.category.map(cat => {
                return <SummaryTableItem cat={cat} key={cat.id} />
            })}
        </table>
    )
}
export default SummaryTable