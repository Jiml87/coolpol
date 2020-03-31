FROM node:12

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production
COPY . .

EXPOSE 8080
CMD [ "node", "server.js"]