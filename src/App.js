import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="px-4 min-h-screen font-sans">
        <Content />
        <Footer/>
      </div>

    </div>
  );
}

export default App;
