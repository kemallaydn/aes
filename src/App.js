import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

function App() {
  const [isHovered, setIsHovered] = useState(false); // Hover durumunu takip etmek için state

  // Evet butonuna tıklandığında alert göster
  const handleYesClick = () => {
    alert("Hayatıma hoşmmmmmm geldinnnnnnnnnnnnnnnnnnnnnnnnn");
  };

  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '20px', position: 'relative', height: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Barışalım mı?
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexDirection: 'row',
      }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleYesClick} // Evet butonuna tıklanınca alert çalışsın
        >
          Evet
        </Button>
      </Box>

      {/* Hayır butonu */}
      <Button
        variant="contained"
        color="error"
        onMouseEnter={() => setIsHovered(true)}  // Fare butona geldiğinde
        onMouseLeave={() => setIsHovered(false)} // Fare butondan ayrıldığında
        style={{
          position: 'absolute', // Butonu ekranın herhangi bir yerine koyabilmek için
          top: `${Math.random() * 80 + 10}%`, // Yükseklik rastgele 10% ile 90% arasında
          left: `${Math.random() * 80 + 10}%`, // Genişlik rastgele 10% ile 90% arasında
          transform: 'translate(-50%, -50%)', // Butonun ortalanması için
          transition: 'all 0.3s ease-in-out', // Yer değiştirirken animasyon ekleyelim
          top: isHovered ? '50%' : `${Math.random() * 80 + 10}%`, // Hover'da ekranın ortasında
          left: isHovered ? '50%' : `${Math.random() * 80 + 10}%`, // Hover'da ekranın ortasında
        }}
      >
        Hayır
      </Button>
    </div>
  );
}

export default App;