import React, { useEffect } from 'react';
import { Typography, Box, AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import axios from 'axios';

function App() {
  const [activeTab, setActiveTab] = React.useState('clarama');

  useEffect(() => {
    axios.get('http://swapify.tr/api/visit')
    .then(response => {
      console.log('Ziyaret bildirimi başarılı:', response);
    }
    )
    .catch(err => {
      console.error('Ziyaret bildirimi başarısız:', err);
    }
    );
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', position: 'relative', height: '100vh', backgroundColor: '#f0f8ff' }}>
      <AppBar position="static" style={{ backgroundColor: 'rgba(15, 15, 81, 0.5)', justifyContent: 'center', alignItems: 'center', marginBottom: '5%' }}>
        <Toolbar>
          <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} textColor="inherit">
            <Tab value="clarama" label="Clara'ma" />
            <Tab value="notlar" label="Günah Çıkarma" />
            <Tab value="keske" label="Keşkeler" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {
        activeTab === 'clarama' ? (

          <>
            <Typography variant="h4" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              My Clara'm,
            </Typography>
            <Typography variant="h6" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              Belki de hiç okumayacaksın bu sözleri belki de aklına bile gelmeyecek bu alanımız ama yinede bu sözleri sana olan duygularımın bu kadar yoğun yaşamanın pişmanlığı ile yazıyorum.
              Senle beraber cok guzel anılar biriktirdik, ama şimdi tüm bu anılar cok güzel bir hikayeye dönüşüyor.
              Bana hep eskisi gibi biri olmadığımı söyledin. haklıydın değişmiştim. Olmadığım birine dönüştüm zamanla farkındayım.
              Kıskanç, bencil, çekilmez, arkadaşlarınla arana giren, kendi iç çatışmalarını sana yansıtan birine dönüştüm. Hiç bir zaman olmadıgım ama nasıl olduğunu bilmediğim birine.
              Sana olan aşkım (bunu bir bahane olarak sunmuyorum) beni tanıyamadığın biri yaptı.
              Belkide  sebebi seni kaybetme korkumdu. Ama şimdi seni kaybettim.
              Keşke seni kaybetmeden önce farkına varabilseydim. Düzeltebilseydim.
              Bu sözleri yazarken seni üzmenin acısıyla yazıyorum(belki de hiç dokunmicak kalbine. umarım öyle olur). Kötü bir sevgili oldum farkındayım. Bu yüzden seni suçlayamam.
              Son buluşmamızda kötü ayrılmak belki de isteyeceğim son anlardandı. Kızgındım ama kendime minik bir kız çocuguna bunu nasıl yapabildim diye suçladım kendimi.
              Beni affetmen için değil bu sözler artık çok geç farkındayım ama seni sevdiğimi bilmeni istiyorum.
              Tek derdi o güzel yüzüne gülücek kondurmak olan bir cocugun, o gözlere sadece gözyaşı ile dokunmasının acısını keske bu sözlerle telafi edebilecek olsam.
              Umarım bir gün seni hep güldürebilecek o güzel insanı bulursun. Bunu tüm kalbimle söylüyorum. Tek dileğim mutlu olman.
            </Typography>
            <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              Sakarya da seni bekleyen bir evin olduğunu ve seni hep bekleyeceğini bilmeni isterim.
            </Typography>
            <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              Seni çok seven ve hep sevecek olan, FKA ❤️.
            </Typography>
            <Typography variant="h6" style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              THE END
            </Typography>
          </>
        ) : activeTab == "notlar" ? (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              Sevdiği kadını kaybeden bir çocuğun tek günahı kadınının sevmediği bir adama dönüşmüş olmasıdır.
            </Typography>
            <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
              Şimdi o çocuk geri döndü ama sevdiği kız çocuğu onu tanımıyor.
            </Typography>
    
          </Box>
        ) : (
          <Box sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke onu benden nefret etmesini sağlayarak ayrılsaydım belki o zaman daha az üzülürdü.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke ona olan sevgimin arkadaşlarıyla arasına girmesine izin vermeseydim.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke onun beni sevmesine izin vermeseydim.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke yaptığımın onun için ne anlama geldiğini düşünürek yapmasaydım.
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke onun adına karar almasaydım. 
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6a5acd', fontFamily: 'Cursive' }}>
            Keşke keşkelerimi ona karşı kullanmasaydım.
          </Typography>
        </Box>
        )
      }
    </div>
  );
}

export default App;