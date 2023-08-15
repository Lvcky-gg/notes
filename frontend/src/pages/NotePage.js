import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { getANote } from '../store/notes';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotePage = () => {
  const {noteId }= useParams();
  const dispatch = useDispatch();
  const note = useSelector((state)=> state.notes.note);
  useEffect(()=>{
    dispatch(getANote(noteId))

  },[dispatch, noteId])

  
  return (
    <div>
      <div className='note-header'>
        <h3>
          <Link to='/notes'>

            <FontAwesomeIcon icon='chevron-left' size='lg'/>
          </Link>
        </h3>
        

      </div>
      <textarea placeholder="Edit note" value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
