// here comes the routing

import './App.css';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Error from './Components/Error/Error';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Weather from './Components/Weather/Weather';
import NewsContent from './Components/News/NewsContent/NewsContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
        <Route path='/About' element={<About />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/newsContent' element={<NewsContent />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
