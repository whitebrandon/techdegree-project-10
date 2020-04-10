import React from 'react';

const UserSignIn = (props) => {
  return (
    <form action="http://localhost:5000/api/users/:id" method="get">
      <h2>Sign In</h2>
      <div className="form-group">
        {/* <label for="exampleInputEmail1">Email address</label> */}
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        {/* <label for="exampleInputPassword1">Password</label> */}
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      {/* <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary rounded">Submit</button>
      <button type="submit" className="btn btn-secondary rounded">Cancel</button>
    </form>
  )
}

export default UserSignIn;