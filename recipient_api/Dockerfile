FROM node:10-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./recipient_api/. .
EXPOSE 3000
CMD [ "node", "server.js" ]