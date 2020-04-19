import React from 'react';

const UserSignUp = (props) => {
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
          <h1>Sign Up</h1>
          <div>
            <form>
              <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value="" readOnly /></div>
              <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value="" readOnly /></div>
              <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value="" readOnly /></div>
              <div><input id="password" name="password" type="password" className="" placeholder="Password" value="" readOnly /></div>
              <div><input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password"
                  value="" readOnly /></div>
              <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign Up</button><button className="button button-secondary" onClick={() => console.log('Form Submits')}>Cancel</button></div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
        </div>
      </div>
    </div>
















    // <div classNameName="container mx-auto w-25 mt-5">
    //   <form action="http://localhost:5000/api/users" method="post">
    //     <h2>Sign Up</h2>
    //     <input type="text" classNameName="form-control mb-2" name="firstName" value="" placeholder="First Name" />
    //     <input type="text" classNameName="form-control mb-2" name="lastName" value="" placeholder="Last Name" />
    //     <div classNameName="form-group">
    //       {/* <label for="exampleInputEmail1">Email address</label> */}
    //       <input type="email" classNameName="form-control mb-2" name="email1" value="" aria-describedby="emailHelp" placeholder="Email Address" />
    //       <small id="emailHelp" classNameName="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>
    //     <div classNameName="form-group">
    //       {/* <label for="exampleInputPassword1">Password</label> */}
    //       <input type="password" classNameName="form-control mb-2" name="password" value="" placeholder="Password" />
    //     </div>
    //     <div classNameName="form-group">
    //       {/* <label for="exampleInputPassword1">Password</label> */}
    //       <input type="password" classNameName="form-control mb-2" id="confirm-password" placeholder="Confirm Password" />
    //     </div>
    //     {/* <div classNameName="form-group form-check">
    //       <input type="checkbox" classNameName="form-check-input" id="exampleCheck1" />
    //       <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
    //     </div> */}
    //     <button type="submit" classNameName="btn btn-primary rounded">Sign Up</button>
    //     <a href="localhost:3000" classNameName="btn btn-secondary rounded">Cancel</a>
    //   </form>
    // </div>
  )
}

export default UserSignUp;