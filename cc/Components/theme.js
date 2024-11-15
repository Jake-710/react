// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63', // Pink color for primary buttons
    },
    secondary: {
      main: '#9c27b0', // Purple color for secondary elements
    },
    background: {
      default: '#f3e5f5', // Light purple background color
    },
  },
});

export default theme;
