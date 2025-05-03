import React, { useState } from 'react';
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaUser, FaEnvelope, FaLock, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// Remove the local image import that's causing the error

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'job-seeker',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === 'password') {
      const strength = calculatePasswordStrength(e.target.value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      toast.success('User registered successfully');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      toast.error(err.response?.data?.message || 'Registration failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10"></div>
        
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side with image and content */}
          <div className="relative overflow-hidden bg-white text-gray-800">
            {/* Full-height image with overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Professional working" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            {/* Content overlay */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div>
                <div className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">re<span className="text-white font-extrabold">join</span></span>
                </div>
                <h2 className="text-3xl font-extrabold mb-4 text-white">Start your professional journey today</h2>
                <p className="text-gray-200 mb-6">Join thousands of job seekers and employers on our platform.</p>
                
                {/* Features list */}
                <div className="space-y-3 mt-8">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-30 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-200">Access to thousands of job listings</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-30 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-200">Smart job recommendations</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-30 rounded-full p-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-200">Connect with top employers</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="relative mt-6 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-sm italic text-gray-200">"Rejoin helped me find my dream job within weeks. The platform is intuitive and the recommendations are spot-on!"</p>
                <div className="flex items-center mt-3">
                  {/* <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-bold text-xs">JD</div> */}
                  {/* <div className="ml-2">
                    <p className="text-xs font-semibold text-white">Jane Doe</p>
                    <p className="text-xs text-gray-300">Software Developer</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with form */}
          <div className="p-8 sm:p-10 bg-white">
            <div className="text-center relative mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-sm text-gray-600">Join our community today</p>
            </div>
            
            <div className="flex gap-4 w-full mb-6">
              <button className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 p-2.5 text-white rounded-lg transition-all duration-300">
                <BsGoogle className="text-lg" />
                <span className="font-medium text-sm">Google</span>
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 p-2.5 text-white rounded-lg transition-all duration-300">
                <BsGithub className="text-lg" />
                <span className="font-medium text-sm">Github</span>
              </button>
            </div>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or register with email</span>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Create a strong password"
                  />
                </div>
                
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Password strength:</span>
                      <span className={
                        passwordStrength === 0 ? 'text-red-500' : 
                        passwordStrength === 1 ? 'text-orange-500' : 
                        passwordStrength === 2 ? 'text-yellow-500' : 
                        passwordStrength === 3 ? 'text-blue-500' : 
                        'text-green-500'
                      }>
                        {passwordStrength === 0 && 'Very weak'}
                        {passwordStrength === 1 && 'Weak'}
                        {passwordStrength === 2 && 'Medium'}
                        {passwordStrength === 3 && 'Strong'}
                        {passwordStrength === 4 && 'Very strong'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          passwordStrength === 0 ? 'bg-red-500 w-1/5' : 
                          passwordStrength === 1 ? 'bg-orange-500 w-2/5' : 
                          passwordStrength === 2 ? 'bg-yellow-500 w-3/5' : 
                          passwordStrength === 3 ? 'bg-blue-500 w-4/5' : 
                          'bg-green-500 w-full'
                        }`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className={`relative rounded-lg border ${formData.role === 'job-seeker' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} p-3 flex items-center cursor-pointer hover:border-blue-300 transition-colors`} onClick={() => setFormData({...formData, role: 'job-seeker'})}>
                    <input
                      type="radio"
                      id="job-seeker"
                      value="job-seeker"
                      checked={formData.role === 'job-seeker'}
                      onChange={handleRoleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="job-seeker" className="ml-2 flex items-center cursor-pointer">
                      <FaUserGraduate className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm font-medium">Job Seeker</span>
                    </label>
                  </div>
                  
                  <div className={`relative rounded-lg border ${formData.role === 'recruiter' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} p-3 flex items-center cursor-pointer hover:border-blue-300 transition-colors`} onClick={() => setFormData({...formData, role: 'recruiter'})}>
                    <input
                      type="radio"
                      id="recruiter"
                      value="recruiter"
                      checked={formData.role === 'recruiter'}
                      onChange={handleRoleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="recruiter" className="ml-2 flex items-center cursor-pointer">
                      <FaUserTie className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm font-medium">Recruiter</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-xs text-gray-700">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full p-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium flex justify-center items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </>
                  ) : 'Create Account'}
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-xs text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-blue-600 hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};









