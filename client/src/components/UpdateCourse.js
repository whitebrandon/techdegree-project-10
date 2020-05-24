import React from 'react';
import { Redirect, Link } from 'react-router-dom';


export default class UpdateCourse extends React.Component {
  
  state = {
      course: this.props.location.state ? this.props.location.state.course : null,
      errors: null,
  }

  async componentDidMount () {

    const { course } = this.state;
    const { getCourse } = this.props.context.data;
    const { id } = this.props.match.params;

    if (!course) {
      const response = await getCourse(parseInt(id));
      if (response.status === 200) {
        const course = await response.json().then(data => data);
        this.setState(() => {
          return {
            course,
            errors: null
          }
        })
      } else {
        this.setState(() => {
          return {
            course: null,
            errors: response
          }
        })
      }
    }

    // if (!this.state.course) {
    //   const course = await this.props.context.data.getCourse(parseInt(this.props.match.params.id)).then(data => data);
    //   if (this._isMounted) {
    //     this.setState(() => {
    //       return {
    //         course,
    //         isMounted: true
    //       }
    //     })
    //   }
    // }
  }

  /**
   * creates object and sends request to api
   * to update course
   * @param {Event} evt
   */
  handleSubmit = (evt) => {
    evt.preventDefault();

    const { user } = this.props.context;
    const { updateCourse } = this.props.context.data;
    const { title, description, estimatedTime, materialsNeeded} = this;

    const course = {
      title: title.value,
      description: description.value,
      estimatedTime: estimatedTime.value,
      materialsNeeded: materialsNeeded.value
    }

    course.id = this.state.course.id

    updateCourse(course, user.emailAddress, user.password)
      .then(async res => {
        if (res.status !== 204) {
          const errors = res // await res.json().then(data => data).then(errorObject => errorObject.errorMsg);
          console.log(errors)
          this.setState(() => {
            return { errors }
          })
        } else {
          if (this.state.errors) {
            this.setState(() => {
              return {
                errors: null
              }
            })
          }
          return this.props.history.push(`/courses/${this.state.course.id}`)
        }
      })
  }

  render () {
    const { course, errors } = this.state;
    return (
      // MY CODE IS BELOW
      // <form onSubmit={this.handleSubmit}>
      //   <h2>Update Course</h2>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <label for="courseTitle" classNameName="text-muted">Course</label>
      //           <input type="email" classNameName="form-control" id="courseTitle" />
      //           <small id="emailHelp" classNameName="form-text text-muted">By Teacher Name</small>
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label for="estimatedTime" classNameName="text-muted">Estimated Time</label>
      //         <input type="text" classNameName="form-control" id="estimatedTime" />
      //       </div>
      //     </div>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <input type="textarea" classNameName="form-control" id="courseDescription" />
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label for="materialsNeede" classNameName="text-muted">Materials Needed</label>
      //         <input type="textarea" classNameName="form-control" id="materialsNeeded" />
      //       </div>
      //     </div>
      //   <button type="submit" classNameName="btn btn-primary rounded">Update Course</button>
      //   <button type="submit" classNameName="btn btn-secondary rounded">Cancel</button>
      // </form>
      <React.Fragment>
        {course ? // if course available, render component
          <div>
            <hr />
            <div className="bounds course--detail">
              <h1>Update Course</h1>
              <div>
              {errors && Array.isArray(errors) ? // if errors present and part of array, display errors
                <div>
                  <h2 className="validation--errors--label">Validation errors</h2>
                  <div className="validation-errors">
                    <ul>
                      {errors.map((error, index) => <li key={index}>{error.replace('title', 'Course Title').replace('description', 'Course Description')}</li>)}
                    </ul>
                  </div>
                </div>
              : errors && !Array.isArray(errors) ? // if errors present but not part of array, redirect to /error
                <Redirect to="/error" />
              : // otherwise, hide validation errors section and render form 
                null
              }
                <form onSubmit={this.handleSubmit}>
                  <div className="grid-66">
                    <div className="course--header">
                      <h4 className="course--label">Course</h4>
                      <div>
                        <input id="title" name="title" type="text" ref={input => this.title = input} className="input-title course--title--input" placeholder="Course title..." defaultValue={course.title}/>
                      </div>
                      <p>By {`${course.User.firstName} ${course.User.lastName}`}</p>
                    </div>
                    <div className="course--description">
                      <div>
                        <textarea id="description" name="description" ref={input => this.description = input} className="" defaultValue={course.description} placeholder="Course description..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="grid-25 grid-right">
                    <div className="course--stats">
                      <ul className="course--stats--list">
                        <li className="course--stats--list--item">
                          <h4>Estimated Time</h4>
                          <div>
                            <input id="estimatedTime" name="estimatedTime" type="text" ref={input => this.estimatedTime = input}className="course--time--input" placeholder="Hours" defaultValue={course.estimatedTime}/>
                          </div>
                        </li>
                        <li className="course--stats--list--item">
                          <h4>Materials Needed</h4>
                          <div>
                            <textarea id="materialsNeeded" name="materialsNeeded" ref={input => this.materialsNeeded = input} className="" defaultValue={course.materialsNeeded} placeholder="List materials..."></textarea>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">Update Course</button>
                    <Link className="button button-secondary" to="/">Cancel</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        : !course && !errors ?
          null
        : errors.status === 403 ?
          <Redirect to="/forbidden" />
        : !course && errors.status === 404 ?
          <Redirect to="/notfound" />
        :
          <Redirect to="/error" />
        }
        </React.Fragment>
    )
  }
}