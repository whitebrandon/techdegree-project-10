import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default PrivateRoute = () => {
  return function RouteForAuthentication(props) {
    return (
      <Route path="" render={() => {
        user ? <div>Component Associated with Private Route</div> : <Redirect to="/signin" />
      }} />
    )
  }
}