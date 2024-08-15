import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import Jobs from './Pages/Jobs';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    
    
    </>
  );
};

export default App