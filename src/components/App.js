import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import InputBox from './InputBox';
import Note from './Note';

export default function App() {

  const [notes, setNotes] = useState([]);

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    const newNote = { id: Date.now(), content: 'New Note' };
    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  function editNote(id, newContent) {
    setNotes(
      notes.map(note => (note.id === id ? { ...note, content: newContent } : note))
    );
  }
  
  return (
    <div className='App'>
      <Header />
      <InputBox onAdd={addNote}/>
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          content={note.content}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
      <Footer />
    </div>
  )
}
