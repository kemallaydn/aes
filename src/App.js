import React, { useState, useEffect, useMemo } from 'react';
import ReactPlayer from 'react-player';
import { Box, Container, Button } from '@mui/material';
import FlyingHeartsMui from './FlyingHeartsMui';

function importAll(r) {
  return r.keys().map(r);
}

export default function App() {
  const images = useMemo(
    () => importAll(require.context('./images', false, /\.(JPG|JPEG|png|jpg|HEIC)$/)),
    []
  );
  const [bg, setBg] = useState(images[0] || '');
  const [started, setStarted] = useState(false);
  const youtubeLink = 'https://youtu.be/xDSe2rWmK0w?si=3SK4fuH6saI7Q1I1';

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * images.length);
      setBg(images[idx]);
    }, 2000);
    return () => clearInterval(interval);
  }, [images, started]);

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      {!started && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStarted(true)}
        >
          HER ŞEY BİR HAMBURGER'LA BAŞLADI
        </Button>
      )}

      {started && (
        <>
          {/* YouTube sesini başlat */}
          <ReactPlayer
            url={youtubeLink}
            playing={true}
            hidden={true}
            volume={1}
          />

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '60vh',
              mt: 2,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={bg}
              alt="Background"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
            <FlyingHeartsMui
              src={bg}
              count={80}
              size={100}
              minDur={2}
              maxDur={5}
              zoom={1}
            />
          </Box>
        </>
      )}
    </Container>
  );
}