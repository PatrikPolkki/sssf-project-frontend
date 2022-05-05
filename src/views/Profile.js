import {Avatar} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../context/MainContext';
import PostTabs from '../componets/PostTabs';
import {useQuery} from '@apollo/client';
import {getPostsByUser, getUserInfo} from '../utils/queries';
import {stringAvatarBig} from '../utils/helperFunctions';

const Profile = () => {
  const {user} = useContext(MainContext);
  const [userPostList, setUserPostList] = useState([]);
  const [appliedPostList, setAppliedPostList] = useState([]);

  const {data: dataA} = useQuery(getPostsByUser,
      {variables: {postByUserId: user.userId}});
  const {data: dataB} = useQuery(getUserInfo,
      {variables: {userId: user.userId}});

  useEffect(() => {
    if (dataB && dataB.user) setAppliedPostList(dataB.user.applied_sports);

  }, [dataB]);

  useEffect(() => {
    if (dataA) setUserPostList(dataA.postByUser);
  }, [dataA]);

  return (
      <div style={{
        maxWidth: '550px',
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar
            alt={user.username} {...stringAvatarBig(user.username)}/>
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