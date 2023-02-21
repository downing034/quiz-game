import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box width="100%">
      <h1>Ops! This page doesn't exist</h1>
      <Link to="/">
        <h4>Go to Home</h4>
        </Link>
    </Box>
  )
};

export default NotFoundPage;