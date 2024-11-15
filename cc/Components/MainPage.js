import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography, Menu, MenuItem, Paper, Stack, FormControl, InputLabel, Select } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFindTrain, setShowFindTrain] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedTrain, setSelectedTrain] = useState('');

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFindTrainClick = () => {
    setShowFindTrain(!showFindTrain);
  };

  const routes = [
    { id: 1, name: 'Route A' },
    { id: 2, name: 'Route B' },
    { id: 3, name: 'Route C' },
    { id: 4, name: 'Route D' }
  ];

  const trains = {
    'Route A': ['Train A1', 'Train A2', 'Train A3'],
    'Route B': ['Train B1', 'Train B2', 'Train B3'],
    'Route C': ['Train C1', 'Train C2', 'Train C3'],
    'Route D': ['Train D1', 'Train D2', 'Train D3']
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (!selectedRoute || !selectedTrain) {
      alert('Please select both a route and a train.');
      return;
    }
    // Handle the form submission logic here
    console.log(`Selected Route: ${selectedRoute}`);
    console.log(`Selected Train: ${selectedTrain}`);
    // You can also navigate to another page or make an API call here
    alert(`The train ${selectedTrain} on ${selectedRoute} is Available.`);
  };

  return (
    <div className="main-page">
      <AppBar position="static" style={{ backgroundColor: '#00796b', color: 'white'}}>
        <Toolbar style={{display:'flex',flexDirection:'row',gap:'50vh'
        }}>
          <Typography variant="h6" width={1000}>
            Railway Management System
          </Typography>
          <Button
            variant="contained"
            style={{ color: 'white',width:'30vh' }}
            onClick={handleMenuOpen}
            
          >
            Travel now
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top', horizontal: 'right'
            }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleFindTrainClick}>Find a Train</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/bookings'); }}>
              Book a Ticket
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/routes'); }}>View Routes</MenuItem>
            <MenuItem onClick={handleSignOut}>
              <ExitToApp /> Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <main>
        <Stack spacing={3} style={{ padding: '20px' }}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Railway Management System
            </Typography>
            <Typography variant="body1">
              Connecting you to your destination with comfort and convenience.
            </Typography>
          </Paper>

          {showFindTrain && (
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Find a Train
 </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                  <InputLabel id="route-label">Select Route</InputLabel>
                  <Select
                    labelId="route-label"
                    value={selectedRoute}
                    onChange={(e) => {
                      setSelectedRoute(e.target.value);
                      setSelectedTrain('');
                    }}
                  >
                    <MenuItem value="">Select Route</MenuItem>
                    {routes.map(route => (
                      <MenuItem key={route.id} value={route.name}>{route.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="train-label">Select Train</InputLabel>
                  <Select
                    labelId="train-label"
                    value={selectedTrain}
                    onChange={(e) => setSelectedTrain(e.target.value)}
                    disabled={!selectedRoute}
                  >
                    <MenuItem value="">Select Train</MenuItem>
                    {selectedRoute && trains[selectedRoute]?.map((train, index) => (
                      <MenuItem key={index} value={train}>{train}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </Paper>
          )}

          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              About Our Railway
            </Typography>
            <Typography variant="body1">
              Our railway network spans across the country, connecting major cities and towns. We strive to provide a comfortable and convenient travel experience to our passengers.
            </Typography>
            <br />
            <Typography variant="body1">
              With a fleet of modern trains and a team of dedicated staff, we aim to set new standards in the railway industry.
            </Typography>
          </Paper>
        </Stack>
      </main>

      <footer style={{ backgroundColor: '#00796b', color: '#fff', padding: '10px' }}>
        <Typography variant="body2">
          &copy; 2024 Railway Management System. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default MainPage;