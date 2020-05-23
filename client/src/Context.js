import React from 'react';
import Data from './Data';
import Cookie from 'js-cookie';

const AppContext = React.createContext(); 

export class Provider extends React.Component {

  constructor() {
    super();
    this.data = new Data();
  }

  state = {
    authenticatedUser: Cookie.getJSON('currentUser') || null,
    errors: null,
  }

  render() {

    const value = {
      data: this.data,
      user: this.state.authenticatedUser,
      errors: this.state.errors,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        signUp: this.signUp
      }
    };
    
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>  
    );
  }

  /**
   * sends request to api to add new user to db,
   * then calls signIn to log new user into app
   * @param {Object} user
   */
  signUp = async (user) => {
    const response = await this.data.createUser(user);
    if (typeof response === 'object') {
      if ('status' in response) {
        if (response.status === 201) {
          return await this.signIn(user.emailAddress, user.password);
        }
        return response;
      } else if ('errorMsg' in response) {
        this.setState(() => {
          if (Array.isArray(response.errorMsg)) {
            return {
              errors: Object.values(response.errorMsg).map(message => {
                return (
                  message.replace('firstName', 'First Name')
                        .replace('lastName', 'Last Name')
                        .replace('emailAddress', 'Email Address')
                        .replace('password', 'Password')
                )
              })
            }
          } else {
            return {
              errors: [response.errorMsg]
            }
          }
        })
      }
    }
    return response;
  }

  /**
   * sends request to api for user
   * and either persists the user into global state
   * or updates the errors state
   * @param {String} emailAddress
   * @param {String} password
   */
  signIn = async (emailAddress, password, path=null) => {
    const response = await this.data.getUser(emailAddress, password);
    let user, error;
    if (response.status === 200) {
      user = await response.json().then(data => data);
      user.password = password;
      this.setState(() => {
          return {
            authenticatedUser: user,
          }
      })
      Cookie.set('currentUser', user);
    } else {
      error = await response.json().then(data => data)
      console.log(error)
      this.setState(() => {
        return {
          errors: error
        }
      })
    }
    return path ? path : null
  }

  /**
   * clears cookies and user from global state
   */
  signOut = () => {

    this.setState(() => {
      return {
        authenticatedUser: null
      }
    })

    Cookie.remove('currentUser');
  }

}

export const Consumer = AppContext.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} WrappedComponent - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(WrappedComponent) {
  return function FunctionalComponentWithContext(props) {
    return (
      <AppContext.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </AppContext.Consumer>
    );
  }
}