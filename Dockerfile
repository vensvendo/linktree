FROM node:20-alpine

WORKDIR /app

# Salin package.json dan instal dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh kode aplikasi linktree
COPY . .

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
