import {Card, CardActionArea, CardContent, Typography} from '@mui/material';
import {MainContext} from '../context/MainContext';
import {useContext} from 'react';
import ItemDialog from './ItemDialog';

const PostListItem = ({post}) => {
  const {user, itemDialog, openItemDialog} = useContext(MainContext);

  const test = () => {
    console.log('POST', post);
    openItemDialog(true);
  };
  return (
      <>
        <ItemDialog postItem={post}/>
        <Card sx={{minWidth: 360, margin: 10}}>
          <CardActionArea onClick={test}>
            <CardContent>
              <Typography sx={{fontSize: 14}} color="text.secondary"
                          gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                {post.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
  );
};

export default PostListItem;

