import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class UserSignIn extends React.Component {  

  state = {
    errors: null,
    warnings: null
  }

  /**
   * on submit, email and password are sent to the api
   * @param {Event} evt
   */
  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState(() => {
      return {
        errors: null,
        warnings: null,
      }
    })

    if (!this.email.value || this.email.value === "" || 
        !this.password.value || this.password.value === "") {
          this.setState(() => {
            return {
              warnings: 'Please enter your email and/or password'
            }
          })
          return;
    }

    const { signIn } = this.props.context.actions;

    let path;

    // if component rendered via a private route redirect
    // pass "from" variabe into sign in function
    if (this.props.location.state) {
      path = this.props.location.state.from
    }
    return (async () => {
      return await signIn(this.email.value, this.password.value, path);
    })()
      .then(res => {
        if (res) {
          if ('status' in res) {
            this.setState(() => {
              return {
                errors: res
              }
            })
          } else {
            return this.props.history.push(path);
          }
        } else {
          return;
        }
      })
  }

  render () {
    const { errors, warnings } = this.state;
    return (
      <React.Fragment>
      {!errors || errors.status !== 500 ? // if no errors, or errors is not in form of array
          <div>
            <hr />
            <div className="bounds">
              <div className="grid-33 centered signin">
                <h1>Sign In</h1>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <input id="emailAddress" name="emailAddress" type="text" className="" ref={input => this.email = input} placeholder="Email Address"/>
                    </div>
                    <div>
                      <input id="password" name="password" type="password" className="" ref={input => this.password = input} placeholder="Password"/>
                    </div>
                    {errors ?
                      <div className="grid-100">
                        <p style={{color: "red"}}>Error: Your login is invalid. Please try again. </p>
                      </div>
                    : warnings ?
                      <div className="grid-100">
                        <p style={{color: "red"}}>{warnings}</p>
                      </div>
                    :
                      null
                    }
                    <div className="grid-100 pad-bottom">
                      <button className="button" type="submit">Sign In</button>
                      <Link className="button button-secondary" to="/">Cancel</Link>
                    </div>
                  </form>
                </div>
                <p>&nbsp;</p>
                <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
              </div>
            </div>
          </div>
        : // else redirect to /errors
          <Redirect to="/errors" />
      }
      </React.Fragment>
    )
  }
}

export default UserSignIn;