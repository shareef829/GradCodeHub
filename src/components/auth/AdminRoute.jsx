import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy authentication check, replace with your actual logic
const isAdmin = () => {
  // Example: return user && user.role === 'admin';
  return false;
};

const AdminRoute = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/login" replace />;
};

export default AdminRoute;
