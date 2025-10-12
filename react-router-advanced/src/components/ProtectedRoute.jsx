import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Simulated authentication hook
export const useAuth = () => {
  const user = { loggedIn: true }; // Change to false to test redirection
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  // If not logged in, redirect to home or login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render protected content
  return children;
};

export default ProtectedRoute;
