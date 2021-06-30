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

  return (
    <div className="wrapper">
        <div className="active-table">
          <ActiveTable notes={props.notesState.notes.filter(note => !note.archived)} reArchiveNote={props.reArchiveNote}  deleteNote={props.deleteNote} editNoteId={props.editNoteId} />
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
          <ArchiveTable notes={props.notesState.notes.filter(note => note.archived)} reArchiveNote={props.reArchiveNote}/>
        </div>
    </div>
  );
}
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps, {deleteNote, reArchiveNote, editNoteId})(App);
