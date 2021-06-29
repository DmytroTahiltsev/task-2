import {CREATE_NOTE, DELETE_NOTE, REARCHIVE_NOTE} from './types'

const category = [
    {id:1, name: 'Task', activeCount: 0, archiveCount: 0},
    {id:2, name:'Random Thought', activeCount: 0, archiveCount: 0},
    {id:3, name:'Idea', activeCount: 0, archiveCount: 0}
  ]
const notes = [
    {id: 1, name: 'Shopping list', created: new Date(2021, 3, 21), category: category[0], content: 'Tomatoes, bread', archived: false},
    {id: 2, name: 'The theory of evolution', created: new Date(2021, 3, 27), category: category[1], content: 'The evolution is good thing', archived: false},
    {id: 3, name: 'New Feature', created: new Date(2021, 4, 5), category: category[2], content: 'Implement new feature 3/5/2021 to 5/5/2021', archived: false},
    {id: 4, name: 'William Gaddis', created: new Date(2021, 4, 7), category: category[2], content: 'Power doesnt context', archived: false},
    {id: 5, name: 'Books', created: new Date(2021, 4, 15), category: category[0], content: 'The Lean Startup', archived: false},
    {id: 6, name: 'Note 6', created: new Date(2021, 4, 30), category: category[0], content: 'Note 6 content', archived: false},
    {id: 7, name: 'Note 7', created: new Date(2021, 5, 2), category: category[1], content: 'Note 7 content', archived: true},
  ]


const initialState = {
    category: category,
    notes: notes
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_NOTE:
            return {...state, notes: [...state.notes, action.payload]}
        case DELETE_NOTE:
            return {...state, notes: state.notes.filter(note => note.id !== action.payload)}
        case REARCHIVE_NOTE:
            return {...state, notes: state.notes.map(note => {
                if(note.id === action.payload){
                    note.archived = !note.archived
                }
                return note
            })} 
        default: return state
    }

}