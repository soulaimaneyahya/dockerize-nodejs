FROM node:18-alpine

RUN npm i -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "run", "dev"]
