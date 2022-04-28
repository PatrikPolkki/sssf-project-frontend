import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const PostListItem = ({post}) => {
  console.log(post);
  return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={post.owner.username} src=""/>
        </ListItemAvatar>
        <ListItemText primary={
          <>
            {post.title}
            <Typography
                sx={{
                  display: 'inline',
                  paddingLeft: '20px',
                }}
                component="span"
                variant="body2"
            >
              {post.owner.username}
            </Typography>
          </>
        } secondary={post.description}/>
      </ListItem>
  );
};

export default PostListItem;