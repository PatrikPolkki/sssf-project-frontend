import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../context/MainContext';
import {useMutation, useQuery} from '@apollo/client';
import {applyToPost, getPostQuery, leaveFromPost} from '../utils/queries';
import moment from 'moment';

const ItemDialog = () => {
  const {user, itemDialog, openItemDialog, itemId} = useContext(MainContext);
  const [postItem, setPostItem] = useState({});

  const {data} = useQuery(getPostQuery, {variables: {postId: itemId}});
  const [applyAction] = useMutation(applyToPost);
  const [leaveAction] = useMutation(leaveFromPost);

  const handleClose = () => {
    openItemDialog(false);
  };

  useEffect(() => {
    console.log('data', data);
    if (data) setPostItem(data.post);
  }, [data]);

  /*
  useEffect(() => {
    if (dataA) setPostItem(dataA);
  }, [dataA]);
*/

  const applyPost = async () => {
    const postID = postItem.id;
    const userID = user.userId;
    try {
      await applyAction({
        variables: {
          applyToPostId: postID,
          participantId: userID,
        },
      });
    } catch (e) {
      console.log('applyToPost Error', e);
    }
  };

  const leavePost = async () => {
    const postID = postItem.id;
    const userID = user.userId;
    try {
      await leaveAction({
        variables: {
          leaveFromPostId: postID,
          participantId: userID,
        },
      });
    } catch (e) {
      console.log('LeavePost Error', e);
    }
  };

  const checkParticipants = () => {
    if (postItem.participants && (postItem.participants.length !== 0)) {
      const test = postItem.participants.findIndex(item => {
        console.log('ITEM', item);
        return item.id === user.userId;
      });
      return test !== -1;
    }
  };

  const owner = (postItem.owner && postItem.owner.id &&
      (postItem.owner.id === user.userId));

  return (
      <div>
        <Dialog open={itemDialog} onClose={handleClose} fullWidth>
          <DialogTitle
              textAlign={'center'}>{postItem.title}</DialogTitle>
          <DialogContent>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '10px',
            }}>
              <Typography variant={'body1'}>Location</Typography>
              <Typography variant={'body1'}>{postItem.location}</Typography>
            </div>
            <Divider/>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '10px',
            }}>
              <Typography variant={'body1'}>Date</Typography>
              <Typography variant={'body1'}>{moment(postItem.date).
                  format('MMMM d, YYYY h:mma')}</Typography>
            </div>
            <Divider/>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '10px',
            }}>
              <Typography variant={'body1'}>Number of applicants</Typography>
              <Typography variant={'body1'}>{postItem.participants
                  ? postItem.participants.length
                  : 'not found'}</Typography>
            </div>
            <Divider/>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '10px',
            }}>
              <Typography variant={'body1'}>Sport</Typography>
              <Typography variant={'body1'}>{postItem.sport &&
              postItem.sport.title
                  ? postItem.sport.title
                  : 'not found'}</Typography>
            </div>
            <Divider/>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px'
              ,
            }}>
              <Typography variant={'body1'}>Description</Typography>
              <DialogContentText>
                <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                  {postItem.owner && postItem.owner.username
                      ? postItem.owner.username
                      : 'not found'}
                </Typography>
                {` - ${postItem.description}`}
              </DialogContentText>
            </div>
            <Divider/>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              {!checkParticipants() ? (
                  <Button variant="contained"
                          onClick={applyPost}>APPLY</Button>
              ) : (
                  <Button variant="contained"
                          onClick={leavePost} disabled={owner}>Leave</Button>
              )
              }

            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
  );
};
export default ItemDialog;