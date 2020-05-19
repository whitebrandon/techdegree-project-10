import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default class CourseDetail extends React.Component {

  state = {
    course: null,
    wasCourseReturned: true,
    error: null
  }

  _isMounted = false;

  componentDidMount () {
    this._isMounted = true;

    const { context } = this.props;
    const { id } = this.props.match.params;
    context.data.getCourse(id)
      .then(res => {
        if (res) {
          return res
        } else {
          throw new Error('No Course Was Found')
        }
      })
      .then(course => {
        if (this._isMounted) {
          this.setState(() => {
            return {
              course,
              wasCourseReturned: true,
              error: null
            }
          })
        }
      })
      .catch(error => {
        if (error.message === 'No Course Was Found') {
          console.error(`${error} for course id: ${id}`);
          if (this._isMounted) {
            this.setState(() => {
              return {
                error,
                wasCourseReturned: false
              }
            })
          }
        } else {
          console.error(error)
          if (this._isMounted) {
            this.setState(() => {
              return {
                error: 'Unknown Error',
                wasCourseReturned: false
              }
            })
          }
        }
      })
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  handleDelete = (evt) => {
    const { deleteCourse } = this.props.context.data;
    const { id } = this.state.course;
    const { emailAddress, password} = this.props.context.user;
    deleteCourse(id, emailAddress, password)
      .then(res => {
        if (res !== null) {
          console.log(res)
        }
      })
  }

  render () {
    const { user } = this.props.context;
    const { course } = this.state;
    return (
      <React.Fragment>
      {this.state.wasCourseReturned ?
      this.state.error !== 'Unknown Error' ?
      this.state.course ?  
        <div>
          {/* Horizontal Line */}
          <hr />
          <div>
            {/* Section that holds Update Course, Delete Course, and Return to List buttons */}
            <div className="actions--bar">
              <div className="bounds">
                <div className="grid-100">
                { user && user.id === course.userId ?
                  <span>
                    {/* Update Button */}
                    <Link className="button" to={{ pathname: `/courses/${this.state.course.id}/update`, state: { course: this.state.course }}}>Update Course</Link>
                    {/* Delete Button */}
                    <a className="button"
                      href='/'
                      onClick={this.handleDelete}>Delete Course
                    </a>
                  </span> :
                  null }
                  {/* Home Button */}
                  <a className="button button-secondary" href="/">Return to List</a>
                </div>
              </div>
            </div>
            <div className="bounds course--detail">
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  {/* Course Title */}
                  <h3 className="course--title">{this.state.course.title}</h3>
                  {/* Course Author */}
                  <p>By {this.state.course.User.firstName + " " + this.state.course.User.lastName}</p>
                </div>
                {/* Course Description */}
                <div className="course--description">
                  <ReactMarkdown source={this.state.course.description} />
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      {/* Course Estimated Time */}
                      <h3>{this.state.course.estimatedTime}</h3>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                        {this.state.course.materialsNeeded ?
                          <ul> 
                          {/* Course Materials Needed */}
                          {this.state.course.materialsNeeded.split('*').map((materials, index) => index === 0 ? null : 
                            <li key={index}><ReactMarkdown source={materials} /></li>)}
                        </ul> :
                        null }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
         :
        null
        : <Redirect to="/error" />
       : <Redirect to="/notfound" />}
      </React.Fragment>
    )
  }
}