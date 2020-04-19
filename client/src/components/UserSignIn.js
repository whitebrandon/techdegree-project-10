import React from 'react';

class UserSignIn extends React.Component /* (props) => */ {
  
  
  
  
  render () {
    
    
    
    return (
      <div>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
        </div>
      </div>
      <hr />
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form>
              <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value="First Name" readOnly /></div>
              <div><input id="password" name="password" type="password" className="" placeholder="Password" value="Password" readOnly /></div>
              <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign In</button><button className="button button-secondary" onClick={() => console.log('Form Submits')}>Cancel</button></div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <a href="sign-up.html">Click here</a> to sign up!</p>
        </div>
      </div>
    </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      // <form action="http://localhost:5000/api/users/:id" method="get">
      //   <h2>Sign In</h2>
      //   <div classNameName="form-group">
      //     {/* <label for="exampleInputEmail1">Email address</label> */}
      //     <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      //     <small id="emailHelp" classNameName="form-text text-muted">We'll never share your email with anyone else.</small>
      //   </div>
      //   <div classNameName="form-group">
      //     {/* <label for="exampleInputPassword1">Password</label> */}
      //     <input type="password" classNameName="form-control" id="exampleInputPassword1" placeholder="Password" />
      //   </div>
      //   {/* <div classNameName="form-group form-check">
      //     <input type="checkbox" classNameName="form-check-input" id="exampleCheck1" />
      //     <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
      //   </div> */}
      //   <button type="submit" classNameName="btn btn-primary rounded">Submit</button>
      //   <button type="submit" classNameName="btn btn-secondary rounded">Cancel</button>
      // </form>
    )
  }
}

export default UserSignIn;