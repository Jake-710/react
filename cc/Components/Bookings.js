import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Paper, Stack, List, ListItem, ListItemText, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExitToApp } from '@mui/icons-material';

function Bookings() {
  const navigate = useNavigate();

  // Sample routes and trains data
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

  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedTrain, setSelectedTrain] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookings, setBookings] = useState([]);

  const handleBookTrain = (event) => {
    event.preventDefault();
    if (!selectedRoute || !selectedTrain || !bookingDate) {
      alert('Please select a route, train, and date.');
      return;
    }

    const newBooking = {
      id: bookings.length + 1,
      train: selectedTrain,
      route: selectedRoute,
      date: bookingDate,
    };

    setBookings([...bookings, newBooking]);
    // Clear the form
    setSelectedRoute('');
    setSelectedTrain('');
    setBookingDate('');
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="bookings-page">
      <AppBar position="static" style={{ backgroundColor: '#00796b' }}>
        <Toolbar>
          <Typography variant="h6"  sx={{ flexGrow: 1 }} style={{ width: '100%' }}>
            My Bookings
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
              Book a Train
            </Typography>
            <form onSubmit={handleBookTrain}>
              <FormControl fullWidth>
                <InputLabel id="route-label">Select Route</InputLabel>
                <Select
                  labelId="route-label"
                  value={selectedRoute}
                  onChange={(e) => {
                    setSelectedRoute(e.target.value);
                    setSelectedTrain(''); // Reset train selection
                  }}
                >
                  <MenuItem value="">Select Route</MenuItem>
                  {routes.map(route => (
                    <MenuItem key={route.id} value={route.name}>{route.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: '16px' }}>
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
              <text style={{ marginLeft: '1px' }}>Booking date :</text>
              <TextField
                label=""
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate (e.target.value)} // Corrected this line
                fullWidth
                style={{ marginTop: '16px' }}
              />

              <Button variant="contained" type="submit" fullWidth style={{ marginTop: '16px' }}>
                Book Train
              </Button>
            </form>
          </Paper>

          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Your Bookings
            </Typography>
            <List>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <ListItem key={booking.id}>
                    <ListItemText
                      primary={`${booking.train} - ${booking.route}`}
                      secondary={`Date: ${booking.date}`}
                    />
                    <Button variant="outlined" color="secondary" onClick={() => handleCancelBooking(booking.id)}>
                      Cancel
                    </Button>
                  </ListItem>
                ))
              ) : (
                <Typography variant="body1">You have no bookings.</Typography>
              )}
            </List>
          </Paper>
        </Stack>
      </main>
    </div>
  );
}

export default Bookings;