import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { user } = props.context;
  return (
    <React.Fragment>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo"><Link to="/" style={{ textDecoration: 'none' }}>Courses</Link></h1>
          {user ? // if user signed in, display name and "sign out" btn
            <nav>
              <span>{`Welcome, ${`${user.firstName} ${user.lastName}`}!`}</span>
              <Link className="signout" to="/signout">Sign Out</Link>
            </nav>
          : // otherwise, display "sign up" and "sign in" btns
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