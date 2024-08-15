import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Homecards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default Homepage