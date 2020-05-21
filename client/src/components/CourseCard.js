import React from 'react';

export default function CourseCard (props) {
    return (
        <div className="grid-33">
        <a className="course--module course--link" href={`courses/${props.course.id}`}>
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{props.course.title}</h3>
        </a>
      </div>
    )
}