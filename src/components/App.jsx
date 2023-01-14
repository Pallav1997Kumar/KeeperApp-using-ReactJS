import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = React.useState([]);

  function addNote(newNote){
    setNotes(function(prevNote){
      return ([...prevNote, newNote]);
    });
  }

  function deleteItem(id){
    setNotes(function(prevNote){
      return prevNote.filter(function(note, index){
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map(function(todoNote, index){
        return(<Note 
          key = {index}
          id = {index}
          title = {todoNote.title}
          content = {todoNote.content}
          onDelete = {deleteItem}
        />);
      })}
      <Footer />
    </div>
  );
}

export default App;
