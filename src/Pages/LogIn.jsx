// Assuming you're using axios for making requests
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export const LogIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', credentials);
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success('Logged in successfully!');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Failed to login. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white flex justify-center items-center">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-600 mb-6">Sign in to access your account</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 p-3 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
            <BsGoogle className="text-lg" />
            <span className="font-medium text-sm">Google</span>
          </button>

          <button className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 p-3 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
            <BsGithub className="text-lg" />
            <span className="font-medium text-sm">Github</span>
          </button>
        </div>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email or Username</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                name="email" 
                id="email"
                value={credentials.email} 
                onChange={handleChange} 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none" 
                placeholder="Enter your email or username"
                required
              />
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Link to="/resetpassword" className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Forgot password?
              </Link>
            </div>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="password" 
                name="password" 
                id="password"
                value={credentials.password} 
                onChange={handleChange} 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none" 
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              disabled={loading}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaSignInAlt className={`h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-all duration-300 ${loading ? 'animate-spin' : ''}`} />
              </span>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


