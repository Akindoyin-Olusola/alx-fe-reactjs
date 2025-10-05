import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 sm:p-4 md:p-8 rounded-lg shadow-md max-w-xs md:max-w-sm mx-auto">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-4 border-blue-500 mb-4"
      />
      <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">John Doe</h1>
      <p className="text-sm md:text-lg text-gray-600 text-center">Developer at Example Co</p>
    </div>
  );
}

export default UserProfile;
