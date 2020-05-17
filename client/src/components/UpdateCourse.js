import React from 'react';

export default class UpdateCourse extends React.Component {
  
  state = {
      course: this.props.location.state ? this.props.location.state.course : null,
      isMounted: false,
      errors: null
  }

  async componentDidMount () {
    if (!this.state.course) {
      const course = await this.props.context.data.getCourse(parseInt(this.props.match.params.id)).then(data => data);
      this.setState(() => {
        return {
          course,
          isMounted: true
        }
      })
    }
  }

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
          const errors = await res.json().then(data => data).then(errorObject => errorObject.errorMsg);
          this.setState( () => {
            return {
              errors
            }
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
    const { errors } = this.state;
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
      <div>
        {/* Horizontal Line */}
        <hr />

        { this.state.course 
        ?
        <div className="bounds course--detail">
          <h1>Update Course</h1>
          <div>
          {/* Validation Errors, if present */}
          { errors ?
            <div>
              <h2 className="validation--errors--label">Validation errors</h2>
              <div className="validation-errors">
                <ul>
                  {errors.map((error, index) => <li key={index}>{error.replace('title', 'Course Title').replace('description', 'Course Description')}</li>)}
                  {/* <li>Please provide a value for "Title"</li>
                  <li>Please provide a value for "Description"</li> */}
                </ul>
              </div>
            </div>
            : null
            }
            <form onSubmit={this.handleSubmit}>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  {/* Course Title */}
                  <div>
                    <input id="title"
                           name="title" 
                           type="text"
                           ref={input => this.title = input} 
                           className="input-title course--title--input" 
                           placeholder="Course title..." 
                           defaultValue={this.state.course.title} 
                    />
                  </div>
                  {/* Course Author */}
                  <p>By {`${this.state.course.User.firstName} ${this.state.course.User.lastName}`}</p>
                </div>
                {/* Course Description */}
                <div className="course--description">
                  <div>
                    <textarea id="description"
                              name="description"
                              ref={input => this.description = input} 
                              className="" 
                              defaultValue={this.state.course.description} 
                              placeholder="Course description..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      {/* Estimated Time */}
                      <div>
                        <input id="estimatedTime" 
                               name="estimatedTime" 
                               type="text" 
                               ref={input => this.estimatedTime = input}
                               className="course--time--input" 
                               placeholder="Hours" 
                               defaultValue={this.state.course.estimatedTime} 
                        />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      {/* Materials Needed */}
                      <div>
                        <textarea id="materialsNeeded" 
                                  name="materialsNeeded" 
                                  ref={input => this.materialsNeeded = input}
                                  className="" 
                                  defaultValue={this.state.course.materialsNeeded} 
                                  placeholder="List materials..."
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Button Section of Form */}
              <div className="grid-100 pad-bottom">
                {/* Updated Course Button */}
                <button className="button" type="submit">Update Course</button>
                {/* Cancel Button */}
                <a className="button button-secondary" href='/' >Cancel</a>
              </div>
            </form>
          </div>
        </div>
        : 
        this.state.isMounted && !this.state.course ? this.props.history.push('/') : null}
      </div>
    )
  }
}