import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { getANote } from '../store/notes';


const NotePage = () => {
  const {noteId }= useParams();
  const dispatch = useDispatch();
  const note = useSelector((state)=> state.notes.note);
  useEffect(()=>{
    dispatch(getANote(noteId))

  },[dispatch])

  
  return (
    <div>
      <h1>{note?.body}</h1>
    </div>
  )
}

export default NotePage
