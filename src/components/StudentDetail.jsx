
import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom'
import axios from 'axios'

// 🔹 Loader runs before the component loads
export const studentLoader = async ({ params }) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    return response.data
  } catch (error) {
    console.error('Error loading student:', error)
    return null
  }
}

function StudentDetail() {
  const navigate = useNavigate()
  const student = useLoaderData()

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-red-50 border-2 border-red-200 rounded-2xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-red-800 mb-3">Student Not Found</h3>
          <p className="text-red-600 mb-6">The student you're looking for doesn't exist or has been removed.</p>
          <button 
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            onClick={() => navigate('/')}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to List
            </span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        
        <div className="relative flex items-center gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-purple-600 text-3xl font-bold shadow-lg">
            {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{student.name}</h1>
              <span className="px-3 py-1 bg-green-400 text-green-900 text-xs font-semibold rounded-full">
                Active
              </span>
            </div>
            <p className="text-purple-100 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              @{student.username}
            </p>
          </div>
        </div>
      </div>

      
      {/* Details Card */}
<div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-6 py-4 border-b-2 border-gray-100">
    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Personal Information
    </h2>
  </div>

  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Email */}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Email
      </label>
      <p className="text-gray-800 font-medium text-lg">{student.email}</p>
    </div>

    {/* Phone */}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Phone
      </label>
      <p className="text-gray-800 font-medium text-lg">{student.phone}</p>
    </div>

    {/* Website */}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Website
      </label>
      <a href={`http://${student.website}`} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium text-lg hover:underline">
        {student.website}
      </a>
    </div>

    {/* Address */}
    {student.address && (
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Address
        </label>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-gray-800 font-medium">
            {student.address.street}, {student.address.suite}
          </p>
          <p className="text-gray-600">
            {student.address.city}, {student.address.zipcode}
          </p>
        </div>
      </div>
    )}
  </div>
</div>


      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => navigate('/')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to List
        </button>
        <button 
          className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => navigate(`/edit/${student.id}`)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Student
        </button>
      </div>
    </div>
  )
}

export default StudentDetail
