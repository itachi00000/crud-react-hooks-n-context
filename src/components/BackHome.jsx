import React from 'react';
import { Link } from 'react-router-dom';

export default function BackHome() {
  // back to homepage OR dashboard
  return (
    <div className="col-md-2 my-4">
      <Link to="/" className="btn btn-block btn-lg btn-outline-danger">
        Back
      </Link>
    </div>
  );
}
