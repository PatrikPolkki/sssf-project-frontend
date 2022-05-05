import {useEffect, useState} from 'react';
import {Autocomplete, TextField} from '@mui/material';
import {useQuery} from '@apollo/client';
import {getSportTypes} from '../utils/queries';

const AutoCompleteSports = ({callback, inputCallBack}) => {
  const {data} = useQuery(getSportTypes);
  const [sportsList, setSportsList] = useState([]);

  useEffect(() => {
    if (data) setSportsList(data.sportTypes);
  }, [data]);

  return (
      <>
        <Autocomplete
            id="sportTypes"
            disablePortal
            freeSolo
            sx={{
              marginTop: '8px',
              marginBottom: '4px',
            }}
            onInputChange={(event, value) => {
              inputCallBack(value);
              console.log('VAL', value);
            }}
            onChange={(event, newValue) => {
              console.log(newValue);
              callback(newValue);
            }}
            fullWidth
            options={sportsList}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Sports"
                                                variant="outlined"/>}
        />
      </>
  );
};
export default AutoCompleteSports;