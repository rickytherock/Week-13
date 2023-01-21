import React from 'react';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <div className="layout-container">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
