import React, {useEffect, useState} from 'react';

const MainContext = React.createContext({});

const MainProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [formToggle, setFormToggle] = useState(true);
  const [dialog, openDialog] = useState(false);
  const [itemDialog, openItemDialog] = useState(false);
  const [profile, openProfile] = useState(false);
  const [itemId, setItemId] = useState('');
  const [socket, setSocket] = useState(undefined);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');
    console.log(username, token, id);
    if (username) {
      setUser({username: username, token: token, userId: id});
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
            formToggle,
            setFormToggle,
            dialog,
            openDialog,
            profile,
            openProfile,
            itemDialog,
            openItemDialog,
            itemId,
            setItemId,
            socket,
            setSocket,
          }}
      >
        {children}
      </MainContext.Provider>
  );
};

export {MainContext, MainProvider};