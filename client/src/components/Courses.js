import React from 'react';
import { Redirect } from 'react-router-dom';

class Courses extends React.Component {

  state = {
    courses: [],
    error: null
  }

  componentDidMount () {
    const { context } = this.props;
    context.data.getAllCourses()
      .then(courses => {
        this.setState({
          courses
        })
      })
      .catch(err => {
        this.setState(() => {
          return {
            error: err
          }
        })
      });
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
      {!this.state.error ? 
      <div>
        {/* Horizonal Line */}
        <hr />
        
        {/* ================= COURSES =============== */}
        <div className="bounds">
          {/* Current Courses */}
          {this.state.courses.map(course => 
            <div className="grid-33" key={course.id}>
              <a className="course--module course--link" href={`courses/${course.id}`}>
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{course.title}</h3>
              </a>
            </div>
          )}

          {/* New Course Link */}
          <div className="grid-33">
            <a className="course--module course--add--module" href="/courses/create">
              <h3 className="course--add--title">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 13 13" className="add">
                  <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                </svg>
                New Course
              </h3>
            </a>
          </div>
        </div>
      </div>
      : <Redirect to="/error" />}
      </React.Fragment>
    )
  }      
}

export default Courses;