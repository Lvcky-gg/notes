import './App.css';
import Header from './components/header'
import NotesListPage from './pages/NotesListPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/notes" element={<NotesListPage/>}/>

       

      </Routes>
      
    </>
  );
}

export default App;
