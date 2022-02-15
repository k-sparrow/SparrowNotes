import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import Notes from './pages/Notes'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
