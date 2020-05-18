import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default class CourseDetail extends React.Component {

  state = {
    course: null,
  }

  componentDidMount () {
    const { context } = this.props;
    const { id } = this.props.match.params;
    context.data.getCourse(id)
      .then(res => this.setState(() => {
        return {
          course: res
        }
      }))
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
      {this.state.course ?  
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
        }
      </React.Fragment>
    )
  }
}