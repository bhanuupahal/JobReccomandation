import React, { useState } from 'react';
import { SideBarDashboard } from "./SideBarDashboard";
import { FaSave, FaTimes, FaGlobe, FaMoneyBillWave, FaShieldAlt, FaBell, FaUserCog, FaEye, FaEyeSlash, FaToggleOn, FaToggleOff, FaCheck } from 'react-icons/fa';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Form state
  const [settings, setSettings] = useState({
    currency: '',
    language: '',
    phoneVisibility: 'everyone',
    profileVisibility: 'everyone',
    emailNotifications: true,
    jobAlerts: true,
    twoFactorAuth: false,
    darkMode: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRadioChange = (name, value) => {
    setSettings({
      ...settings,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    setSaveSuccess(true);
    // Hide after 3 seconds
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar ($)' },
    { code: 'EUR', name: 'Euro (€)' },
    { code: 'GBP', name: 'British Pound (£)' },
    { code: 'JPY', name: 'Japanese Yen (¥)' },
    { code: 'INR', name: 'Indian Rupee (₹)' },
    { code: 'CAD', name: 'Canadian Dollar (C$)' },
    { code: 'AUD', name: 'Australian Dollar (A$)' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'hi', name: 'Hindi' }
  ];

  return (
    <div className="flex flex-col md:flex-row relative gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <SideBarDashboard />
      <div className="w-full md:w-4/5 p-4 md:p-6 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Settings
          </h1>
          
          {/* Success Message */}
          {saveSuccess && (
            <div className="fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md animate-fadeIn z-50">
              <div className="flex items-center">
                <FaCheck className="mr-2" />
                <p>Settings saved successfully!</p>
              </div>
            </div>
          )}
        </div>

        {/* Settings Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('general')}
                className={`flex items-center whitespace-nowrap py-4 px-6 font-medium transition-colors duration-200 ${
                  activeTab === 'general' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaGlobe className="mr-2" /> General
              </button>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center whitespace-nowrap py-4 px-6 font-medium transition-colors duration-200 ${
                  activeTab === 'notifications' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaBell className="mr-2" /> Notifications
              </button>
              <button 
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center whitespace-nowrap py-4 px-6 font-medium transition-colors duration-200 ${
                  activeTab === 'privacy' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaShieldAlt className="mr-2" /> Privacy
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`flex items-center whitespace-nowrap py-4 px-6 font-medium transition-colors duration-200 ${
                  activeTab === 'advanced' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaUserCog className="mr-2" /> Advanced
              </button>
            </nav>
          </div>

          {/* Settings Form */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Currency */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <FaMoneyBillWave className="text-blue-500 mr-2" />
                      <label className="block text-lg font-medium text-gray-700">Currency</label>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Select your preferred currency for payments and transactions.</p>
                    <select 
                      name="currency"
                      value={settings.currency}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Currency</option>
                      {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Language */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <FaGlobe className="text-blue-500 mr-2" />
                      <label className="block text-lg font-medium text-gray-700">Language</label>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Choose your preferred language for the platform interface.</p>
                    <select 
                      name="language"
                      value={settings.language}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Language</option>
                      {languages.map(language => (
                        <option key={language.code} value={language.code}>{language.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Theme Toggle */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Dark Mode</h3>
                      <p className="text-gray-500 text-sm">Enable dark mode for a more comfortable viewing experience at night.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleChange({ target: { name: 'darkMode', type: 'checkbox', checked: !settings.darkMode }})}
                      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                        settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        settings.darkMode ? 'translate-x-7' : ''
                      }`}></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Email Notifications</h3>
                      <p className="text-gray-500 text-sm">Receive email notifications about your account activity.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleChange({ target: { name: 'emailNotifications', type: 'checkbox', checked: !settings.emailNotifications }})}
                      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                        settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        settings.emailNotifications ? 'translate-x-7' : ''
                      }`}></span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Job Alerts</h3>
                      <p className="text-gray-500 text-sm">Get notified when new jobs matching your profile are posted.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleChange({ target: { name: 'jobAlerts', type: 'checkbox', checked: !settings.jobAlerts }})}
                      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                        settings.jobAlerts ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        settings.jobAlerts ? 'translate-x-7' : ''
                      }`}></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Phone Visibility */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                      {settings.phoneVisibility === 'everyone' ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <label className="block text-lg font-medium text-gray-700">Phone Number Visibility</label>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Control who can see your phone number on your profile.</p>
                  
                  <div className="space-y-3">
                    <div 
                      onClick={() => handleRadioChange('phoneVisibility', 'everyone')}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        settings.phoneVisibility === 'everyone' 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        settings.phoneVisibility === 'everyone' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {settings.phoneVisibility === 'everyone' && (
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Visible to everyone</span>
                        <p className="text-sm text-gray-500">Anyone can see your phone number</p>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => handleRadioChange('phoneVisibility', 'customers')}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        settings.phoneVisibility === 'customers' 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        settings.phoneVisibility === 'customers' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {settings.phoneVisibility === 'customers' && (
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Visible to customers only</span>
                        <p className="text-sm text-gray-500">Only your customers can see your phone number</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Visibility */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-3">
                      {settings.profileVisibility === 'everyone' ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <label className="block text-lg font-medium text-gray-700">Profile Visibility</label>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">Control who can see your full profile information.</p>
                  
                  <div className="space-y-3">
                    <div 
                      onClick={() => handleRadioChange('profileVisibility', 'everyone')}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        settings.profileVisibility === 'everyone' 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        settings.profileVisibility === 'everyone' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {settings.profileVisibility === 'everyone' && (
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Visible to everyone</span>
                        <p className="text-sm text-gray-500">Anyone can see your full profile</p>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => handleRadioChange('profileVisibility', 'customers')}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        settings.profileVisibility === 'customers' 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        settings.profileVisibility === 'customers' ? 'border-blue-500' : 'border-gray-300'
                      }`}>
                        {settings.profileVisibility === 'customers' && (
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Visible to customers only</span>
                        <p className="text-sm text-gray-500">Only your customers can see your full profile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Advanced Settings */}
            {activeTab === 'advanced' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">Two-Factor Authentication</h3>
                      <p className="text-gray-500 text-sm">Add an extra layer of security to your account.</p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleChange({ target: { name: 'twoFactorAuth', type: 'checkbox', checked: !settings.twoFactorAuth }})}
                      className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                        settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        settings.twoFactorAuth ? 'translate-x-7' : ''
                      }`}></span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;

