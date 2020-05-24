import React from 'react';
// eslint-disable-next-line
import { Redirect, Link } from 'react-router-dom';
import CourseCard from './CourseCard';


class Courses extends React.Component {
  constructor () {
    super();
    this._isMounted = null;
  }

  state = {
    courses: [],
    error: null,
  }

  /**
   * on mount, gets all courses and rerenders component
   */
  componentDidMount () {
    this._isMounted = true;
    const { getAllCourses } = this.props.context.data;

    getAllCourses()
      .then(courses => {
        if (this._isMounted) {
          this.setState(() => {
            return {
              courses,
              error: null
            }
          })
        }
      })
      .catch(error => {
        if (this._isMounted) {
          this.setState(() => {
            return {
              error,
              courses: []
            }
          })
        }
      });
    }
    
    componentWillUnmount () {
      this._isMounted = false;
    }

  componentWillUnmount () {
    console.log('Course unmounted')
    this._isMounted = false;
  }

  render () {
    return (
      // BELOW IS MY CODE
      // <div className="row">
      //     {props.courseObjects.map((courseObject, index) => 
      //     <div key={index} className="col-sm-4 p-5">
      //       <div className="card mx-auto border-dark border-1">
      //         <div className="card-body overflow-auto">
      //           <h6 className="text-muted">Course</h6>
      //           <h4 className="title">{courseObject.title}</h4>
      //         </div>
      //       </div>
      //     </div>)}
      // </div>
      <React.Fragment>
        {!this.state.error ? // if no error, render component
          <div>
          <hr />
            <div className="bounds">
              <div className="d-flex flex-wrap">
              {this.state.courses.map(course => 
                <CourseCard key={course.id} course={course} />
              )}
              </div>
              <div className="grid-33">
                <Link className="course--module course--add--module" to="/courses/create">
                  <h3 className="course--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      viewBox="0 0 13 13" className="add">
                      <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg>
                    New Course
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        : // if error, redirect to /error
          null // <Redirect to="/error" />
        }
      </React.Fragment>
    )
  }      
}

export default Courses;