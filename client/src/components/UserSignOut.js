import React from 'react';
import { Redirect } from 'react-router-dom';

export default function UserSignOut (props) {  

  const signOutDiv = React.useRef()

  const handleSignOut = () => {
    props.context.actions.signOut();
  }

  React.useEffect(() => {
    signOutDiv.current.click()
  });


  return (
    <div ref={signOutDiv} onClick={handleSignOut}>
      <Redirect to="/" />
    </div>
  )
}
