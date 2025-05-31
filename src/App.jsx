import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'; // Importă componenta Nav
import Home from './Home'; // Importă componenta Home
import Contact from './About'; // Importă componenta Contact
import Servicii from './Servici';

function App() {
  return (
    <div >
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/servici' element={<Servicii />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
