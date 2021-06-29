import {CREATE_NOTE, DELETE_NOTE, REARCHIVE_NOTE} from './types'

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