import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Automate from './pages/Automate';

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/automate" element={<Automate />} />
      </Routes>
    </div>
  );
}

export default App;
