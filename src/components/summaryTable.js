import React from 'react'
import SummaryTableItem from './SummaryTableItem'
import {connect} from 'react-redux'
import { notesReducer } from '../redux/notesReducer';


function SummaryTable(props){
    props.notesState.category.forEach(item => {
        item.activeCount=0
        item.archiveCount=0
    })
    props.notesState.notes.forEach(item => {
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
            {props.notesState.category.map(cat => {
                return <SummaryTableItem cat={cat} key={cat.id} />
            })}
        </table>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return state
}
export default connect(mapStateToProps)(SummaryTable)