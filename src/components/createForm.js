import React, {useState} from 'react'
import { notesReducer } from '../redux/notesReducer';
import {connect} from 'react-redux'
import {createNote} from '../redux/actions'
import CreateSelect from './CreateSelect'
function CreateForm(props){
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    function submitHandler(e){
        e.preventDefault()
        
        if(name.trim() || content.trim()){
            console.log(e.target.category.value)
            const newNote = {
                id: Date.now(),
                name: name,
                created: new Date(),
                category: props.notesState.category.find(item => item.name == e.target.category.value),
                content: content
            }
            props.createNote(newNote)
            setName('')
            setContent('')
        }
    }

    return(
        <form className="create-form" action="" name="create" onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="input name" value={name} onChange={event => setName(event.target.value)} /> <br />
            <textarea name="content" id="content" cols="30" rows="10" placeholder="input content" value={content} onChange={event => setContent(event.target.value)}>
            </textarea> <br />
            <CreateSelect /> <br />
            <button className="create-button">Create Note</button>
        </form>
    )
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {createNote})(CreateForm)