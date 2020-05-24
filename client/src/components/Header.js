import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
  const { user } = props.context;
  return (
    <Container fluid className="header bg-dark">
      <Container className="bounds">
        <h1 className="header--logo"><Link to="/" style={{ textDecoration: "none" }}>Courses</Link></h1>
        {user ? // if user signed in, display name and "sign out" btn
          <nav>
            <span>{`Welcome, ${user.firstName} ${user.lastName}!`}</span>
            <Link className="signout" to="/signout" style={{ textDecoration: "none" }}>Sign Out</Link>
          </nav>
        : // otherwise, display "sign up" and "sign in" btns
          <nav>
            <Link className="signup" to="/signup" style={{ textDecoration: "none"}}>Sign Up</Link>
            <Link className="signin" to="/signin" style={{ textDecoration: "none"}}>Sign In</Link>
          </nav>
        }
      </Container>
    </Container>
/*     <React.Fragment>
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
    </React.Fragment>  */
  )
}

export default Header;