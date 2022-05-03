import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';

const ItemDialog = ({postItem}) => {
  const {user, itemDialog, openItemDialog} = useContext(MainContext);

  const handleClose = () => {
    openItemDialog(false);
  };
  return (
      <div>
        <Dialog open={itemDialog} onClose={handleClose}>
          <DialogTitle>{postItem.description}</DialogTitle>
          <DialogContent>
            <DialogContentText>{postItem.title}</DialogContentText>
            <DialogContentText>TEst</DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
  );
};
export default ItemDialog;