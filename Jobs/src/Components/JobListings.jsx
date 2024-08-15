import React from 'react';
import { useState, useEffect } from 'react';
import JobList from './JobList';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Spinner from './Spinner';

const JobListings = ({ isHome=false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/jobs');
        setJobs(response.data);
      } catch (error) {
        console.log('Error JobListing', error)
      } finally {
        setLoading(false)
      }
      };
    fetchJobs();
  }, []
)
    const recentjobs = isHome ? jobs?.slice(0, 3) : jobs;
  return (
    <section className="bg-yellow-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? <Spinner loading={loading} /> :
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentjobs.map((job) => ( 
                <JobList key={job.id} job={job}/>
            ))}
            
        </div>
        }
      </div>
    </section>
  )
}

export default JobListings