import React, { useState, useEffect, useMemo } from 'react';
import ReactPlayer from 'react-player';
import { Box, Container, Button } from '@mui/material';
import FlyingHeartsMui from './FlyingHeartsMui';
import palmiyeler from './Palmiyeler - Aslında Alkol Hala Damarımda.mp3'; // ← Dosyanın tam adıyla

function importAll(r) {
  return r.keys().map(r);
}

export default function App() {
  const images = useMemo(
    () => importAll(require.context('./images', false, /\.(JPG|JPEG|png|jpg|jpeg|HEIC)$/)),
    []
  );
  const [bg, setBg] = useState(images[0] || '');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setBg(images[Math.floor(Math.random() * images.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, [images, started]);

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      {!started && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            // istersen karartma ekle
            bgcolor: 'rgba(0,0,0,0.4)',
          }}
        >
          <Button
            variant="contained"
            onClick={() => setStarted(true)}
            sx={{
              backgroundColor: '#5D1451',       // patlıcan moru
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#4a0f3e' },
            }}
          >
            HER ŞEY BİR HAMBURGER'LA BAŞLADI
          </Button>
        </Box>
      )}

      {started && (
        <>
          <ReactPlayer url={palmiyeler} playing volume={1} hidden />

          <Box sx={{ position: 'relative', width: '100%', height: '60vh', mt: 2, overflow: 'hidden' }}>
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
            />
            <FlyingHeartsMui src={bg} count={80} size={100} minDur={2} maxDur={5} zoom={1} />
          </Box>
        </>
      )}
    </Container>
  );
}