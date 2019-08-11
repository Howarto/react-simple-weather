import React from 'react';
import './css/App.css';
import './css/Content.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Information from './Information';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content" >
        <Sidebar />
        <Information />
      </div>
    </div>
  );
}

export default App;
