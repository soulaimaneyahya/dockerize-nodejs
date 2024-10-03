# dockerize-nodejs
building blogger using nodejs &amp; express js usign Docker.


## Project Setup

```sh
git clone https://github.com/soulaimaneyahya/nodejs-blogger.git
```

## Pull docker image

Src; https://hub.docker.com/r/753488/nodejs-blogger

```
docker pull 753488/nodejs-blogger:v1
```

## Start Docker 🐳

run:
```
docker-compose up
```

down:
```
docker-compose down --rmi all -v
```

### Hot-Reload for Development

```
cd nodejs-blogger/app
```

```sh
npm install
```

```sh
npm run dev
```
