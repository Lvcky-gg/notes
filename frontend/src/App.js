import './App.css';
import Header from './components/header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import { Route, Routes } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(
    fas,
    faChevronLeft,
  )
  return (
    <div className="container dark">
      <div className="app">
      <Header/>
      <Routes>
        <Route path="/notes" element={<NotesListPage/>}/>
        <Route path="/notes/:noteId" element={< NotePage />}/>

       

      </Routes>
      </div>
      
    </div>
  );
}

export default App;
