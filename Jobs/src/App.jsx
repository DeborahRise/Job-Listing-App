import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import Jobs from './Pages/Jobs';
import NotFound from './Pages/NotFound';
import Jobpage from './Pages/Jobpage';
import AddJobs from './Pages/AddJobs';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='jobs/:id' element={<Jobpage />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/add-job' element={<AddJobs />} />
      </Routes>
    </Router>
    
    
    </>
  );
};

export default App