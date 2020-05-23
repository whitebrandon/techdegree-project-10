import React from 'react';
import { Link } from 'react-router-dom';

class UserSignUp extends React.Component {

  state = {
    warnings: null
  }

  /**
   * 
   * @param {Event} evt
   */
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState(() => {
      return {
        warnings: null
      }
    })
    const { context } = this.props;
    if (this.password.value === this.confirm.value) {
      const newUser = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        emailAddress: this.email.value,
        password: this.password.value
      }
      context.actions.signUp(newUser)
    } else {
      this.setState(() => {
        return {
          warnings: 'Passwords do not match. Please try again'
        }
      })
    }
  }

  render () {
    return (
      // MY CODE IS BELOW
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
      <div>
        {/* Horizontal Line */}
        <hr />
        <div className="bounds">
          <div className="grid-33 centered signup">
            {this.props.context.errors || this.state.warnings ? 
            <div>
              <h2 className="validation--errors--label">Validation errors</h2>
              <div className="validation-errors">
                <ul>
                  {this.state.warnings ? <li>{this.state.warnings}</li> : null ||
                  this.props.context.errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
              </div>
            </div>
            : null}
            <h1>Sign Up</h1>
            <div>
              {/* Sign Up Form */}
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input id="firstName" name="firstName" type="text" className="" ref={input => this.firstName = input} placeholder="First Name" />
                </div>
                <div>
                  <input id="lastName" name="lastName" type="text" className="" ref={input => this.lastName = input} placeholder="Last Name" />
                </div>
                <div>
                  <input id="emailAddress" name="emailAddress" type="text" className="" ref={input => this.email = input} placeholder="Email Address" />
                </div>
                <div>
                  <input id="password" name="password" type="password" className="" ref={input => this.password = input} placeholder="Password" />
                </div>
                <div>
                  <input id="confirmPassword" name="confirmPassword" type="password" ref={input => this.confirm = input} className="" placeholder="Confirm Password" />
                </div>
                {/* Button Section of Form */}
                <div className="grid-100 pad-bottom">
                  {/* Submit Button */}
                  <button className="button" type="submit">Sign Up</button>
                  {/* Cancel Button */}
                  <Link className="button button-secondary" to="/" >Cancel</Link>
                </div>
              </form>
            </div>
            <p>&nbsp;</p>
            <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSignUp;