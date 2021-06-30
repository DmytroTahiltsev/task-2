import React, {useState, useEffect} from 'react'
import ActiveTable from './components/ActiveTable'
import SummaryTable from './components/summaryTable'
import ArchiveTable from './components/ArchiveTable'
import CreateForm from './components/CreateForm'
import EditForm from './components/EditForm'
import {connect} from 'react-redux'
import { notesReducer } from './redux/notesReducer';
import {deleteNote, reArchiveNote, editNoteId} from './redux/actions'

function App(props) {
  /*const [category, setCategory] = useState([
      {id:1, name: 'Task', activeCount: 0, archiveCount: 0},
      {id:2, name:'Random Thought', activeCount: 0, archiveCount: 0},
      {id:3, name:'Idea', activeCount: 0, archiveCount: 0}
    ])
  const [notes, setNotes] = useState([
      {id: 1, name: 'Shopping list', created: new Date(2021, 3, 21), category: category[0], content: 'Tomatoes, bread', archived: false},
      {id: 2, name: 'The theory of evolution', created: new Date(2021, 3, 27), category: category[1], content: 'The evolution is good thing', archived: false},
      {id: 3, name: 'New Feature', created: new Date(2021, 4, 5), category: category[2], content: 'Implement new feature 3/5/2021 to 5/5/2021', archived: false},
      {id: 4, name: 'William Gaddis', created: new Date(2021, 4, 7), category: category[2], content: 'Power doesnt context', archived: false},
      {id: 5, name: 'Books', created: new Date(2021, 4, 15), category: category[0], content: 'The Lean Startup', archived: false},
      {id: 6, name: 'Note 6', created: new Date(2021, 4, 30), category: category[0], content: 'Note 6 content', archived: false},
      {id: 7, name: 'Note 7', created: new Date(2021, 5, 2), category: category[1], content: 'Note 7 content', archived: true},
    ])*/


  //const editNote = props.notesState.notes.find(note => note.id == editItemId)
console.log(props)
  return (
    <div className="wrapper">
        <div className="active-table">
          <ActiveTable notes={props.notesState.notes} reArchiveNote={props.reArchiveNote}  deleteNote={props.deleteNote} editNoteId={props.editNoteId} />
        </div>
        <div className="create-button__wrapper">
          <CreateForm />
        </div>
        <div className="edit-form__wrapper">
          {props.notesState.editId && <EditForm />}

        </div>
        <div className="summary-table__wrapper">
          <SummaryTable notes={props.notesState.notes} category={props.notesState.category} />
        </div>
        <div className="archive-table__wrapper">
          <ArchiveTable notes={props.notesState.notes} reArchiveNote={props.reArchiveNote}/>
        </div>
    </div>
  );
}
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps, {deleteNote, reArchiveNote, editNoteId})(App);
