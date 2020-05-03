import React from 'react';

class Courses extends React.Component {

  state = {
    courses: []
  }

  componentDidMount () {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(res => {
        this.setState({
          courses: res,
        })
      })
  }

  render () {
    return (
      <div>
        {/* Header */}
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            <nav>
              <a className="signup" href="sign-up.html">Sign Up</a>
              <a className="signin" href="sign-in.html">Sign In</a>
            </nav>
          </div>
        </div>

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
            <a className="course--module course--add--module" href="create-course.html">
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      /* <div className="row">
        {props.courseObjects.map((courseObject, index) => 
        <div key={index} className="col-sm-4 p-5">
          <div className="card mx-auto border-dark border-1">
            <div className="card-body overflow-auto">
              <h6 className="text-muted">Course</h6>
              <h4 className="title">{courseObject.title}</h4>
            </div>
          </div>
        </div>)}
      </div> */
    )
  }
}

export default Courses;