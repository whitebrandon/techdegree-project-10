import React from 'react';

const UserSignUp = (props) => {
  return (
    <form action="http://localhost:5000/api/users" method="post">
      <h2>Sign Up</h2>
      <input type="text" className="form-control" id="firstName" placeholder="First Name" />
      <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
      <div className="form-group">
        {/* <label for="exampleInputEmail1">Email address</label> */}
        <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Email Address" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        {/* <label for="exampleInputPassword1">Password</label> */}
        <input type="password" className="form-control" id="password" placeholder="Password" />
      </div>
      <div className="form-group">
        {/* <label for="exampleInputPassword1">Password</label> */}
        <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
      </div>
      {/* <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary rounded">Sign Up</button>
      <button type="submit" className="btn btn-secondary rounded">Cancel</button>
    </form>
  )
}

export default UserSignUp;