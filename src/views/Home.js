import PostList from '../componets/PostList';
import {List} from '@mui/material';
import {useQuery} from '@apollo/client';
import {getPostsQuery} from '../utils/queries';
import {useEffect, useState} from 'react';

const Home = () => {
  const {data} = useQuery(getPostsQuery);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) setPosts(data.posts);
  }, [data]);

  return (
      <div>
        <List sx={{
          marginTop: '10px',
          display: 'inline-block',
          maxWidth: 600,
          bgcolor: 'background.paper',
        }}>
          <PostList postList={posts}/>
        </List>
      </div>
  );
};

export default Home;