import React from 'react';
import { Typography, Box } from '@mui/material';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '20px', position: 'relative', height: '100vh', backgroundColor: '#f0f8ff' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#ff69b4', fontFamily: 'Cursive' }}>
        Belki bedenlerimiz yanyana değildir ama ruhlarımız zamanın her yerinde beraber olacaktır.
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
      }}>
        <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
          Seni seviyorum ❤️
        </Typography>
      </Box>
    </div>
  );
}

export default App;