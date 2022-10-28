import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state,setState]= useState(0)
  useEffect(()=>{

   const storedLogginInfo =localStorage.getItem("isLogin")
   if(storedLogginInfo==="1"){
    setIsLoggedIn(true)
   }
  //  locolдон алдык и проверка идет если тру то setIsLoggedIn(true)тоже тру
  },[state])
 
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogin","1")
    // сохраняем на локол стореча
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogin")
    // удаляем из локолстареч
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {/* <button onClick={add}>add</button> */}
      </main>
    </React.Fragment>
  );
}

export default App;
