FROM node:18-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /usr/src/api

COPY package*.json yarn.* ./

COPY . .

EXPOSE 3000

