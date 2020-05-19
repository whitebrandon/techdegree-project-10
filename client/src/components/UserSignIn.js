import React from 'react';

class UserSignIn extends React.Component /* (props) => */ {  

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (evt) => {
    this.setState({
      email: evt.target.value
    });
  }

  handlePasswordChange = (evt) => {
    this.setState({
      password: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { context } = this.props;
    context.actions.signIn(this.state.email, this.state.password)
  }

  render () {    
    
    return (
      <div>
        {/* Horizontal Line */}
        <hr />

        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <div>

              {/* Sign In Form */}
              <form onSubmit={this.handleSubmit}>
                {/* Email Address Input */}
                <div>
                  <input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" onChange={this.handleEmailChange} />
                </div>
                {/* Password Input */}
                <div>
                  <input id="password" name="password" type="password" className="" placeholder="Password" onChange={this.handlePasswordChange} />
                </div>
                { this.props.context.errors ?
                <div>
                  <p style={{color: "red", textAlign: "center"}}>Error: Your login is invalid. Please try again. </p>
                </div>
                : null
                }
                {/* Button Section of Form */}
                <div className="grid-100 pad-bottom">
                  {/* Submit Button */}
                  <button className="button" type="submit">Sign In</button>
                  {/* Cancel Button */}
                  <a className="button button-secondary" href="/">Cancel</a>
                </div>
              </form>
            </div>
            <p>&nbsp;</p>
            <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSignIn;