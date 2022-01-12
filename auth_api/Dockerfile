FROM node:10-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY ./auth_api/. .
EXPOSE 3001
CMD [ "node", "server.js" ]