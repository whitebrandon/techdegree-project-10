import React from 'react';

export default function NotFound (props) {
  if (props.location.pathname !== "/notfound") {
    props.history.push('/notfound')
  }
  return (
    <React.Fragment>
      <hr/>
      <div className="bounds">
        <h1>Not Found</h1>
        <p>Sorry! We couldn't find the page you're looking for.</p>
      </div>
    </React.Fragment>
  )
}