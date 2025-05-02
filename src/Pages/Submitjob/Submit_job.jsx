import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SubmitJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!jobData.title || !jobData.description || !jobData.company || !jobData.location || !jobData.salary) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post('http://localhost:5000/api/jobs', jobData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      console.log(response.data);
      toast.success('Job posted successfully');
      setJobData({
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to post job. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="p-20 bg-[#e9f3f9] flex justify-center items-center">
      <Toaster />
      <div className="w-2/5">
        <h2 className="text-xl font-semibold py-2">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="font-medium">Job Description</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              className="w-full h-24 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="company" className="font-medium">Company Name</label>
            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="location" className="font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="salary" className="font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              className="w-full h-8 rounded mt-2 outline-none p-2"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded mt-2 font-medium"
              disabled={loading}
            >
              {loading ? 'Posting...' : 'Post Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitJob;
