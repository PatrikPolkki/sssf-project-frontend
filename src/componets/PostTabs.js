import {Box, Tab, Tabs} from '@mui/material';
import {useEffect, useState} from 'react';
import PostList from './PostList';

const TabPanel = (props) => {
      const {children, value, index, ...other} = props;

      useEffect(() => {
        console.log('CHILD', children);
      }, [children]);

      return (
          <div
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
          >
            {value === index && (
                <Box sx={{p: 3}}>
                  <PostList postList={children}/>
                </Box>
            )}
          </div>
      );
    }
;

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const PostTabs = (props) => {
  const {userPostList, appliedPostList} = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange}
                aria-label="basic tabs example"
                centered>
            <Tab label="Your own posts" {...a11yProps(0)} />
            <Tab label="Your applied posts" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {userPostList}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {appliedPostList}
        </TabPanel>
      </Box>
  );
};

export default PostTabs;