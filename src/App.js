import React from 'react';
import { Typography, Box } from '@mui/material';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '20px', position: 'relative', height: '100vh', backgroundColor: '#f0f8ff' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
        Merhaba Açelya,
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
        Yaşadığmız onca güzel günden sonra böyle kötü ayrılmanın ikimiz için de çok zor olduğunu biliyorum.
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
        Sana son kez güzel bir sekilde veda etmek ve eşyalarını teslim etmek istiyorum.
      </Typography>
      <Typography variant="h6" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
         Lütfen yarın saat 10:00'da antik bahçenin oraya gelir misin?
      </Typography>
      <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
          Seni seviyorum ❤️
        </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
      }}>
        <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
          Bu mesajı görürsen lütfen herhangi bir yerden ulaşmaya çalışır mısın.
        </Typography>
      </Box>
    </div>
  );
}

export default App;