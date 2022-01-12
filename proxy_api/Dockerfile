FROM node:10-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./proxy_api/. .
EXPOSE 3002
CMD [ "node", "server.js" ]