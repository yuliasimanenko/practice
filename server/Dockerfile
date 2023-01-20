FROM node:18.10.0-alpine as build
WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD npm start