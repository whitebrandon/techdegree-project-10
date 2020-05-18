import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Consumer>
      {context => (
        <Route {...rest} render={(props) => context.user ? <Component {...props} /> : <Redirect to="/signin" /> } />
      )}
    </Consumer>
  )  
}
