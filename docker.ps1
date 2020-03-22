# Volumes
$ docker volume create --name vol_gobarber_postgres  --driver local
$ docker volume create --driver local --opt type=none --opt device=c:/users/patri/docker-volumes/mongodb --opt o=bind vol_gobarber_mongodb


# PostgreSQL
docker run --name=gobarber_postgres -e POSTGRES_PASSWORD=gobarber_pwd -p 5432:5432 -v c:/users/patri/docker-volumes/postgres:/var/lib/postgresql/data -d postgres


# MongoDB
docker run --name=gobarber_mongodb -v /users/patri/docker-volumes/mongodb:/data/db -p 27017:27017 -d mongo


# Redis
docker run -d --name=gobarber_redis -p 6379:6379 redis:alpine
