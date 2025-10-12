import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication state
const isAuthenticated = false;

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    alert("You must log in to access this page!");
    return <Navigate to="/" replace />;
  }
  return children;
}
