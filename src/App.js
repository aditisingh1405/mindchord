import './css/App.css';
import TopBar from './components/TopBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Survey from './components/Survey';
import Score from './components/Score';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/survey' element={<Survey />} />
          <Route exact path='/score' element={<Score />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
