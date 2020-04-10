import React from 'react';

const Header = (props) => {
  return (
    <div className="container-fluid bg-primary">
      <div className="row">
        <div className="col-10">
          <h1 className="mt-3">Courses</h1>
        </div>
        <div className="col">
          <a href="localhost:3000" className="btn btn-primary mt-3 border-0 bg-transparent text-dark">Sign Up</a>
          <a href="localhost:3000" className="btn btn-secondary mt-3 border-0 bg-transparent text-dark">Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Header;