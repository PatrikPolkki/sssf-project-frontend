import './App.css';
import {useContext, useEffect} from 'react';
import {MainContext} from './context/MainContext';
import Home from './views/Home';
import Login from './views/Login';
import TopBar from './componets/TopBar';
import Profile from './views/Profile';
import FormDialog from './componets/FormDialog';
import ItemDialog from './componets/ItemDialog';
import {io} from 'socket.io-client';

const App = () => {
  const {isLoggedIn, profile, itemDialog, setSocket} = useContext(MainContext);

  useEffect(() => {
    const newSocket = io('https://localhost:8000');
    newSocket.on('connect', () => {
      console.log('Socket connected', newSocket);
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  return (
      <div className="App">
        <TopBar/>
        <FormDialog/>
        {itemDialog ? (<ItemDialog/>) : (<></>)
        }
        {isLoggedIn ? (
            profile ? <Profile/> : <Home/>
        ) : (
            <Login/>
        )}
      </div>
  );
};

export default App;
