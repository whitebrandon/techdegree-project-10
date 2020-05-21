import React from 'react';

class UserSignIn extends React.Component {  

  /**
   * on submit, email and password are sent to api
   * @param {Event} evt
   */
  handleSubmit = (evt) => {
    evt.preventDefault();

    const { signIn } = this.props.context.actions;
    
    signIn(this.email.value, this.password.value)
  }

  render () {    
    const { errors } = this.props.context;
    return (
      <div>
        <hr />
        <div className="bounds">
          <div className="grid-33 centered signin">
            <h1>Sign In</h1>
            <div>
              {/* ========================================================== 
              =========================== FORM ===========================
              ========================================================== */}
              <form onSubmit={this.handleSubmit}>
              {/* ==================== EMAIL ADDRESS =================== */}
                <div>
                  <input id="emailAddress" name="emailAddress" type="text" className="" ref={input => this.email = input} placeholder="Email Address" /*onChange={this.handleEmailChange}*/ />
                </div>
              {/* ====================== PASSWORD ====================== */}
                <div>
                  <input id="password" name="password" type="password" className="" ref={input => this.password = input} placeholder="Password" /*onChange={this.handlePasswordChange}*/ />
                </div>
              {/* ====================================================== */}
                {errors ? // If login fails, display error message
                  <div>
                    <p style={{color: "red", textAlign: "center"}}>Error: Your login is invalid. Please try again. </p>
                  </div>
                : 
                  null
                }
                <div className="grid-100 pad-bottom">
                  <button className="button" type="submit">Sign In</button>
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