import React from 'react'

export const JobCategoryCard = ({ data }) => {
  const { title, icon, color, count } = data
  
  // Map color names to tailwind classes
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200',
    pink: 'bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-200',
    green: 'bg-green-100 text-green-600 border-green-200 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200',
    red: 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200 hover:bg-yellow-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200 hover:bg-indigo-200',
    teal: 'bg-teal-100 text-teal-600 border-teal-200 hover:bg-teal-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 hover:bg-cyan-200',
    amber: 'bg-amber-100 text-amber-600 border-amber-200 hover:bg-amber-200',
    rose: 'bg-rose-100 text-rose-600 border-rose-200 hover:bg-rose-200',
  }
  
  const iconColorMap = {
    blue: 'text-blue-600',
    pink: 'text-pink-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    indigo: 'text-indigo-600',
    teal: 'text-teal-600',
    cyan: 'text-cyan-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
  }
  
  const colorClass = colorMap[color] || 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
  const iconColorClass = iconColorMap[color] || 'text-gray-600'

  return (
    <div className={`${colorClass} rounded-xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between`}>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-white rounded-full p-3 shadow-md flex items-center justify-center">
          <div className={iconColorClass}>
            {icon}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm opacity-80">{count}</p>
      </div>
    </div>
  )
}


