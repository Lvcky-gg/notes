import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotes } from '../store/notes';

const NotesListPage = () => {
    const dispatch = useDispatch()
    const notes = useSelector((state)=> state.notes.allNotes)
    console.log(notes)


  useEffect(()=>{
    dispatch(getAllNotes())

  },[dispatch])


  return (
    <div>
      notes
    </div>
  )
}

export default NotesListPage
