import React from 'react';
import { Container, Typography, Box } from '@mui/material'; // Material-UI bileşenlerini içe aktar

import './App.css'; // Stilinizi koruyun

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
          }}
        >
          <Container>
            <Typography variant="h3" component="h1" color="primary" gutterBottom>
              Açelya Elif Sağlam'ın Sayfasına Hoşgeldiniz
            </Typography>
            <Typography variant="h6" component="p" color="textSecondary">
              Bu sayfa, Açelya Elif Sağlam'a ait özel bir sayfadır. Burada çok eğlenceli şeyler bulabilirsin!
            </Typography>
          </Container>
        </Box>
      </header>
    </div>
  );
}

export default App;