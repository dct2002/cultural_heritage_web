import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import Home from './pages/Home';
import Header from './components/Layout/header';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/Forgotpassword';

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route path='/' element={<Home/ >}  />
              <Route path='/header' element={<Header/ >}  />
              <Route path='/login' element={<Login/ >}  />
              <Route path='/signup' element={<SignUp/ >} />
              <Route path='/forgotpassword' element={<ForgotPassword/ >} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
