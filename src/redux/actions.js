import {CREATE_NOTE, DELETE_NOTE, REARCHIVE_NOTE, EDIT_NOTE_ID, EDIT_NOTE, EDIT_NOTE_CLOSE} from './types'

export function createNote(note){
    return{
        type: CREATE_NOTE,
        payload: note
    }
}

export function deleteNote(id){
    return{
        type: DELETE_NOTE,
        payload: id
    }
}
export function reArchiveNote(id){
    return{
        type: REARCHIVE_NOTE,
        payload: id
    }
}
export function editNoteId(id){
    return{
        type: EDIT_NOTE_ID,
        payload: id
    }
}
export function editNote(note){
    return{
        type: EDIT_NOTE,
        payload: note
    }
}
export function editNoteClose(){
    return{
        type: EDIT_NOTE_CLOSE,
        payload: null
    }
}