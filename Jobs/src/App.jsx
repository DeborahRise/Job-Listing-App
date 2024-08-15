import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Homecards from './Components/Homecards';
import JobListings from './Components/JobListings';
import ViewAllJobs from './Components/ViewAllJobs';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Homecards />
    <JobListings/>    
    <ViewAllJobs />
    </>
  );
};

export default App