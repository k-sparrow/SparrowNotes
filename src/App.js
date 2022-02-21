import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import mainTheme from './assets/themes';
import Layout from './components/Layout';
import Create from './pages/Create';
import Notes from './pages/Notes';
import Archive from './pages/Archive';


function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
