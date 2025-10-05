import React from 'react';

function UserProfile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h1>
      <p className="text-gray-600 text-center">Developer at Example Co</p>
    </div>
  );
}

export default UserProfile;
