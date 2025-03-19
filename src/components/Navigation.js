import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Wardrobe Manager
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/')}>Wardrobe</Button>
          <Button color="inherit" onClick={() => navigate('/outfits')}>Outfits</Button>
          <Button color="inherit" onClick={() => navigate('/calendar')}>Calendar</Button>
          <Button color="inherit" onClick={() => navigate('/packing-lists')}>Packing Lists</Button>
          <Button color="inherit" onClick={() => navigate('/color-analysis')}>Color Analysis</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;