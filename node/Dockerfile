FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app
RUN chmod -R 775 /home/node/app

USER node
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]
