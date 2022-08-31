import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import LandingOne from "./pages/LandingOne";
import LandingThree from './pages/LandingThree';
import LandingTwo from "./pages/LandingTwo";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <div >
      <Home />
      <Routes>
        <Route path='/landing-one' element={<LandingOne/>} />
        <Route path='/landing-two' element={<LandingTwo/>} />
        <Route path='/landing-three' element={<LandingThree/>} />
      </Routes>
 
    </div>
  );
}

export default App;
