import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomersList from './components/CustomersList';

function App() {
  return (
    <React.Fragment>
      <div className='container m-4'>
        <CustomersList />
      </div>
    </React.Fragment>
  );
}

export default App;
