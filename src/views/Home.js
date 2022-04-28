import PostList from '../componets/PostList';
import {List} from '@mui/material';
import CreateFabButton from '../componets/CreateFabButton';

const Home = () => {
  const createPost = () => {
    console.log('PRESSED');
  };
  return (
      <div>
        <List sx={{
          marginTop: '10px',
          display: 'inline-block',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}>
          <PostList/>
        </List>
        <CreateFabButton func={createPost}/>
      </div>
  );
};

export default Home;