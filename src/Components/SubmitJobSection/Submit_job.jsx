import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <Toaster />
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-3xl animate-fadeIn transition-all duration-300 hover:shadow-xl">
        <div className="text-center mb-8">
          <div className="bg-blue-100 inline-block p-3 rounded-full mb-4">
            <FaBriefcase className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Post a New Job</h2>
          <p className="text-gray-600">Fill in the details below to post your job opening</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" /> Job Title
            </label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
              placeholder="e.g. Senior Frontend Developer"
            />
          </div>
          
          <div className="group">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaFileAlt className="mr-2 text-blue-500" /> Job Description
            </label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
              placeholder="Describe the responsibilities, requirements, and benefits..."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaBuilding className="mr-2 text-blue-500" /> Company Name
              </label>
              <input
                type="text"
                name="company"
                value={jobData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                placeholder="e.g. Tech Solutions Inc."
              />
            </div>
            
            <div className="group">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" /> Location
              </label>
              <input
                type="text"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
                placeholder="e.g. New York, NY or Remote"
              />
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaMoneyBillWave className="mr-2 text-blue-500" /> Salary Range
            </label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none"
              placeholder="e.g. $80,000 - $100,000 per year"
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium text-white shadow-md transition-all duration-300 transform hover:scale-[1.02] ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg'
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting Job...
                </span>
              ) : (
                'Post Job'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitJob;

