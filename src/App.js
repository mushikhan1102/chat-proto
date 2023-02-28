import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  // set container (main boxes)
  appContainer: `max-w-[750px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100  mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  
  return (
    <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        
          <Navbar />
        
        {
          // user ternary, check for logged user, if logged go to <chat/> else null
        }
        {user ? <Chat /> : null}
      </section>
      
    </div>
  );
}

export default App;
