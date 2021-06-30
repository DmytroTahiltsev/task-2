import React, {useState} from 'react'
import CreateSelect from './CreateSelect'
import { notesReducer } from '../redux/notesReducer';
import {connect} from 'react-redux'
import {editNote, editNoteClose} from '../redux/actions'



function EditForm(props){
    const id = props.notesState.editId
    let editNote = props.notesState.notes.find(note => note.id === id)
    console.log(editNote)
    const [name, setName] = useState(editNote.name)
    const [content, setContent] = useState(editNote.content)
    function submitHandler(e){
        e.preventDefault()
        if(name.trim() || content.trim()){
            editNote.name = name
            editNote.content = content
            editNote.category = props.notesState.category.find(item => item.name == e.target.category.value)
            props.editNote(editNote)
            setName('')
            setContent('')
            props.editNoteClose()
        }
    }
    return(
            <form className="edit-form" action="" name="edit" onSubmit={submitHandler} >
                <input type="text" name="name" placeholder="input name" value={name} onChange={event => setName(event.target.value)} /> <br />
                <textarea name="content" id="content" cols="30" rows="10" placeholder="input content" value={content} onChange={event => setContent(event.target.value)}>
                </textarea> <br />
                <CreateSelect /> <br />
                <input className="edit-form__submit" type="submit" value="Редактировать" />
            </form>
    )
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {editNote, editNoteClose})(EditForm)