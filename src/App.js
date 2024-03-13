import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import { publicRoutes } from './routes';
import { privateRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';


function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout || DefaultLayout
                const Page = route.component
                return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              }
              />;
              })}
              
              {privateRoutes.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
            })}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
