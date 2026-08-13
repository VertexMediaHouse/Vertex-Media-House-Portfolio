import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Automate from './pages/Automate';
import Edit from './pages/Editing';
import Design from './pages/Design';
import RealEstate from './pages/Realestate';
import Manufacturing from './pages/Manufacturing';
import Jewelry from './pages/Jewelry';
import Retail from './pages/Retail';


function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/design" element={<Design />} />
        <Route path="/automate" element={<Automate />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/retail" element={<Retail />} />
      </Routes>
    </div>
  );
}

export default App;
