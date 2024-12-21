import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="px-4 bg-gray-50 text-black dark:bg-gray-900 dark:text-white min-h-screen font-sans">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
