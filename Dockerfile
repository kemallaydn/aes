# Temel imaj: Node'un resmi image'ı
FROM node:20

# Uygulama dizinine geçelim
WORKDIR /app

# package.json ve package-lock.json'ı kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodlarını kopyala
COPY . .

# Build yap
RUN npm run build

# Nginx üzerinden serve edeceğimiz için, sadece build klasörünü alacağız

# Nginx image'ına geç
FROM nginx:alpine

# Nginx'in default html klasörünü temizle
RUN rm -rf /usr/share/nginx/html/*

# Bizim React build dosyalarını nginx'e kopyala
COPY --from=0 /app/build /usr/share/nginx/html

# 80 portunu aç
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]