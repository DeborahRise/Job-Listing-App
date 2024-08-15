import React from 'react'
import { NavLink } from 'react-router-dom';
import deblogo from '../assets/AAP_5461.png'

const Navbar = () => {
  const iconActive = "bg-white text-yellow-700 hover:bg-yellow-900 hover:text-white rounded-md px-3 py-2"
  const iconNotActive = "text-white hover:bg-yellow-900 hover:text-white rounded-md px-3 py-2"

  const linkClass = ({ isActive }) => isActive ? iconActive : iconNotActive
  
  return (
    <nav className="bg-yellow-600 border-b border-white-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-20 w-auto rounded-full border-2 border-white"
                src={deblogo}
                alt="Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Jobs</span >
             
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink>
                
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  >Jobs</NavLink>
                
                <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar