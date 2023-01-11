import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Outlet } from 'react-router-dom';
import Navy from './components/Nav';

//@ts-check

const App = () => {
  return (
    <>
      <Navy />
      <Outlet />
    </>
  );
}

export default App;
