import React from 'react';

class UserSignIn extends React.Component /* (props) => */ {

  signIn (emailAddress, password) {
    fetch('http://localhost:5000/api/users', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${emailAddress}:${password}`)}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(res => {
        if (res.status === 200) {
          alert('YOU ARE SIGNED IN')
        } else {
          alert('UNAUTHORIZED CREDENTIALS')
        }
      })

  }
  
  
  
  
  render () {
    
    
    
    return (
      <div>

        {/* Header */}
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <a className="signup" href="sign-up.html">Sign Up</a>
              <a className="signin" href="sign-in.html">Sign In</a>
            </nav>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr />

        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <div>

              {/* Sign In Form */}
              <form>
                {/* Email Address Input */}
                <div>
                  <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" />
                </div>
                {/* Password Input */}
                <div>
                  <input id="password" name="password" type="password" className="" placeholder="Password" />
                </div>
                {/* Button Section of Form */}
                <div className="grid-100 pad-bottom">
                  {/* Submit Button */}
                  <button className="button" 
                          type="submit"  
                          onClick={(e) => {
                            e.preventDefault(); 
                            console.log('Form Submits')
                            this.signIn('chldprdgy720@yahoo.com', 'Bwhit228')
                          }}>Sign In
                  </button>
                  {/* Cancel Button */}
                  <a className="button button-secondary" href="/">Cancel</a>
                </div>
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