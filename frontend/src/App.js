import './App.css';
import Header from './components/header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/notes" element={<NotesListPage/>}/>
        <Route path="/notes/:noteId" element={< NotePage />}/>

       

      </Routes>
      
    </>
  );
}

export default App;
