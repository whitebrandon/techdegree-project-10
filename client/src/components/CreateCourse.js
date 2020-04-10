import React from 'react';

const CreateCourse = (props) => {
  return (
    <form action="http://localhost:5000/api/courses" method="post">
      <h2>Create Course</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label for="courseTitle" className="text-muted">Course</label>
              <input type="email" className="form-control" id="courseTitle" placeholder="Course Title..." />
              <small id="emailHelp" className="form-text text-muted">By Teacher Name</small>
            </div>
          </div>
          <div className="col">
            <label for="estimatedTime" className="text-muted">Estimated Time</label>
            <input type="text" className="form-control" id="estimatedTime" placeholder="Hours" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <input type="textarea" className="form-control" id="courseDescription" placeholder="Course description..." />
            </div>
          </div>
          <div className="col">
            <label for="materialsNeede" className="text-muted">Materials Needed</label>
            <input type="textarea" className="form-control" id="materialsNeeded" placeholder="List materials..." />
          </div>
        </div>
      <button type="submit" className="btn btn-primary rounded">Create Course</button>
      <button type="submit" className="btn btn-secondary rounded">Cancel</button>
    </form>
  )
}

export default CreateCourse;