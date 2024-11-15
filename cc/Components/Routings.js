import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Paper, Stack, List, ListItem, ListItemText, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExitToApp } from '@mui/icons-material';

const availableRoutes = [
  { id: 1, name: 'Route A', description: 'Connecting City A and City B' },
  { id: 2, name: 'Route B', description: 'Connecting City C and City D' },
  { id: 3, name: 'Route C', description: 'Connecting City E and City F' },
  { id: 4, name: 'Route D', description: 'Connecting City G and City H' },
];

function Routings() {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState('');

  const handleSelectRoute = () => {
    if (selectedRoute) {
      // Navigate to the bookings page with the selected route
      navigate(`/bookings?route=${selectedRoute}`);
    } else {
      alert('Please select a route.');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="routes-page">
      <AppBar position="static" style={{ backgroundColor: '#00796b' }}>
        <Toolbar>
          <Typography variant="h6" style={{ width: '100%' }}>
            Routes     
          </Typography>
          <Button color="inherit" onClick={handleSignOut}>
            <ExitToApp /> Sign Out
          </Button>
        </Toolbar>
      </AppBar>

      <main>
        <Stack spacing={3} style={{ padding: '20px' }}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Select a Route
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="route-select-label">Available Routes</InputLabel>
              <Select
                labelId="route-select-label"
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
              >
                <MenuItem value="">Select a Route</MenuItem>
                {availableRoutes.map((route) => (
                  <MenuItem key={route.id} value={route.name}>
                    {route.name} - {route.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button variant="contained" onClick={handleSelectRoute} style={{ marginTop: '16px' }}>
              Proceed to Book
            </Button>
          </Paper>

          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              All Available Routes
            </Typography>
            <List>
              {availableRoutes.map((route) => (
                <ListItem key={route.id}>
                  <ListItemText
                    primary={route.name}
                    secondary={route.description}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Stack>
      </main>
    </div>
  );
}

export default Routings;