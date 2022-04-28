import React, {useEffect, useState} from 'react';

const MainContext = React.createContext({});

const MainProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    console.log(username, token);
    if (username) {
      setUser({username: username, token});
      setIsLoggedIn(true);
    }
  }, []);

  return (
      <MainContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            user,
            setUser,
          }}
      >
        {children}
      </MainContext.Provider>
  );
};

export {MainContext, MainProvider};