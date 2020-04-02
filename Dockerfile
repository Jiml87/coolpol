FROM node:12

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production
COPY . .

EXPOSE 8080

COPY Docker/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

CMD [ "node", "server/app.js"]