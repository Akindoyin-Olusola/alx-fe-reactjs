import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* User Profile Component */}
      <UserProfile />

      {/* Vite + React section */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-4 mb-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-4">Vite + React</h1>
        <div className="card mb-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
