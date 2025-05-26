import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/auth/PrivateRoute';
import AdminRoute from './components/auth/AdminRoute';
import './assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/courses" element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          } />
          <Route path="/practice" element={
            <PrivateRoute>
              <Practice />
            </PrivateRoute>
          } />
          <Route path="/projects" element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);