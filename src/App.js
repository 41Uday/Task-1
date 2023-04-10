
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './component/Home';

import ContactUs from './ContactUs';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<ContactUs />} />
              </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
