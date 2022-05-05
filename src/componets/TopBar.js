import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';

const TopBar = () => {
  const {
    setIsLoggedIn,
    isLoggedIn,
    setUser,
    setFormToggle,
    formToggle,
    openDialog,
    profile,
    openProfile,
  } = useContext(
      MainContext);

  const enableLoginForm = () => {
    setFormToggle(true);
  };
  const enableRegisterForm = () => {
    setFormToggle(false);
  };

  const enableProfile = () => {
    openProfile(true);
  };

  const enableHome = () => {
    openProfile(false);
  };

  const handleDialogOpen = () => {
    openDialog(true);
  };

  const logOut = () => {
    localStorage.clear();
    setUser({});
    setIsLoggedIn(false);
  };

  return (
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div"
                        sx={{flexGrow: 1, textAlign: 'start'}}>
              Sport App
            </Typography>
            {isLoggedIn ? (
                <>
                  <Button color="inherit"
                          onClick={handleDialogOpen}>Create</Button>
                  <Button color="inherit" onClick={logOut}>Log Out</Button>

                  <Button color="inherit"
                          onClick={enableHome}
                          sx={profile
                              ? {display: 'inline-flex'}
                              : {display: 'none'}}>Home</Button>
                  <Button color="inherit"
                          onClick={enableProfile}
                          sx={profile
                              ? {display: 'none'}
                              : {display: 'inline-flex'}}>Profile</Button>
                </>
            ) : (
                <>
                  <Button color="inherit"
                          onClick={enableRegisterForm}
                          sx={formToggle
                              ? {display: 'inline-flex'}
                              : {display: 'none'}}>Register</Button>
                  <Button color="inherit"
                          onClick={enableLoginForm}
                          sx={formToggle
                              ? {display: 'none'}
                              : {display: 'inline-flex'}}>Log
                    in</Button>
                </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default TopBar;