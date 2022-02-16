import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Create from './pages/Create';
import Notes from './pages/Notes'


function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
