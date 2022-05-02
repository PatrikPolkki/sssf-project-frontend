import PostListItem from './PostListItem';
import {useEffect, useState} from 'react';

const PostList = ({postList}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (postList) setPosts(postList);
  }, [postList]);

  return (
      <>
        {posts.length > 0 ? posts.map(
                (item) => <PostListItem key={item.id} post={item}/>) :
            <p>No posts</p>}
      </>
  );
};
export default PostList;