import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <h1>Loading ...</h1>
      <CircularProgress />
    </Box>
  )
};

export default Loader;