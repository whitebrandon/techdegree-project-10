import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer (props) {
    return (
      /* ↓ CONTAINER FOR ***UPDATE***, ***DELETE*** AND ***HOME*** BUTTONS ↓ */
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
          { props.user && props.user.id === props.course.userId ?
          <span>
              {/* Update Button */}
              <Link className="button" to={{ pathname: `/courses/${props.course.id}/update`, state: { course: props.course }}}>Update Course</Link>
              {/* Delete Button */}
              <a className="button"
              href='/'
              onClick={props.deleteCourse}>Delete Course
              </a>
          </span> :
          null }
          {/* Home Button */}
          <a className="button button-secondary" href="/">Return to List</a>
          </div>
        </div>
      </div>
    )
} 