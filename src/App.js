import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPanel from './components/MainPanel/MainPanel';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainPanel activeTab={activeTab} />
    </div>
  );
}

export default App;
