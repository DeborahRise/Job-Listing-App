import React from 'react'
import jobs from '../JsonFolder/jobs.json';
import JobList from './JobList';

const JobListings = ({ isHome=false}) => {
    const recentjobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-yellow-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentjobs.map((job) => ( 
                <JobList key={job.id} job={job}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings