FROM node:latest

ADD . /opt/weather-app/
WORKDIR /opt/weather-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT npm start
