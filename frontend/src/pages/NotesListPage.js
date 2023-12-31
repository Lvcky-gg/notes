import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../store/notes";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.allNotes);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      {notes?.map((note) => (
        <ListItem key={note.id} note={note}></ListItem>
      ))}
    </div>
  );
};

export default NotesListPage;
