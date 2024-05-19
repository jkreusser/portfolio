import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Maintenance from './components/Maintenance';
import Imprint from './components/Imprint';
import Impressum from './components/Impressum';

function App() {
  return (
    <Router>
      <div className="App flex flex-col items-center justify-center">
        <div>
          <Routes>
            <Route path="/" element={<Maintenance />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;