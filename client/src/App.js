import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UpdateCourse from './components/UpdateCourse';
import CreateCourse from './components/CreateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignOut from './components/UserSignOut';
import Header from './components/Header';
import Courses from './components/Courses';

import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import UnhandledError from './components/UnhandledError';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Stateful Class Components
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

// Stateless Functional Components
const HeaderWithContext = withContext(Header);
const UserSignOutWithContext = withContext(UserSignOut);

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <HeaderWithContext />
          <Router>
            <Switch>
              <Route exact path="/" component={CoursesWithContext} />
              <PrivateRoute exact path="/courses/create" redirect="/signin" component={CreateCourseWithContext} />
              <PrivateRoute path="/courses/:id/update" redirect="/signin" component={UpdateCourseWithContext} />
              <Route exact path="/courses/:id" component={CourseDetailWithContext} />
              <PrivateRoute path="/signin" redirect="/" component={UserSignInWithContext} />
              <Route path="/signup" component={UserSignUpWithContext} />
              <Route path="/signout" component={UserSignOutWithContext} />
              <Route path="/notfound" component={NotFound} />
              <Route path="/forbidden" component={Forbidden} />
              <Route path="/error" component={UnhandledError} />
              <Route component={NotFound} />
            </Switch>
          </Router>
      </React.Fragment>
    )
    /* export default function PrivateRoute ({component: Component, ...rest}) {
    //   return (
    //     <Consumer>
    //       {context => (
    //         <Route {...rest} render={props => context.user ? <Component {...props} /> : <Redirect to="/signin" /> } />
    //       )}
    //     </Consumer>
    //   )  
    // } */
  }

}

export default App;
