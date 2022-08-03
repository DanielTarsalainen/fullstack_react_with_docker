FROM node:alpine AS build

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY --from=build /usr/app/build /usr/share/nginx/html

# 1. cmd --> docker build . (finds automcatically Dockerfile)

# 2. docker build -t globoapp/latest . 

# 3. docker run -d -p 3000:3000 globoapp/latest

# :wq to quit vim text editor

# Kill all container processes: docker kill $(docker ps -q)

# list containers: docker container ls

    # Inspect container: docker inspect <id>


# Docker port mapping

    # docker run -p -d 3000:3000 globoapp/latest


# Docker compose logs

    # docker-compose logs node-app

# Docker images

    # docker-compose images --> lists all images

# Docker services and ports

    # docker-compose ps --> lists name and port

# Docker compose stop node-app

    # docker-compose stop --> stops the compose process

# Docker compose start

    # Starts a specific process!

# docker-compose down --> removes Docker images or volumes


# Remove unused Docker images (dangling images, they are untagged)

    # docker image prune

# List docker containers

    # docker container ps

    # (including stopped ones: docker container ps -a)

# Remove an individual container

    # docker container rm <id>

# Remove all stopped containers

    # docker container rm $(docker container ps -a -q)

# List all docker volumes

    # docker volume ls

# Remove an individual volume

    # docker volume rm <id>

# Delete Unassociated volumes

    # docker volume prune

# List all docker containers

    # docker-compose ps











