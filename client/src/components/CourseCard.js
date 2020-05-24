import React from 'react';
//import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CourseCard (props) {
  return (
    <div className="grid-33">
      <Card className="m-3 p-1" bg={'info'}>
        <Card.Header>Course</Card.Header>
        <Card body className="" style={{height: '150px'}}>
          <Card.Title>{props.course.title}</Card.Title>
          <Card.Text>
            {props.course.description.length > 150 ? props.course.description.substring(0, 150) + "..." : props.course.description}
          </Card.Text>
        </Card>
        <Card.Footer>
          <Button variant="outline-dark" className="" href={`courses/${props.course.id}`}>Learn More...</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}