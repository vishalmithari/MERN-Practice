import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: { primary: { main: '#0b63ce' }, secondary: { main: '#0aa6c7' } },
  typography: { fontFamily: 'Inter, Arial, sans-serif' },
  shape: { borderRadius: 14 },
  components: { MuiButton: { defaultProps: { disableElevation: true } } }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><ThemeProvider theme={theme}><App /></ThemeProvider></React.StrictMode>
);
