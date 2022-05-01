import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import {useContext, useState} from 'react';
import AutoCompleteSports from './AutoCompleteSports';
import moment from 'moment';
import {useMutation} from '@apollo/client';
import {addPost} from '../utils/queries';
import {MainContext} from '../context/MainContext';

const FormDialog = () => {
  const [sportType, setSportType] = useState({});
  const {user, dialog, openDialog} = useContext(MainContext);

  const handleClose = () => {
    openDialog(false);
  };

  const [createPost] = useMutation(addPost);

  const doCreatePost = async (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    const title = elements.title.value;
    const desc = elements.desc.value;
    const location = elements.location.value;
    const date = elements.date.value;
    const sport = sportType.id;

    const postInfo = {
      owner: user.userId,
      title: title,
      description: desc,
      location: location,
      date: date,
      sport: sport,
      participants: user.userId,
    };
    if (title !== '' && desc !== '' && location !== '' && sportType !==
        'undefined') {
      try {
        await createPost({
          variables: {postInfo},
        });
      } catch (e) {
        console.log('addPostError', e.graphQLErrors);
      }
    }
  };

  return (
      <div>
        <Dialog open={dialog} onClose={handleClose}>
          <DialogTitle>Create new sport post</DialogTitle>
          <form onSubmit={doCreatePost}>
            <DialogContent>
              <DialogContentText>Fulfill the given options</DialogContentText>
              <TextField
                  margin="dense"
                  id="title"
                  label="Title for your sport post"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  margin="dense"
                  id="desc"
                  label="Short description for your sport post"
                  type="text"
                  fullWidth
                  multiline
                  variant="outlined"
              />
              <TextField
                  margin="dense"
                  id="location"
                  label="Location for your post"
                  type="text"
                  fullWidth
                  variant="outlined"
              />
              <TextField
                  margin="dense"
                  id="date"
                  label="Date for post"
                  type="datetime-local"
                  defaultValue={moment(new Date()).format('YYYY-MM-DDTHH:mm')}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
              />
              <AutoCompleteSports margin="dense"
                                  callback={(data) => {setSportType(data);}}/>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Create</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
  );
};
export default FormDialog;