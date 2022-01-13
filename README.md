# Docker Containers

## Common commands in Docker
- **docker pull**: it pulls images from Docker
    > docker pull debian
- **docker push**: it pusches an image to a repository to a registry.
    > docker push myimage
- **docker build: it creates a new images based on a existing image.
    > docker build -t myimage .
    
    -t --> it is used to specify an image name.  
    . --> it is used to specify the path where it needs to find the Dockerfile

- **docker run**: it creates a container based on an image.
    > docker run -dp 3000:3001 --name mycontainer myimage

    **-d** --> it indicates the container will run in background <br/>
    **-p** --> it indicates the ports (external:internal) where the container will run<br/>
    **--name** --> it indicates the container name.
- **docker image**: it displays all images create in docker
- **docker ps**: it displays all containers are running.
- **docker stop**: it stops a container
    > docker stop mycontainer
- **docker rm**: it removes a container
    > docker rm mycontainer
- **docker rm**: it removes an image
    > docker rmi myimage
- **docker restart**: it restarts a container
    > docker restart mycontainer
    
# Workshop -  Working with Docker containers

## Running the RestApi locally

1. Install Visual Studio Code
2. Install nodejs
3. Open the project in Visual Studio Code
4. Run in the terminal **npm install** for installing all dependencies (only one time)
5. For running locally, every project needs to be opend separately.
5. Run the restapi: **npm start** (every time you want to run the app locally)
6. Access the api with this url: [**http://localhost:3000/containers**](url) or [**http://localhost:3001/users**](url) or [**http://localhost:3002/status**](url)

## Running every project separately on container

- docker build -t mage-name-you-want-to-specify

> **Example:** doker build -t ebarahona/recipient-api-image

## Creating a container based on the image created previously

- docker run -dp 3000:3000 --name docker-name-you-want-specify image-name-you-specified

> **Example:** docker run -dp 3000:3000 --name ebarahona/recipient-api ebarahona/recipient-api-image

## Running all restapi projects on containers

- docker-compose up --build


## Accessin the api from the cloud

When accessing the links the info will be displayed in json format.

