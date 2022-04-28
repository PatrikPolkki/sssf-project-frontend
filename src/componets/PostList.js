import PostListItem from './PostListItem';
import {useQuery} from '@apollo/client';
import {getPostsQuery} from '../utils/queries';
import {useEffect, useState} from 'react';

const PostList = () => {
  const {data} = useQuery(getPostsQuery);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) setPosts(data.posts);
  }, [data]);

  return (
      <>
        {posts.length > 0 ? posts.map(
                (item) => <PostListItem key={item.id} post={item}/>) :
            <p></p>}
      </>
  );
};
export default PostList;