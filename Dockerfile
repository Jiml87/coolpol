FROM node:12

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production
COPY . .
# COPY ./src .

EXPOSE 8080

COPY Docker/wait-for-it.sh /usr/src/app/
# RUN chmod +x ./src/Docker/wait-for-it.sh

CMD [ "node", "server/app.js"]