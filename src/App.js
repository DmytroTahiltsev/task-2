import React, {useState, useEffect} from 'react'
import ActiveTable from './components/ActiveTable'
import SummaryTable from './components/summaryTable'


function App() {
  const [category, setCategory] = useState([
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
    ])
 
  function removeHandler(id){
    setNotes(notes.filter(note => note.id !== id))
    console.log(notes)
  }
  function reArchiveHandler(id){
    setNotes(notes.map(note => {
      if(note.id === id){
        note.archived = !note.archived
      }
      return note
    }))
  }
  useEffect(() => {
    console.log(notes)
  }, [notes])
  return (
    <div className="wrapper">
        <div className="active-table">
          <ActiveTable notes={notes} category={category} removeHandler={removeHandler}  reArchiveHandler={reArchiveHandler} />
        </div>
        <div className="create-button__wrapper">
            <button className="create-button">Create Note</button>
        </div>
        <div className="edit-form__wrapper"></div>
        <div className="summary-table__wrapper">
          <SummaryTable  notes={notes} category={category}/>
        </div>
        <div className="archive-table__wrapper"></div>
    </div>
  );
}

export default App;
