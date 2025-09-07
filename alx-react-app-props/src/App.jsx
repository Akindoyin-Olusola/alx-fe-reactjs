import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

// Context
import UserContext from './components/UserContext';

function App() {
  const [count, setCount] = useState(0);

  // Data to pass via Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <WelcomeMessage />
      <Header />
      <MainContent />

      {/* Provide Context to UserProfile */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

      <Counter />
      <Footer />
    </>
  );
}

export default App;
