// src/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light vh-100">
      <div className="text-center">
        <div className="mb-4">
          <i className="bi bi-exclamation-triangle-fill text-warning fs-1"></i>
        </div>
        <h1 className="display-4">Oops! Page Not Found</h1>
        <p className="lead text-muted">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary btn-lg">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
