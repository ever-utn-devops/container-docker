# Workshop -  Working with Docker containers

_**Running the RestApi locally**_

1. Install Visual Studio Code
2. Install nodejs
3. Open the project in Visual Studio Code
4. Run in the terminal **npm install** for installing all dependencies (only one time)
5. For running locally, every project needs to be opend separately.
5. Run the restapi: **npm start** (every time you want to run the app locally)
6. Access the api with this url: [**http://localhost:3000/containers**](url) or [**http://localhost:3001/users**](url) or [**http://localhost:3002/status**](url)

**Running every project separately on container**
docker build -t <<mage-name you want to specify>>

**Running all restapi projects on containers**
docker-compose up --build


**Accessin the api from the cloud**

When accessing the links the info will be displayed in json format.

