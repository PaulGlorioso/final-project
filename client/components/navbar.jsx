import React from 'react';

export default function Navbar() {
  return (
    <div>
      <i className="fas fa-bars bars" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">TRAILBLAZE</h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="nav-links">
            <a href='#'><h2>Search Trails</h2></a>
            <a href='#'><h2>Your Trails</h2></a>
            <a href='#'><h2>Saved Trails</h2></a>
          </div>
        </div>
        <div className="offcanvas-footer">
          <div className="nav-links">
            <a href='#'><h2>Log-In/Create</h2></a>
          </div>
        </div>
      </div>
    </div>
  );
}
