import React from 'react';
import './css/App.css';
import './css/Content.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content" >
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
