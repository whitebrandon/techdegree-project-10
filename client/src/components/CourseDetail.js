import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ButtonContainer from './ButtonContainer';

export default class CourseDetail extends React.Component {

  state = {
    course: null,
    error: null
  }


  componentDidMount () {
    const { getCourse } = this.props.context.data;
    const { id } = this.props.match.params;

    getCourse(id)
      .then(async res => {
        if (res.status === 200) {
          const course = await res.json().then(data => data);
          this.setState(() => {
            return {
              course,
              error: null
            }
          })
        } else {
          this.setState(() => {
            return {
              course: null,
              error: res
            }
          })
          console.error(`${res.statusText} for course id: ${id}`);
        }
      }) // Catches internal server errors
      .catch(error => {
        this.setState(() => {
          return { error }
        })
      })
  }
  /**
   * When "delete" btn is clicked, sends
   * req to api to remove course
   */
  handleDelete = (evt) => {
    evt.preventDefault();

    const { deleteCourse } = this.props.context.data;
    const { id } = this.state.course;
    const { emailAddress, password} = this.props.context.user;

    deleteCourse(id, emailAddress, password)
      .then(res => {
        if (res.status !== 204) {
          this.setState(() => {
            return { error: res }
          })
        } else {
          this.setState(() => {
            return { error: null }
          })
          this.props.history.push("/")
        }
      })
  }

  render () {
    const { user } = this.props.context;
    const { course, error } = this.state;
    return (
      <React.Fragment>
      {!error && course ? // if no errors and course available, render component
        <div>
          <hr />
          <div>
            <ButtonContainer user={user} course={course} deleteCourse={this.handleDelete} />
            <div className="bounds course--detail">
              <div className="grid-66">
              {/* ==================== COURSE TITLE ==================== */}
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <h3 className="course--title">{course.title}</h3>
                  <p>By {`${course.User.firstName} ${course.User.lastName}`}</p>
                </div>
                <div className="course--description">
                  <ReactMarkdown source={course.description} />
                </div>
              {/* ====================================================== */}
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                  {/* ================= ESTIMATED TIME ================= */}
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <h3>{course.estimatedTime}</h3>
                    </li>
                  {/* ================ MATERIALS NEEDED ================ */}
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      {course.materialsNeeded ? // if materialsNeeded NOT empty, list materials
                        <ul>
                          <li style={{listStyle: "none"}}><ReactMarkdown source={course.materialsNeeded} /></li>
                        </ul>
                      : // otherwise, return null
                        null
                      }
                    </li>
                  {/* ================================================== */}
                  </ul>
                </div>
              </div>
              {/* =================== END CONTAINER ==================== */}
            </div>
          </div>
        </div>
      :
      !error && !course ? // if no errors and no course, return null
        null
      : error.status === 404 ? // if error is "Not Found" error, redirect to /notfound
        <Redirect to="/notfound" />
      : 
        <Redirect to="/error" />
      }
      </React.Fragment>
    )
  }
}