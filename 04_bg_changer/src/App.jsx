// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//    <>
//    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

//     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
//          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
//           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
//            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>
//       </div>
//     </div>
//    </div>
//    </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Register from './Register';

export default function MultiStepForm() {
  // Step tracker (1, 2, or 3)
  const [step, setStep] = useState(1);

  // Single object state to hold all form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Universal input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Retaining previous values while updating a specific key
    setFormData((prev) => ({
      ...prev,       // 1. Copy all existing fields
      [name]: value, // 2. Dynamically overwrite the specific field changing
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted Successfully! Check your console for data.');
    console.log('Final Submission Data:', formData);
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      
      {/* Progress Indicator Banner */}
      <div className="flex justify-between items-center mb-6 text-sm font-medium text-gray-500">
        <span className={step === 1 ? "text-blue-600 font-bold" : ""}>1. Personal</span>
        <span>➔</span>
        <span className={step === 2 ? "text-blue-600 font-bold" : ""}>2. Account</span>
        <span>➔</span>
        <span className={step === 3 ? "text-blue-600 font-bold" : ""}>3. Review</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* STEP 1: PERSONAL DETAILS */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>
        )}

        {/* STEP 2: ACCOUNT DETAILS */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW & SUBMIT */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Review Your Info</h2>
            <div className="bg-gray-50 p-4 rounded-md space-y-2 text-sm text-gray-700">
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Username:</strong> {formData.username}</p>
            </div>
          </div>
        )}

        {/* NAVIGATION BUTTON CONTROLS */}
        <div className="flex justify-between pt-4 border-t border-gray-100">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition"
            >
              Back
            </button>
          )}
          
          <div className="ml-auto">
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>

      </form>
    </div>

    <Register/>
    </>
  );
}

