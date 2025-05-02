import React, { useState } from 'react';
import { FaEdit, FaTrash, FaHeart, FaEye, FaMapMarkerAlt, FaClock, FaFilter, FaSearch, FaPlus } from 'react-icons/fa';
import { SideBarDashboard } from "./SideBarDashboard";

const jobData = [
  {
    id: 1,
    title: "BPO Jobs",
    date: "Feb-21-2018, 16:54",
    type: "Part Time",
    location: "Ambrosia",
    salary: "$54 - $60",
    status: "Published",
    applications: 12,
  },
  {
    id: 2,
    title: "Software Developer",
    date: "Mar-15-2019, 10:30",
    type: "Full Time",
    location: "New York",
    salary: "$70 - $80",
    status: "Published",
    applications: 24,
  },
  {
    id: 3,
    title: "Graphic Designer",
    date: "Jun-05-2020, 14:45",
    type: "Part Time",
    location: "Los Angeles",
    salary: "$40 - $50",
    status: "Draft",
    applications: 0,
  },
  {
    id: 4,
    title: "Marketing Specialist",
    date: "Aug-12-2021, 09:15",
    type: "Full Time",
    location: "Chicago",
    salary: "$60 - $75",
    status: "Published",
    applications: 18,
  },
  {
    id: 5,
    title: "Data Analyst",
    date: "Oct-30-2021, 11:20",
    type: "Remote",
    location: "Anywhere",
    salary: "$65 - $85",
    status: "Published",
    applications: 32,
  },
];

const MyJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter jobs based on search term and status filter
  const filteredJobs = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="flex flex-col md:flex-row relative gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <SideBarDashboard />
      <div className="w-full md:w-4/5 p-4 md:p-6 pb-20">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">My Jobs</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors shadow-md">
            <FaPlus className="mr-2" /> Post New Job
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title or location..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden
                ${selectedJob?.id === job.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => handleJobSelect(job)}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusBadgeClass(job.status)}`}>
                    {job.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-y-2 text-sm text-gray-600 mb-4">
                  <div className="w-1/2 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    {job.location}
                  </div>
                  <div className="w-1/2 flex items-center">
                    <FaClock className="mr-2 text-blue-500" />
                    {job.type}
                  </div>
                  <div className="w-1/2 flex items-center font-medium text-gray-700">
                    {job.salary}
                  </div>
                  <div className="w-1/2 flex items-center">
                    <span className="text-blue-600 font-medium">{job.applications}</span>
                    <span className="ml-1">Applications</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Posted: {job.date}
                </div>
                
                <div className="flex justify-between border-t pt-4">
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
                      <FaEdit />
                    </button>
                    <button className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                      <FaTrash />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                      <FaHeart />
                    </button>
                    <button className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-1">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Selected Job Details (Optional) */}
        {selectedJob && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6 animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Job Title</h3>
                <p className="text-gray-800">{selectedJob.title}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-gray-800">{selectedJob.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
                <p className="text-gray-800">{selectedJob.salary}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                <p className="text-gray-800">{selectedJob.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusBadgeClass(selectedJob.status)}`}>
                  {selectedJob.status}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Applications</h3>
                <p className="text-gray-800">{selectedJob.applications}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Applications
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;

