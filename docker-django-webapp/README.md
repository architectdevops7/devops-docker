# Django with PostgreSQL

## Getting Started

Two containers
  * web app(Django)
  * database(PostgreSQL)


### Prerequisites

Make sure you have already installed both Docker Engine and Docker Compose.
You don’t need to install Python or PostgreSQL, as both are provided by Docker images.

```
$ docker -v
Docker version 18.03.1-ce, build 9ee9f40
$ docker-compose -v
docker-compose version 1.21.1, build 5a3f1a3
```

### Installation

```
git clone git@github.com:architectdevops7/docker-repo.git
cd docker-repo
cd docker-django-webapp
docker-compose up -d (to spin-up containers in one docker host)
```
### Containers in multiple host use the below method
```
git clone git@github.com:architectdevops7/docker-repo.git
cd docker-repo
cd docker-django-webapp
cd docker-repo/docker-django-webapp/src
docker build -t django-app . (Build the image)
```

### Create the compose file to orchestrate the containers in multiple host (with resource constraints and replicas - create swarm nodes prior this deployment)
```
version: '3.8'

services:
  app:
    image: "docker-webapp-django-app"
    ports:
      - "8000:8000"
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.2'
          memory: 256M

  db:
    image: "postgres:13.5-alpine"
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
```




