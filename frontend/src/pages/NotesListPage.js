import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotes } from '../store/notes';

const NotesListPage = () => {
    const dispatch = useDispatch()
    const notes = useSelector((state)=> state.notes.allNotes)


  useEffect(()=>{
    dispatch(getAllNotes())

  },[dispatch])


  return (
    <div>
      {notes?.map((note)=> (<p key={note.id}>{note.body}</p>))}
    </div>
  )
}

export default NotesListPage
