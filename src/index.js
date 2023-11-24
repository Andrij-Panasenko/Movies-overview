import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    bcgColor: '#1e1f27;',
    orange: '#FFD466',
    white: '#ffffff',
    red: '#E24C4B',
  },
  radii: {
    sm: '10px',
    ms: '15px',
    lg: '20px',
  },

  spacing: v => `${v * 2}px`
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
