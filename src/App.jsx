import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Automate from './pages/Automate';
import Editing from './pages/Editing';

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<Editing />} />
        <Route path="/automate" element={<Automate />} />
      </Routes>
    </div>
  );
}

export default App;
