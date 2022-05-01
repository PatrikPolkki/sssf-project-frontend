import PostList from '../componets/PostList';
import {List} from '@mui/material';
import FormDialog from '../componets/FormDialog';

const Home = () => {
  return (
      <div>
        <FormDialog/>
        <List sx={{
          marginTop: '10px',
          display: 'inline-block',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}>
          <PostList/>
        </List>
      </div>
  );
};

export default Home;