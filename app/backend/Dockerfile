FROM node:16.14-alpine

COPY package.json package-lock.json /

WORKDIR /app

RUN npm install

COPY . /app
