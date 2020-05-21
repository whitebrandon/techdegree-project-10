import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

export default function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Consumer>
      {context => (
        rest.path === '/signin' ?
        <Route {...rest} render={(props) => context.user ? <Redirect to={rest.redirect} /> : <Component {...props} /> } />
        :
        rest.path === '/signup' ?
        <Route {...rest} render={(props) => context.user ? <Redirect to={rest.redirect} /> : <Component {...props} /> } />
        :
        <Route {...rest} render={(props) => context.user ? <Component {...props} /> : <Redirect to={rest.redirect} /> } />
      )}
    </Consumer>
  )  
}


// NOTES FOR MYSELF:

// export default function PrivateRoute (props) {
//   return (
//     <Consumer>
//       {context => <Route computedMatch={props.computedMatch} exact={props.exact} location={props.location} path={props.path} render={rest => context.user ? <props.component {...rest} /> : <Redirect to="/signin" />} />}
//     </Consumer>
//   )
// }

// The above won't work, because render within the Route component won't run
// This is because passing props like {...props} is basically doing this: component={component} computedMatch={computedMatch} 
// exact={exact} location={location} path={path}, and if there's a prop labeled component in Route (i.e. <Route component={component} />) then
// <Route ... render={() => {}} won't run

// So instead we change the name of component. We do this by passing an object literal into the PrivateRoute function.
// props is normally passed in (which is already an object)
// passing in an object literal allows us to specify which props we want to pass in, or in this case, 
// allows us to change the name of component to Component // Still unsure of exactly how this works, but if you were to pass in computedMatch: NotGonnaUse and then check the components tab of the Chrome Dev Tools you'll see in the Route component that a computedMatch prop is not there
// ...rest is using a spread operator to pass in the remaining props
// passing {...rest} into Route passes in computedMatch={computedMatch} exact={exact} ..., but since component is no longer a part of that, there's no issue with render being run

// Route is wrapped in Consumer only so that we can use the authenticatedUser state to determine dynamically whether the Component should be rendered, or if the user should be redirected | If not for this, no HOC would be needed (i.e. if the user state was kept in App, we could call this.state.user in the Route render method to determine whether the Component should be rendered or not)


// The code below will work, because I'm going the scenic route of drilling each prop from PrivateRoute into Route explicitly

// export default function PrivateRoute (props) {
//   return (
//     <Consumer>
//       {context => <Route computedMatch={props.computedMatch} exact={props.exact} location={props.location} path={props.path} render={rest => context.user ? <props.component {...rest} /> : <Redirect to="/signin" />} />}
//     </Consumer>
//   )
// }
//*/