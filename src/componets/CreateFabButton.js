import {Box, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateFabButton = ({func}) => {

  return (
      <Box sx={{'& > :not(style)': {m: 1}}}>
        <Fab variant="extended" color="primary" aria-label="add" onClick={func}>
          <AddIcon sx={{mr: 1}}/>
          Create
        </Fab>
      </Box>
  );
};
export default CreateFabButton;