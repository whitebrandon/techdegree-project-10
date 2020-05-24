import React from 'react';
import { Redirect } from 'react-router-dom';

export default function UserSignOut (props) {  

  const signOutDiv = React.useRef()

  /**
   * signs out the user
   */
  const handleSignOut = () => {
    props.context.actions.signOut();
  }

  /**
   * after component is rendered,
   * a click is sent to the div,
   * which calls handleSignOut
   */
  React.useEffect(() => {
    signOutDiv.current.click()
  });


  return (
    <div ref={signOutDiv} onClick={handleSignOut}>
      <Redirect to="/" />
    </div>
  )
}
