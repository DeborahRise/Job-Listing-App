import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';

const Homecards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Cards bg='bg-yellow-300'>
          <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-white text-yellow-600 rounded-lg px-4 py-2 hover:bg-yellow-600 hover:text-white"
            >
              Browse Jobs
            </Link>
          </Cards>
          <Cards bg='bg-yellow-100'>
          <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-yellow-600 text-white rounded-lg px-4 py-2 hover:bg-white hover:text-yellow-600"
            >
              Add Job
            </Link>
          </Cards>
        </div>
      </div>
    </section>
  )
}

export default Homecards