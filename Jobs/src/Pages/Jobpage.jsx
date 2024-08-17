import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Jobpage = () => {
  const [job, setJob] =useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.log('jobPage.jsx', error);
      }
}; 
  getJob();
}, []);
  

  return (
    <div>
      {job?.title}
    </div>
  );  
};
export default Jobpage;