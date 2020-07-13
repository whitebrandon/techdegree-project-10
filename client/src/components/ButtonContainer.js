import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonContainer (props) {
  return (
    /* CONTAINER FOR ***UPDATE***, ***DELETE***, AND ***HOME*** BUTTONS */
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          {props.user && props.user.id === props.course.userId &&
          <span>
            {/* UPDATE BUTTON */}
            <Link className="button" to={{ pathname: `/courses/${props.course.id}/update`, state: { course: props.course }}}>Update Course</Link>
            {/* DELETE BUTTON */}
            <Link className="button" to="/" onClick={props.deleteCourse}>Delete Course</Link>
          </span>}
          {/* HOME BUTTON */}
          <Link className="button button-secondary" to="/">Return to List</Link>
        </div>
      </div>
    </div>
  )
}
