import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './pages/CreateEvent';
import Events from './pages/Events';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
