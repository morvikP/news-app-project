import Header from './components/Header';
import Home from './pages/Home';
import Crime from './pages/Crime';
import Finance from './pages/Finance';
import Happen from './pages/Happen';
import Politic from './pages/Politic';
import Footer from './components/Footer';
import"./assets/css/main.css";
import"./assets/css/crime.css";
import"./assets/css/finance.css";
import"./assets/css/politic.css";
import"./assets/css/happen.css";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/crime' element={<Crime />}/>
          <Route path='/finance' element={<Finance />}/>
          <Route path='/happen' element={<Happen />}/>
          <Route path='/politic' element={<Politic />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;