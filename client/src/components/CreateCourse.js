import React from 'react';

function CreateCourse () {

  return (
    <div>
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
        </div>
      </div>
      <hr />
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Description"</li>
              </ul>
            </div>
          </div>
          <form>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                    value="" readOnly /></div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div><textarea id="description" name="description" className="" placeholder="Course description..."></textarea></div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                        placeholder="Hours" value="" readOnly /></div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."></textarea></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick={() => console.log('Something Happens Here')}>Cancel</button></div>
          </form>
        </div>
      </div>
    </div>













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
  )
}


export default CreateCourse;