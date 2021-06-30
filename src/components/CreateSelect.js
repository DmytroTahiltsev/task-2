import React, {useState} from 'react'
import { notesReducer } from '../redux/notesReducer';
import {connect} from 'react-redux'
function CreateSelect(props){

    return(
        <select name="category" id="">
            {props.notesState.category.map(cat =>{
                return (
                    <option value={cat.name}>{cat.name}</option>
                )
            })}
        </select>
    )
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(CreateSelect)