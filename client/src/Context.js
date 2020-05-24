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
  }

  render() {

    const value = {
      data: this.data,
      user: this.state.authenticatedUser,
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
    try {
      const response = await this.data.createUser(user);
      if (response.status === 201) {
        console.log(`User ${user.firstName} ${user.lastName} has been successfully signed up`);
        try {
          return await this.signIn(user.emailAddress, user.password);
        } catch (errors) {
          return errors
        }
      } else if (response.status >= 400 && response.status < 500) {
        const errors = await response.json().then(data => Object.values(data));
        if (!Array.isArray(errors[0])) {
          return errors;
        }
        return errors[0].map(message => (
          message.replace('firstName', 'First Name')
                 .replace('lastName', 'Last Name')
                 .replace('emailAddress', 'Email Address')
                 .replace('password', 'Password')
        ))
      } else {
        return response;
      }
    } catch (error) {
      const errors = new Error(error);
      errors.status = 500;
      return errors;
    }
  }

  /**
   * sends request to api for user
   * and either persists the user into global state
   * or updates the errors state
   * @param {String} emailAddress
   * @param {String} password
   */
  signIn = async (emailAddress, password, path=null) => {
    try {
      const res = await this.data.getUser(emailAddress, password);
      let user;
      if (res.status === 200) {
        user = await res.json().then(data => data);
        user.password = password;
        this.setState(() => {
            return {
              authenticatedUser: user,
            }
        })
        Cookie.set('currentUser', user);
      } else {
        return res;
      }
      return path ? path : null
    } catch (error) {
      const errors = new Error(error)
      errors.status = 500;
      return errors
    }
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