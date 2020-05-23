import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo"><Link to="/" style={{ textDecoration: 'none' }}>Courses</Link></h1>
            {user ? // if user signed in, display name and "sign out" btn
              <nav>
                <span>{`Welcome, ${user.firstName + " " + user.lastName}!`}</span>
                <Link className="signout" to="/signout">Sign Out</Link>
              </nav>
            : // otherwise, display "sign up" and "sign in" btn
              <nav>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
              </nav>
            }
          </div>
        </div>
    </React.Fragment>
  )
}

export default Header;