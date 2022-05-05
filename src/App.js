import './App.css';
import {useContext} from 'react';
import {MainContext} from './context/MainContext';
import Home from './views/Home';
import Login from './views/Login';
import TopBar from './componets/TopBar';
import Profile from './views/Profile';
import FormDialog from './componets/FormDialog';
import ItemDialog from './componets/ItemDialog';

const App = () => {
  const {isLoggedIn, profile, itemDialog} = useContext(MainContext);
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
