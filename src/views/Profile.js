import {Avatar} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../context/MainContext';
import PostTabs from '../componets/PostTabs';
import {useQuery} from '@apollo/client';
import {getAppliedPosts, getPostsByUser} from '../utils/queries';

const Profile = () => {
  const {user} = useContext(MainContext);
  const [userPostList, setUserPostList] = useState([]);
  const [appliedPostList, setAppliedPostList] = useState([]);

  const {data: dataU} = useQuery(getPostsByUser,
      {variables: {postByUserId: user.userId}});

  const {data: dataA} = useQuery(getAppliedPosts,
      {variables: {appliedPostsId: user.userId}});

  useEffect(() => {
    if (dataU) setUserPostList(dataU.postByUser);
    console.log('DATA1', dataU);
  }, [dataU]);

  useEffect(() => {
    if (dataA) setAppliedPostList(dataA.appliedPosts);
    console.log('DATA2', dataA);
  }, [dataA]);

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        width: 100,
        height: 100,
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  };
  return (
      <div style={{
        maxWidth: '550px',
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar
            alt={user.username} {...stringAvatar(user.username)}/>
        <h1>{user.username}</h1>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <h3 style={{margin: '0 10px'}}>{`${userPostList.length} Own Posts`}</h3>
          <h3 style={{margin: '0 10px'}}>{`${appliedPostList.length} Applied Posts`}</h3>
        </div>
        <PostTabs userPostList={userPostList}
                  appliedPostList={appliedPostList}/>
      </div>
  );
};

export default Profile;