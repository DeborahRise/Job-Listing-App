import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import Jobs from './Pages/Jobs';
import NotFound from './Pages/NotFound';
import Jobpage from './Pages/Jobpage';
import AddJobs from './Pages/AddJobs';
import EditJob from './Pages/EditJob';
import Toastify from './Components/Toastify';


const App = () => {
  return (
    <>
    <Router>
      <Toastify />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='jobs/:id' element={<Jobpage />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/add-job' element={<AddJobs />} />
        <Route path='edit-job/:id' element={<EditJob />} />
      </Routes>
    </Router>
    
    
    </>
  );
};

export default App