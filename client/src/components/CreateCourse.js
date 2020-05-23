import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CreateCourse extends React.Component {

  state = {
    errors: null
  }

  /**
   * 
   * @param {Event} evt
   */
  createNewCourse = (evt) => {
    evt.preventDefault();

    const { createCourse } = this.props.context.data;
    const { emailAddress , password } = this.props.context.user;

    // ↓ Creates course object
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
        if (res.status === 201) {
          // Resets validation errors 
          // in case proceeding for loop fails
          // ↓ (i.e. server stops sending location header)
          if (this.state.errors) {
            this.setState(() => {
              return {
                errors: null
              }
            })
          }
          // ↓ Pushes uri for created course onto history stack
          for (let pair of res.headers.entries()) {
            if (pair[0] === 'location') {
              this.props.history.push(`/courses/${pair[1].slice(pair[1].indexOf('courses') + 8)}`)
            }
          }
        } else {
          const errors = await res.json().then(data => data).then(errorObject => errorObject.errorMsg);
          this.setState( () => {
            return {
              errors
            }
          })
        }
      })
      // ↓ Catches server errors (i.e. 500+)
      .catch(errors => {
        console.error('Error: ', errors)
        this.setState(() => {
          return {
            errors
          }
        })
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
        <hr />
        <div className="bounds course--detail">
          <h1>Create Course</h1>
          <div>
            {/* ========================================================== 
              ==================== VALIDATION ERRORS =====================
              ========================================================== */}
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

            {/* ========================================================== 
              =========================== FORM ===========================
              ========================================================== */}
            <form onSubmit={this.createNewCourse}>
              <div className="grid-66">
              {/* ==================== COURSE TITLE ==================== */}
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input id="title" name="title" type="text" className="input-title course--title--input" ref={input => this.title = input} placeholder="Course title..." defaultValue="" />
                  </div>
                  <p>By {context.user ? `${context.user.firstName} ${context.user.lastName}` : null }</p>
                </div>
              {/* ================= COURSE DESCRIPTION ================= */}
                <div className="course--description">
                  <div>
                    <textarea id="description" name="description" className="" ref={input => this.description = input} placeholder="Course description..." defaultValue=""></textarea>
                  </div>
                </div>
              {/* ====================================================== */}
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                  {/* ================= ESTIMATED TIME ================= */}
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" ref={input => this.estimatedTime = input} placeholder="Hours" />
                      </div>
                    </li>
                  {/* ================ MATERIALS NEEDED ================ */}
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea id="materialsNeeded" name="materialsNeeded" className="" ref={input => this.materialsNeeded = input} placeholder="List materials..."></textarea>
                      </div>
                    </li>
                  {/* ================================================== */}
                  </ul>
                </div>
              </div>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit">Create Course</button>
                <Link className="button button-secondary" to='/' >Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default CreateCourse;