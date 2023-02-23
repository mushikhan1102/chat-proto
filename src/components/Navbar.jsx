import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
const style = {
  // edit top nav bar style
    nav: `bg-blue-800 h-20 flex justify-between items-center p-4`,

    // text color
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      
      {
      // user ternary for logged in/logged out
} 
      {user ? <LogOut /> : <SignIn />}
      
    </div>
  );
};

export default Navbar;
