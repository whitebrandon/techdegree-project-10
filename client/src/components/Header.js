import React from 'react';

const Header = (props) => {
  const { user } = props.context;
  return (
    // BELOW IS THE CODE I WROTE || NOT TH TEMPLATE
    // <div className="container-fluid sticky-top bg-primary mb-5">
    //   <div className="row">
    //     <div className="col-10">
    //       <h1 className="mt-3">Courses</h1>
    //     </div>
    //     <div className="col">
    //       <a href="localhost:3000" className="btn btn-primary mt-3 border-0 bg-transparent text-dark">Sign Up</a>
    //       <a href="localhost:3000" className="btn btn-secondary mt-3 border-0 bg-transparent text-dark">Sign In</a>
    //     </div>
    //   </div>
    // </div>
    <React.Fragment>
      {props.context.user ?
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <span>{`Welcome, ${user.firstName + " " + user.lastName}!`}</span>
              <a className="signout" href="/signout">Sign Out</a>
            </nav>
          </div>
        </div>
        :
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <a className="signup" href="/signup">Sign Up</a>
              <a className="signin" href="/signin">Sign In</a></nav>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default Header;