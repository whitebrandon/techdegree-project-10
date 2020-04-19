import React from 'react';
import { BrowserRouter as Router, Route, Switch, /* Switch */ } from 'react-router-dom';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UpdateCourse from './components/UpdateCourse';
import CreateCourse from './components/CreateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignOut from './components/UserSignOut';
// import Header from './components/Header';
import Courses from './components/Courses';

class App extends React.Component {

  state = {
    courses: []
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          courses: res,
        })
      })
  }
  render () {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Courses courseObjects={this.state.courses} />} />
            <Route exact path="/courses/create" component={CreateCourse} />
            <Route path="/courses/:id/update" component={UpdateCourse} />
            <Route exact path="/courses/:id" component={CourseDetail} />
            <Route path="/signin" component={UserSignIn} />
            <Route path="/signup" component={UserSignUp} />
            <Route path="/signout" component={UserSignOut} />
          </Switch>
        </Router>
    )
  }

}

export default App;
