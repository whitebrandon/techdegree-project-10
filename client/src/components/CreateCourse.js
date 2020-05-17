import React from 'react';

class CreateCourse extends React.Component {

  state = {
    errors: null
  }

  createNewCourse = (evt) => {
    evt.preventDefault();
    const { createCourse } = this.props.context.data;
    const { emailAddress , password } = this.props.context.user;
    const course =  {
      title: this.title.value,
      description: this.description.value,
    }
    if (this.estimatedTime.value) {
      course.estimatedTime = this.estimatedTime.value
    };
    if (this.materialsNeeded.value) {
      course.materialsNeeded = this.materialsNeeded.value
    }
    createCourse(course, emailAddress, password)
      .then(async res => {
        if (res.status !== 201) {
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
          for (let pair of res.headers.entries()) {
            if (pair[0] === 'location') {
              this.props.history.push(`/courses/${pair[1].slice(pair[1].indexOf('courses') + 8)}`)
            }
         }
        }
      })
  }

  render () {

    const { context } = this.props;
    const { errors } = this.state;

    return (
      // MY CODE IS BELOW
      // <form classNameName="col-md-6 mx-auto" action="http://localhost:5000/api/courses" method="post">
      //   <h2>Create Course</h2>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <label htmlFor="courseTitle" classNameName="text-muted">Course</label>
      //           <input name="title" type="text" classNameName="form-control" id="courseTitle" placeholder="Course Title..." />
      //           <small id="emailHelp" classNameName="form-text text-muted">By Teacher Name</small>
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label htmlFor="estimatedTime" classNameName="text-muted">Estimated Time</label>
      //         <input name="estimatedTime" type="text" classNameName="form-control" id="estimatedTime" placeholder="Hours" />
      //       </div>
      //     </div>
      //     <div classNameName="row">
      //       <div classNameName="col">
      //         <div classNameName="form-group">
      //           <input name="description" type="textarea" classNameName="form-control" id="courseDescription" placeholder="Course description..." />
      //         </div>
      //       </div>
      //       <div classNameName="col">
      //         <label htmlFor="materialsNeeded" classNameName="text-muted">Materials Needed</label>
      //         <input name="materialsNeeded" type="textarea" classNameName="form-control" id="materialsNeeded" placeholder="List materials..." />
      //       </div>
      //     </div>
      //     <div classNameName="btn-group border border-info" role="group">
      //       <button type="submit" classNameName="btn btn-primary rounded m-1">Create Course</button>
      //       <a href="/" role="button" classNameName="btn btn-secondary rounded m-1">Cancel</a>
      //     </div>
      // </form>
      <div>
        {/* Horizontal Line */}
        <hr />


        <div className="bounds course--detail">
          <h1>Create Course</h1>
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

            {/* Start of Form */}
            <form>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  {/* Course Title */}
                  <div>
                    <input id="title" name="title" type="text" className="input-title course--title--input" ref={input => this.title = input} placeholder="Course title..." defaultValue="" />
                  </div>
                  <p>By {`${context.user.firstName} ${context.user.lastName}`}</p>
                </div>
                {/* Course Description */}
                <div className="course--description">
                  <div>
                    <textarea id="description" name="description" className="" ref={input => this.description = input} placeholder="Course description..." defaultValue=""></textarea>
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
                        <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" ref={input => this.estimatedTime = input} placeholder="Hours" />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      {/* Materials Needed */}
                      <div>
                        <textarea id="materialsNeeded" name="materialsNeeded" className="" ref={input => this.materialsNeeded = input} placeholder="List materials..."></textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" 
                        type="submit"
                        onClick={this.createNewCourse
                          /*context.data.createCourse(course, context.user.username, context.user.password)*/}>Create Course
                </button>
                <a className="button button-secondary" href='/' >Cancel</a></div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default CreateCourse;