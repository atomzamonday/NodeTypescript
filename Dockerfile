FROM node:16-alpine

WORKDIR /app

COPY build/index.js ./build/index.js
COPY package.json .

CMD ["yarn","start"]