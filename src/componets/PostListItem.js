import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import {MainContext} from '../context/MainContext';
import {useContext} from 'react';
import moment from 'moment';

const PostListItem = ({post}) => {
  const {
    openItemDialog,
    setItemId,
  } = useContext(MainContext);

  const test = () => {
    console.log('POST', post);
    openItemDialog(true);
    setItemId(post.id);
  };

  // moment(post.date).format('MMMM d, YYYY')
  return (
      <Card sx={{
        minWidth: 360,
        margin: '10px',
        textAlign: 'start',
        backgroundColor: '#f8f8f8',
      }}>
        <CardActionArea onClick={test}>
          <CardContent>
            <Typography variant="h4"
                        textAlign="center">{post.sport.title}</Typography>
            <Divider sx={{margin: '8px 0'}}/>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Box>
                <Typography>
                  {`On ${moment(post.date).format('MMMM d, YYYY')}`}
                </Typography>
                <Typography>
                  {`At ${post.location}`}
                </Typography>
              </Box>
              <Box>
                <Typography color="text.secondary" variant="body2">
                  {`Posted by`}
                </Typography>
                <Typography>
                  {`${post.owner.username}`}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{margin: '8px 0'}}/>
            <Typography variant="h5">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default PostListItem;

