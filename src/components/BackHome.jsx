import React from 'react';
import { Link } from 'react-router-dom';

export default function BackHome() {
  return (
    <div className="col-md-2">
      <Link to="/" className="btn btn-block btn-lg btn-outline-danger">
        Back
      </Link>
    </div>
  );
}
